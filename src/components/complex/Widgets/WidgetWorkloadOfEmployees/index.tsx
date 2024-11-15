import {Expand} from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWeekMonthSwitcher, MWorkloadOfEmployees} from "@utils/mock";
import {ProgressBar} from "@components/data-display/ProgressBar";
import {Flexbox} from "@components/surfaces/Flexbox";
import {ButtonGroup} from "@components/inputs/ButtonGroup";
import {FC, MouseEvent, useState} from "react";
import {SimpleSlider} from "@components/data-display/SimpleSlider";
import {getWeeksArray} from "@utils/index";
import {TWeeksSlider} from "@typing/TWeeksSlider";

export const WidgetWorkloadOfEmployees: FC<IWidget> = (props) => {
  const [currentDate] = useState<Date>(new Date());
  const [weeksData] = useState<TWeeksSlider>(getWeeksArray(currentDate));

  const handlePeriodsSwitcherClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Period', event.currentTarget.id);
  }

  const handleSlide = (oldSlide: number, currentSlide: number) => {
    console.log("Slide", oldSlide, currentSlide);

    // TODO Сделать передачу данных для бесконечной прокрутки (для всех слайдеров)
    //const newDate = new Date(currentDate.valueOf() + 7 * DAY);
    //setCurrentDate(newDate);
    //setWeeksData(getWeeksArray(newDate));
  }

  return (
    <Expand
      title={props.title}
      isOpen={props.isOpen}
      isDragIcon={props.isDragIcon}
      externalLink={props.externalLink}
      isSplitter={true}
    >
      <Flexbox gap="16px" direction="column">
        <Flexbox justify="space-between" gap="16px" flexWrap="wrap" direction="row-reverse" align="center">
          {/*TODO Добавить обработку переключения периода (для всех переключателей)*/}
          <ButtonGroup buttons={MWeekMonthSwitcher} onClick={handlePeriodsSwitcherClick} buttonsWidth="92px" />
          <SimpleSlider weeksData={weeksData} maxWidth="200px" height="32px" onSlide={handleSlide} />
        </Flexbox>
        <Flexbox gap="8px" direction="column">
          {MWorkloadOfEmployees.map(item => (
            <ProgressBar key={item.id} percent={item.percent} color={item.color} title={item.title} />
          ))}
        </Flexbox>
      </Flexbox>
    </Expand>
  );
}
