import {IProps} from "./props";
import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";
import Typography from "@components/data-display/Typography";
import Button from "@components/inputs/Button";
import EditBlueIcon from "@images/EditBlueIcon.svg";
import DeleteRedIcon from "@images/DeleteRedIcon.svg";
import {useState} from "react";
import {theme} from "@utils/theme/theme";

const WidgetMyLinksRow = ({$item}: IProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Flexbox
      key={$item.id}
      $gap="12px"
      $align="center"
      $padding="8px 12px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $background={isHovered ? theme.colors.surfaceSecondary : 'transparent'}
      $borderRadius="6px"
    >
      <Image
        src={$item.imageSrc}
        $flex="0 0 24px"/>
      <Typography
        $variant="body-regular"
        $flex="1 0 auto">{$item.title}</Typography>
      <Button
        $variant="no-style"
        size="no-size"
        $flex="0 0 24px"
        $opacity={isHovered ? 1 : 0}
      >
        <Image
          src={EditBlueIcon}
          $width="24px"/>
      </Button>
      <Button
        $variant="no-style"
        size="no-size"
        $opacity={isHovered ? 1 : 0}
      >
        <Image
          src={DeleteRedIcon}
          $width="24px"
          $flex="0 0 24px"/>
      </Button>
    </Flexbox>
  );
}

export default WidgetMyLinksRow;
