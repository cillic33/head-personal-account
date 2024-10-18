export interface IWidgetMyDeputy {
  id: string;
  name: string;
  src: string;
  period: string;
}

interface IWidgetMyDeputiesBlock {
  id: string,
  title: string;
  rows: IWidgetMyDeputy[];
}

export type TWidgetMyDeputies = IWidgetMyDeputiesBlock[];
