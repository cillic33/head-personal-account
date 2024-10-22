import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import Flexbox from "@components/surfaces/Flexbox";
import {theme} from "@utils/theme/theme";
import Typography from "@components/data-display/Typography";
import PersonBlueIcon from "@images/PersonBlueIcon.svg";
import PaperBlueIcon from "@images/PaperBlueIcon.svg";
import Image from "@components/data-display/Image";
import Divider from "@components/data-display/Divider";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MWeekMonthSwitcher, MWidgetMetrics} from "@utils/mock";
import SimpleSlider from "@components/data-display/SimpleSlider";
import {MouseEvent, useState} from "react";
import {TWeeksSlider} from "@typing/TWeeksSlider";
import {getWeeksArray} from "@utils/index";
import PieChartComponent from "@components/data-display/PieChart";

const WidgetStaffMovement = (props: IWidget) => {
  const [currentDate] = useState<Date>(new Date());
  const [weeksData] = useState<TWeeksSlider>(getWeeksArray(currentDate));
  const dataStaffTurnoverRate = MWidgetMetrics["staffTurnoverRateMetric"];

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
    >
      <Flexbox $gap="16px" $direction="column">
        <Flexbox $borderRadius="6px" $border={`1px solid ${theme.colors.surfacePrimary}`}>
          <Flexbox $direction="column" $gap="8px" $padding="16px 16px 16px 20px" $width="50%">
            <Typography $variant="caption-semibold" $color={theme.colors.textIconBaseSecondary}>Открытые вакансии</Typography>
            <Flexbox $align="center" $gap="8px">
              <Image src={PersonBlueIcon} $width="20px" $height="20px" />
              <Typography $variant="body-semibold">40</Typography>
            </Flexbox>
          </Flexbox>
          <Divider direction="vertical" />
          <Flexbox $direction="column" $gap="8px" $padding="16px 16px 16px 20px" $width="50%">
            <Typography $variant="caption-semibold" $color={theme.colors.textIconBaseSecondary}>Офферы по вакансиям</Typography>
            <Flexbox $align="center" $gap="8px">
              <Image src={PaperBlueIcon} $width="20px" $height="20px" />
              <Typography $variant="body-semibold">1</Typography>
            </Flexbox>
          </Flexbox>
        </Flexbox>

        <Flexbox
          $justify="space-between"
          $gap="16px"
          $flexWrap="wrap"
          $direction="row-reverse"
          $align="center">
          <ButtonGroup
            buttons={MWeekMonthSwitcher}
            onClick={handlePeriodsSwitcherClick}
            $buttonsWidth="92px"/>
          <SimpleSlider
            $weeksData={weeksData}
            $maxWidth="200px"
            $height="32px"
            $onSlide={handleSlide}/>
        </Flexbox>

        <PieChartComponent $data={dataStaffTurnoverRate} />
      </Flexbox>
    </Expand>
  );
}

export default WidgetStaffMovement;
