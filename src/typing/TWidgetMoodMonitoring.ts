interface IWidgetMoodMonitoringRow {
  id: string;
  title: string;
  percent: number;
  count: number;
}

export type TWidgetMoodMonitoring = IWidgetMoodMonitoringRow[]
