export interface Footer {
  companyMission: string;
  socialMedia: SocialMedia[];
  columns: Column[];
  newsletter: Newsletter[];
  copyright: string;
}

interface Newsletter {
  title: string;
  subtitle: string;
}

interface SocialMedia {
  text: string;
  url: string;
  icon: string;
}

interface Column {
  title: string;
  links: Link[];
}

interface Link {
  text: string;
  url: string;
}
