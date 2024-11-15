import {FontVariant} from "@components/data-display/Typography/props";

export interface IProps {
  src: string;
  name: string;
  width?: string;
  height?: string;
  fontVariant?: FontVariant;
  isNowrap?: boolean;
  isEllipsis?: boolean;
}
