import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MPeriodsSwitcher, MWeeksSlider, MWorkloadOfEmployees} from "@utils/mock";
import ProgressBar from "@components/data-display/ProgressBar";
import Flexbox from "@components/surfaces/Flexbox";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MouseEvent} from "react";
import SimpleSlider from "@components/data-display/SimpleSlider";

const WidgetWorkloadOfEmployees = (props: IWidget) => {
  const handlePeriodsSwitcherClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Period', event.currentTarget.id);
  }

  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      <Flexbox $gap="16px" $direction="column">
        <Flexbox $justify="space-between" $gap="16px">
          <SimpleSlider $weeksData={MWeeksSlider} $maxWidth="200px" $height="32px" />
          <ButtonGroup buttons={MPeriodsSwitcher} onClick={handlePeriodsSwitcherClick} $buttonsWidth="92px" />
        </Flexbox>
        <Flexbox $gap="8px" $direction="column">
          {MWorkloadOfEmployees.map(item => (
            <ProgressBar key={item.id} $percent={item.percent} $color={item.color} $title={item.title} />
          ))}
        </Flexbox>
      </Flexbox>
    </Expand>
  );
}

export default WidgetWorkloadOfEmployees;
