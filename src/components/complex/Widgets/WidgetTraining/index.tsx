import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MouseEvent, useState} from "react";
import {TWeeksSlider} from "@typing/TWeeksSlider";
import {getWeeksArray} from "@utils/index";
import Flexbox from "@components/surfaces/Flexbox";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MMonthYearSwitcher, MWidgetMetrics} from "@utils/mock";
import SimpleSlider from "@components/data-display/SimpleSlider";
import Typography from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";
import EducationBlueIcon from "@images/EducationBlueIcon.svg"
import Image from "@components/data-display/Image";
import Divider from "@components/data-display/Divider";
import PieChartComponent from "@components/data-display/PieChart";

const WidgetTraining = (props: IWidget) => {
  const [currentDate] = useState<Date>(new Date());
  const [weeksData] = useState<TWeeksSlider>(getWeeksArray(currentDate));
  const dataCoursesMetric = MWidgetMetrics["coursesMetric"];
  const dataCostsMetric = MWidgetMetrics["costsMetric"];

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
      $internalLink={props.internalLink}
    >
      <Flexbox $gap="16px" $direction="column">
        <Flexbox $align="center" $gap="16px" $padding="16px" $border={`1px solid ${theme.colors.surfacePrimary}`} $borderRadius="6px">
          <Image src={EducationBlueIcon} $width="20px" $flex="0 0 20px"></Image>
          <Typography $variant="body-semibold" $color={theme.colors.textIconBasePrimary} $flex="1 0 auto">Сотрудники на обучении</Typography>
          <Typography $variant="h2">2</Typography>
        </Flexbox>

        <Divider direction="horizontal" $color={theme.colors.onSurfaceFaintQuaternary} />

        <Flexbox $justify="space-between" $gap="16px" $flexWrap="wrap" $direction="row-reverse" $align="center">
          <ButtonGroup buttons={MMonthYearSwitcher} onClick={handlePeriodsSwitcherClick} $buttonsWidth="92px" />
          <SimpleSlider $weeksData={weeksData} $maxWidth="200px" $height="32px" $onSlide={handleSlide} />
        </Flexbox>

        <PieChartComponent $data={dataCoursesMetric} $isHeader={false} />

        <PieChartComponent $data={dataCostsMetric} $isHeader={false} />
      </Flexbox>
    </Expand>
  );
}

export default WidgetTraining;
