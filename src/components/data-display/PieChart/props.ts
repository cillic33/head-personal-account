import {IPieChartComponent} from "@typing/TPieChart";

export interface IProps {
  $data: IPieChartComponent;
  $width?: number;
  $height?: number;
  $innerRadius?: number;
  $outerRadius?: number;
  $isCenterText?: boolean;
  $isRightInfo?: boolean;
  $isWrapper?: boolean;
}

interface IViewBox {
  cx: number,
  cy: number,
}

export interface ICustomLabelProps {
  viewBox: IViewBox;
  centerCount: string;
  centerText: string;
}


export interface IStyledCircle {
  color: string;
}
