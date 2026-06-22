# Acceso a la VM de análisis CERT

Documento de referencia para conectarse a la VM donde se despliega el sitio para análisis del CERT-UNLP.

## Prerequisitos (máquina local — Arch Linux)

```bash
sudo pacman -S openvpn sshpass
```

## 1. Configurar la VPN

El equipo de infraestructura provee un archivo `.tar.gz` con los certificados y la configuración OpenVPN. Extraerlo y crear el archivo de credenciales:

```bash
mkdir -p /tmp/vpn-access
tar -xzf /ruta/al/archivo.tar.gz -C /tmp/vpn-access --strip-components=1
# Resultado: *.ovpn  *.conf  *.key  *.crt  ca.crt

# Crear archivo de credenciales (usuario y contraseña en líneas separadas)
printf '<vpn-user>\n<vpn-password>\n' > /tmp/vpn-access/auth.txt
chmod 600 /tmp/vpn-access/auth.txt
```

### Conectar

```bash
sudo openvpn \
  --config /tmp/vpn-access/<usuario>.ovpn \
  --auth-user-pass /tmp/vpn-access/auth.txt \
  --cd /tmp/vpn-access \
  --daemon \
  --log /tmp/vpn-access/openvpn.log
```

### Verificar conexión

```bash
# La interfaz tun0 debe aparecer con IP asignada
ip addr show tun0

# El log debe mostrar "Initialization Sequence Completed"
tail -20 /tmp/vpn-access/openvpn.log

# Verificar ruta a la VM
ip route get <vm-ip>
```

### Desconectar

```bash
sudo pkill openvpn
```

## 2. Acceso SSH a la VM

La VM sólo es accesible desde dentro de la VPN.

```bash
sshpass -p '<vm-password>' \
  ssh -o StrictHostKeyChecking=no <vm-user>@<vm-ip>
```

Para sesiones interactivas:

```bash
ssh <vm-user>@<vm-ip>
```

## 3. Datos de la VM

| Propiedad            | Valor                                       |
| -------------------- | ------------------------------------------- |
| Sistema operativo    | Debian GNU/Linux 13 (trixie)                |
| Kernel               | Linux 6.12 amd64                            |
| RAM                  | 3.8 GB                                      |
| Disco principal      | 19 GB (`/dev/vda1`)                         |
| Disco datos          | 37 GB (`/dev/vda6` → `/var`)                |
| Firewall             | nftables                                    |
| Paquetes disponibles | Python 3.13, wget, nginx (inactivo)         |
| Docker               | No instalado                                |
| sudo                 | No disponible para el usuario de aplicación |

## 4. Credenciales

Las credenciales de acceso (VPN y SSH) se gestionan por fuera de este repositorio.
Solicitarlas al equipo de infraestructura de la Dirección de Discapacidad — UNLP.

## 5. Notas operacionales

- La VPN usa OpenVPN sobre TCP puerto 443 con autenticación por certificado + usuario/contraseña.
- El servidor VPN está en la red `163.10.5.0/24`.
- La VM asigna IP via DHCP dentro del rango de la VPN (`192.168.120.x`).
- nftables bloquea ICMP entrante — el ping a la VM falla aun con VPN activa. Usar SSH para verificar conectividad.
- El usuario de aplicación **no tiene sudo**. Las tareas que requieren privilegios de root deben coordinarse con el administrador del sistema.
- El repositorio se despliega con Docker Compose (`compose.prod.yml`). Para levantar el entorno sin Docker se requiere Node.js instalado vía `nvm`.
