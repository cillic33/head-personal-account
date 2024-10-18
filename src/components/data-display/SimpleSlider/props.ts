import {TWeeksSlider} from "@typing/TWeeksSlider";

export interface IProps {
  $weeksData: TWeeksSlider;
  $maxWidth?: string;
  $height?: string;
  $onSlide: (oldSlide: number, currentSlide: number) => void;
}
