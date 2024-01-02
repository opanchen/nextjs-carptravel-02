export type ServiceNavProps = {
  services: {
    _type?: string | undefined;
    _key?: string | undefined;
    order: number;
    shortcut: string;
    description: string;
    tagline: string;
    title: string;
  }[];
  activeSlide: number;
  onClick: (index: number) => void;
};
