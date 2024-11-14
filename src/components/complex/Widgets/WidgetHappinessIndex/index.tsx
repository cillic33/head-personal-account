import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import Flexbox from "@components/surfaces/Flexbox";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MMonthQuarterYearSwitcher, MWidgetMetrics} from "@utils/mock";
import {MouseEvent, useState} from "react";
import PieChartComponent from "@components/data-display/PieChart";
import SimpleSlider from "@components/data-display/SimpleSlider";
import {TWeeksSlider} from "@typing/TWeeksSlider";
import {getWeeksArray} from "@utils/index";

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const WidgetHappinessIndex = (props: IWidget) => {
  const dataHrMetric = MWidgetMetrics["hrMetric"];
  const dataMlMetric = MWidgetMetrics["mlMetric"];
  const [currentDate] = useState<Date>(new Date());
  const [weeksData] = useState<TWeeksSlider>(getWeeksArray(currentDate));

  const handlePeriodsSwitcherClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Period', event.currentTarget.id);
  }

  const handleSlide = (oldSlide: number, currentSlide: number) => {
    console.log("Slide", oldSlide, currentSlide);
  }

  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $externalLink={props.externalLink}
      $isSplitter={true}
    >
      <Flexbox $gap="16px" $direction="column">
        <Flexbox $justify="space-between" $gap="16px" $flexWrap="wrap" $direction="row-reverse" $align="center">
          <ButtonGroup buttons={MMonthQuarterYearSwitcher} onClick={handlePeriodsSwitcherClick} $buttonsWidth="74px" />
          <SimpleSlider $weeksData={weeksData} $maxWidth="200px" $height="32px" $onSlide={handleSlide} />
        </Flexbox>

        <Flexbox $gap="16px" $padding="16px" $direction="column">
          <PieChartComponent $data={dataHrMetric} />
          <PieChartComponent $data={dataMlMetric} />
        </Flexbox>
      </Flexbox>
    </Expand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetHappinessIndex;
