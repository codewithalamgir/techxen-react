
export interface IMenuDT {
  id: number;
  title: string;
  link: string;
  home_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    img?: string;
  }[];
  mobile_menus?: {
    link: string;
    title: string;
  }[];
}[]