export interface Footer {
  mission: string;
  socialMedia: SocialMedia[];
  columns: Column[];
  copyright: string;
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
