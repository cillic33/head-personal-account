export interface IMyDeputy {
  id: string;
  name: string;
  src: string;
  period: string;
}

interface IMyDeputiesBlock {
  id: string,
  title: string;
  rows: IMyDeputy[];
}

export type TMyDeputies = IMyDeputiesBlock[];
