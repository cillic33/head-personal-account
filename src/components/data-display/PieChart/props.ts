import {IPieChartComponent} from "@typing/TPieChart";

export interface IProps {
  $data: IPieChartComponent;
  $width?: number;
  $height?: number;
  $innerRadius?: number;
  $outerRadius?: number;
  $isCenterText?: boolean;
  $isRightInfo?: boolean;
  $isHeader?: boolean;
  $postfix?: string;
}

interface IViewBox {
  cx: number,
  cy: number,
}

export interface ICustomLabelProps {
  viewBox: IViewBox;
  centerCount: string;
  centerText: string;
  $postfix?: string;
}


export interface IStyledCircle {
  color: string;
}
