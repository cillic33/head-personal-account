import Flexbox from "@components/surfaces/Flexbox";
import {IProps} from "@components/complex/Widgets/WidgetEmployeesRow/props";
import Typography from "@components/data-display/Typography";
import Link from "@components/data-display/Link";
import GotoGrayIcon from "@images/GotoGrayIcon.svg";
import ArrowGrayIcon from "@images/ArrowGrayIcon.svg";
import ExclamationRoundRed from "@images/ExclamationRoundRed.svg";
import ExclamationTriangleYellow from "@images/ExclamationTriangleYellow.svg";
import Image from "@components/data-display/Image";
import {theme} from "@utils/theme/theme";
import Chip from "@components/data-display/Chip";

const WidgetEmployeesRow = ({item}: IProps) => {
  const {id, title, count, link, important, warning} = item;

  return (
    <Flexbox
      $gap="12px"
      $justify="space-between"
      $align="center"
      $background={theme.colors.surfaceSecondary}
      $borderRadius="6px"
      $padding="8px 8px 8px 12px"
    >
      <Typography $variant="body-regular">{title}</Typography>

      <Flexbox $gap="12px" $align="center">
        <Flexbox $gap="4px" $align="center">
          {important &&
            <Chip $background={theme.colors.systemErrorFaintSecondary} $borderRadius="4px" $padding="2px 4px 2px 2px" $gap="2px">
              <Image src={ExclamationRoundRed} $width="16px" $height="16px" />
              <Typography $variant="chip-s" $color={theme.colors.textIconAccentError}>{important}</Typography>
            </Chip>
          }
          {warning &&
            <Chip $background={theme.colors.complimentaryYellowFaintSecondary} $borderRadius="4px" $padding="2px 4px 2px 2px" $gap="2px">
              <Image src={ExclamationTriangleYellow} $width="16px" $height="16px" />
              <Typography $variant="chip-s" $color={theme.colors.textIconAccentWarning}>{warning}</Typography>
            </Chip>
          }
        </Flexbox>
        <Typography $variant="h3">{count}</Typography>
        <Link href={link ? link : ''} target="_blank" $flex="1 0 20px">
          <Image src={id === 'all' ? ArrowGrayIcon : GotoGrayIcon} $width="20px" $height="20px" />
        </Link>
      </Flexbox>

    </Flexbox>
  );
}

export default WidgetEmployeesRow;
