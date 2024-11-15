import Flexbox from "@components/surfaces/Flexbox";
import {IProps} from "@components/complex/Widgets/WidgetEmployeesRow/props";
import Typography from "@components/data-display/Typography";
import GotoGrayIcon from "@images/GotoGrayIcon.svg";
import ArrowRightGray from "@images/ArrowRightGray.svg";
import ExclamationRoundRed from "@images/ExclamationRoundRed.svg";
import ExclamationTriangleYellow from "@images/ExclamationTriangleYellow.svg";
import Image from "@components/data-display/Image";
import {theme} from "@utils/theme/theme";
import Chip from "@components/data-display/Chip";
import {Link} from "react-router-dom";
import LinkComponent from "@components/data-display/Link";
import {FC} from "react";

// @barrelblur: убрать доллары
const WidgetEmployeesRow: FC<IProps> = ({item}) => {
  const {id, title, count, link, important, warning} = item;

  return (
    <Flexbox
      gap="12px"
      $justify="space-between"
      $align="center"
      $background={theme.colors.surfaceSecondary}
      $borderRadius="6px"
      $padding="8px 8px 8px 12px"
    >
      <Typography $variant="body-regular">{title}</Typography>

      <Flexbox gap="12px" $align="center">
        <Flexbox gap="4px" $align="center">
          {important &&
              // @barrelblur почему столько переопределяющихся параметров в каждом компоненте?
              // @barrelblur если у тебя Chip выглядит по-другому, следует создаь другой варант на основе Chip

            <Chip $background={theme.colors.systemErrorFaintSecondary} $borderRadius="4px" $padding="2px 4px 2px 2px" gap="2px">
              <Image src={ExclamationRoundRed} $width="16px" $height="16px" />
              <Typography $variant="chip-s" $color={theme.colors.textIconAccentError}>{important}</Typography>
            </Chip>
          }
          {warning &&
            <Chip $background={theme.colors.complimentaryYellowFaintSecondary} $borderRadius="4px" $padding="2px 4px 2px 2px" gap="2px">
              <Image src={ExclamationTriangleYellow} $width="16px" $height="16px" />
              <Typography $variant="chip-s" $color={theme.colors.textIconAccentWarning}>{warning}</Typography>
            </Chip>
          }
        </Flexbox>
        <Typography $variant="h3">{count}</Typography>
        {id === 'all' &&
          <Link to={link ? link : ''}>
            <Image src={ArrowRightGray} $width="20px" $height="20px" />
          </Link>
        }
        {id !== 'all' &&
          <LinkComponent href={link ? link : ''} target="_blank" $flex="1 0 20px">
            <Image src={GotoGrayIcon} $width="20px" $height="20px" />
          </LinkComponent>
        }
      </Flexbox>

    </Flexbox>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetEmployeesRow;
