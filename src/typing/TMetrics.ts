interface IWidgetMetricsRow {
  id: string;
  title: string;
  count: number
}

type TWidgetMetricsList = IWidgetMetricsRow[]

export type TWidgetMetrics = [
  {
    id: string;
    title: string;
    percent: number;
    total: number;
    employeesCount: number;
    detailedList: TWidgetMetricsList;
  }
]
