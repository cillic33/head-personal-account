interface IPieChartVariant {
  name: string;
  value: number;
  color: string;
}

export type TPieChartVariants = IPieChartVariant[]

export interface IPieChartComponent {
  title: string;
  percent: number;
  total: number;
  variants: TPieChartVariants;
  centerCount: string;
  centerText: string;
}
