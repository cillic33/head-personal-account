export interface IWidgetEmployee {
  id: string;
  title: string;
  count: number;
  link: string;
  important?: number;
  warning?: number;
}

export type TWidgetEmployees = IWidgetEmployee[];
