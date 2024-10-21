interface IPieChartVariant {
  name: string;
  value: number;
}

type TPieChartVariants = IPieChartVariant[]

export type TPieChartComponent = {
  variants: TPieChartVariants;
  colors: string[];
}
