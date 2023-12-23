export type GallerySliderProps = {
  items: {
    order: number;
    name: string;
    desc: string;
  }[];
  navText: {
    nextBtnLabel: string;
    prevBtnLabel: string;
  };
  className: string;
};
