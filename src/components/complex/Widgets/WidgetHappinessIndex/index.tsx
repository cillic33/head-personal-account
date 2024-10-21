import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import Flexbox from "@components/surfaces/Flexbox";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MMonthQuarterYearSwitcher} from "@utils/mock";
import {MouseEvent} from "react";

const WidgetHappinessIndex = (props: IWidget) => {
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
        <Flexbox $justify="space-between" $gap="16px" $flexWrap="wrap" $direction="row-reverse" $align="center">
          <ButtonGroup buttons={MMonthQuarterYearSwitcher} onClick={handlePeriodsSwitcherClick} $buttonsWidth="74px" />
          <>Simple Slider here</>
        </Flexbox>

      </Flexbox>
    </Expand>
  );
}

export default WidgetHappinessIndex;
