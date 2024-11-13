import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MouseEvent, useState} from "react";
import Flexbox from "@components/surfaces/Flexbox";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MWeekMonthSwitcher, MWidgetMoodMonitoring} from "@utils/mock";
import Typography from "@components/data-display/Typography";
import Chip from "@components/data-display/Chip";
import {theme} from "@utils/theme/theme";
import Image from "@components/data-display/Image";
import MoodImg5 from "@images/MoodImg5.svg"
import MoodImg4 from "@images/MoodImg4.svg"
import SimpleSlider from "@components/data-display/SimpleSlider";
import {TWeeksSlider} from "@typing/TWeeksSlider";
import {getWeeksArray} from "@utils/index";

const WidgetMoodMonitoring = (props: IWidget) => {
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
      <Flexbox
        $gap="16px"
        $direction="column">
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
        <Flexbox
          $gap="16px"
          $direction="column">
          {
            MWidgetMoodMonitoring.map(item => (
              <Flexbox
                key={item.id}
                $gap="12px"
                $align="center"
                $padding="16px"
                $border={`1px solid ${theme.colors.surfacePrimary}`}
                $borderRadius="6px"
              >
                <Typography
                  $variant="body-semibold"
                  $color={theme.colors.textIconBaseSecondary}
                  $flex="1 1"
                >{item.title}</Typography>
                <Chip
                  $background={item.percent > 0 ? theme.colors.complimentaryGreenFaintSecondary : theme.colors.systemErrorFaintSecondary}
                  $padding="2px 6px 2px 4px"
                  $borderRadius="4px"
                >
                  <Typography
                    $variant="chip-m"
                    $color={item.percent > 0 ? theme.colors.textIconAccentSuccess : theme.colors.textIconAccentError}
                  >
                    {item.percent > 0 ? "+" + item.percent : item.percent}%
                  </Typography>
                </Chip>
                <Typography $variant="h2">{item.count}</Typography>
                <Image
                  src={item.count >= 5 ? MoodImg5 : MoodImg4} // TODO добавить изображения для остальных случаев
                  $width="32px"
                  $height="32px"/>
              </Flexbox>
            ))
          }
        </Flexbox>
      </Flexbox>
    </Expand>
  );
}

export default WidgetMoodMonitoring;
