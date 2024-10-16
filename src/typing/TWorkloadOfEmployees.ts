interface IWorkloadOfEmployeesRow {
  id: string;
  title: string;
  percent: number;
  color: string;
}

export type TWorkloadOfEmployees = IWorkloadOfEmployeesRow[];
