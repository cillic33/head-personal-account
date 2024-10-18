export interface TEmployeeWidget {
  id: string;
  title: string;
  count: number;
  link: string;
  important?: number;
  warning?: number;
}

export type TEmployeesWidget = TEmployeeWidget[];
