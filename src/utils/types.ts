import { ElementType } from "react";

export type LargeSideBarSections = {
  id: number;
  title: string;
  items: LargeSideBarItems[];
  visibleItemCount?: number;
};

export type LargeSideBarItems = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
  id?: string;
};

export type SmallSideBarItems = {
  Icon: ElementType;
  title: string;
  url: string;
};
