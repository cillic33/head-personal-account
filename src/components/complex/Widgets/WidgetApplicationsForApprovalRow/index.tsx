import Flexbox from "@components/surfaces/Flexbox";
import {theme} from "@utils/theme/theme";
import Typography from "@components/data-display/Typography";
import Chip from "@components/data-display/Chip";
import Image from "@components/data-display/Image";
import FireRedIcon from "@images/FireRedIcon.svg";
import PlusGreenIcon from "@images/PlusGreenIcon.svg";
import GotoGrayIcon from "@images/GotoGrayIcon.svg";
import {IProps} from "./props";
import LinkComponent from "@components/data-display/Link";

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const WidgetApplicationsForApprovalRow = ({item}: IProps) => {
  return (
    <Flexbox
      $gap="12px"
      $justify="space-between"
      $background={item.id === 'all' ? 'transparent' : theme.colors.surfaceSecondary}
      $borderRadius="6px"
      $padding={item.id === 'all' ? '4px 12px' : '8px 8px 8px 12px'}
      $margin={item.id === 'all' ? '0 0 4px 0' : undefined}
      $align="center"
    >
      <Typography $variant="body-regular">{item.title}</Typography>
      <Flexbox $gap="12px">
        <Flexbox $gap="8px">
          {item.important > 0 &&
            <Chip
              $background={theme.colors.systemErrorFaintSecondary}
              $borderRadius="4px"
              $padding="2px 6px 2px 4px"
              $gap="4px"
              $flex="1 0 auto"
            >
              <Image
                src={FireRedIcon}
                $width="16px"
                $height="16px"
              />
              <Typography
                $variant={item.id === 'all' ? 'chip-m' : 'chip-s'}
                $color={theme.colors.textIconAccentError}
              >{item.important}</Typography>
            </Chip>
          }
          {item.increase > 0 &&
            <Chip
              $background={theme.colors.complimentaryGreenFaintSecondary}
              $borderRadius="4px"
              $padding="2px 6px 2px 4px"
              $gap="4px"
              $flex="1 0 auto"
            >
              <Image
                src={PlusGreenIcon}
                $width="16px"
                $height="16px"
              />
              <Typography
                $variant={item.id === 'all' ? 'chip-m' : 'chip-s'}
                $color={theme.colors.textIconAccentSuccess}
              >{item.increase}</Typography>
            </Chip>
          }
        </Flexbox>
        <Typography $variant={item.id === 'all' ? 'h2' : 'h3'}>{item.count}</Typography>
        {item.id !== 'all' &&
          <LinkComponent href={item.link ? item.link : ''} target="_blank" $flex="1 0 auto">
            <Image src={GotoGrayIcon} $width="20px" $height="20px" />
          </LinkComponent>
        }
      </Flexbox>
    </Flexbox>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetApplicationsForApprovalRow;
