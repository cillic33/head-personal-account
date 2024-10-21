import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import Flexbox from "@components/surfaces/Flexbox";
import ButtonGroup from "@components/inputs/ButtonGroup";
import {MMonthQuarterYearSwitcher} from "@utils/mock";
import {MouseEvent} from "react";
import {theme} from "@utils/theme/theme";
import Typography from "@components/data-display/Typography";
import Chip from "@components/data-display/Chip";

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

        <Flexbox $direction="column" $borderRadius="6px" $border={`1px solid ${theme.colors.surfacePrimary}`}>
          <Flexbox $padding="16px" $gap="12px" $align="center" $justify="space-between" $border={`1px solid ${theme.colors.surfacePrimary}`} $borderWidth="0 0 1px 0">
            <Typography $variant="body-semibold" $color={theme.colors.textIconBaseSecondary}>HR-метрики</Typography>
            <Flexbox $gap="12px" $align="center">
              <Chip $padding="2px 6px 2px 4px" $background={theme.colors.systemErrorFaintSecondary} $borderRadius="4px">
                <Typography $variant="chip-m" $color={theme.colors.textIconAccentError}>−0,1%</Typography>
              </Chip>
              <Typography $variant="h2" $color={theme.colors.systemWarningDarkened}>4,2</Typography>
            </Flexbox>
          </Flexbox>
          <div>Diagram</div>
        </Flexbox>

      </Flexbox>
    </Expand>
  );
}

export default WidgetHappinessIndex;
