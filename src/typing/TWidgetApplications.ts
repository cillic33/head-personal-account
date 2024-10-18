export interface IWidgetApplication {
  id: string,
  title: string,
  important: number,
  increase: number,
  count: number,
  link?: string,
}

export type TWidgetApplications = IWidgetApplication[];
