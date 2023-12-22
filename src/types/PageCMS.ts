export type HeroSectionText = {
  _type: string;
  heading: string;
  subtitle: string;
  tagline: string;
  excerpt: string;
  promotionBtnLabel: string;
};

export type AboutSectionText = {
  _type: string;
  heading: string;
  tagline: string;
  text: string[];
};

export type ServicesSectionText = {
  _type: string;
  heading: string;
  offerList: {
    _type: string;
    _key: string;
    order: number;
    shortcut: string;
    description: string;
    tagline: string;
    title: string;
  }[];
};

export type CareerSectionText = {
  _type: string;
  heading: string;
  subtitle: string;
  tagline: string;
  promotionFormText: string;
  features: {
    _type: string;
    _key: string;
    title: string;
    description: string;
  }[];
};

export type GallerySectionText = {
  _type: string;
  heading: string;
  sliderButtons: {
    nextBtnLabel: string;
    prevBtnLabel: string;
  };
};

export type Input =
  | 'fullName'
  | 'email'
  | 'position'
  | 'phone'
  | 'message'
  | 'checkbox';

export type FormText = {
  _type: string;
  submitBtnLabel: string;
  fields: {
    _type: string;
    _key: string;
    label: string;
    input: Input;
    placeholder?: string;
    requiredErrorText?: string;
    validationErrorText?: string;
  }[];
};

export type ContactsSectionText = {
  _type: string;
  heading: string;
  contactInfo: {
    _type: string;
    _key: string;
    type: string;
    labelTag: string;
    items: {
      _type: string;
      _key: string;
      label: string;
      value: string;
    }[];
  }[];
};

export type PageResponse = {
  pageBuilder: [
    HeroSectionText,
    AboutSectionText,
    ServicesSectionText,
    CareerSectionText,
    GallerySectionText,
    ContactsSectionText,
    FormText,
  ];
};

export type PageData = {
  hero: HeroSectionText;
  about: AboutSectionText;
  services: ServicesSectionText;
  career: CareerSectionText;
  gallery: GallerySectionText;
  contacts: ContactsSectionText;
  form: FormText;
};
