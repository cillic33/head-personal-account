import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";
import Typography from "@components/data-display/Typography";
import LogoIbs from "@images/LogoIbs.svg"
import AvatarIvanov from "@images/AvatarIvanov.png"
import Button from "@components/inputs/Button";
import CaretDownGray from "@images/CaretDownGray.svg";
import BellBlue from "@images/BellBlue.svg";
import Chip from "@components/data-display/Chip";
import {theme} from "@utils/theme/theme";
import Person from "@components/data-display/Person";

const StyledHeader = styled.div`
  background: #fff;
  padding: 12px 32px;
`
// @barrelblur: убрать доллары в атрибутах
const Header = () => {
  return (
    <StyledHeader>
      <Flexbox $align="center" $justify="space-between">

        <Flexbox gap="24px" $align="center">
          <Image src={LogoIbs} alt="Главная" $width="40px" $height="40px" />
          <Typography $variant="h3">
            Личный кабинет руководителя
          </Typography>
        </Flexbox>

        <Flexbox gap="18px" $align="center">
          <Flexbox gap="8px" $align="center">
            <Person src={AvatarIvanov} name="Иванов Сергей Владимирович" $width="40px" $height="40px" />
            <Button type="button" $variant="no-style" size="no-size">
              <Image src={CaretDownGray} $width="20px" $height="20px" />
            </Button>
          </Flexbox>

          <Button type="button" $variant="no-style" size="no-size" $position="relative">
            <Image src={BellBlue} $width="24px" $height="24px" />
            <Chip
              $background={theme.colors.systemErrorNormal}
              $width="13px"
              $height="14px"
              $borderRadius="8px"
              $position="absolute"
              $top="0px"
              $right="2px"
              $border="1px solid #fff"
            >
              <Typography
                $variant="chip-xs"
                $color="#fff">2</Typography>
            </Chip>
          </Button>
        </Flexbox>

      </Flexbox>
    </StyledHeader>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Header;
