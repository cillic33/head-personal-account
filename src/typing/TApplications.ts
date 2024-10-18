export interface TApplication {
  id: string,
  title: string,
  important: number,
  increase: number,
  count: number,
  link?: string,
}

export type TApplications = TApplication[];
