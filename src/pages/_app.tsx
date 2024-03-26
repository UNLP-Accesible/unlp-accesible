import { AppProps } from 'next/app';

export interface SharedPageProps {}

export default function App({ Component, pageProps }: AppProps<SharedPageProps>) {
  return <Component {...pageProps} />;
}
