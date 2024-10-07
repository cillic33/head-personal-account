import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";
import Typography from "@components/data-display/Typography";
import LogoIbs from "@images/LogoIbs.svg"
import AvatarIvanov from "@images/AvatarIvanov.png"
import Button from "@components/inputs/Button";
import CaretDownGray from "@images/CaretDownGray.svg";
import BellBlue from "@images/BellBlue.svg";

const StyledHeader = styled.div`
  background: #fff;
  padding: 12px 32px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Flexbox $align="center" $justify="space-between">

        <Flexbox $gap="24px" $align="center">
          <Image src={LogoIbs} alt="Главная" $width="40px" $height="40px" />
          <Typography $variant="h3">
            Личный кабинет руководителя
          </Typography>
        </Flexbox>

        <Flexbox $gap="18px" $align="center">
          <Flexbox $gap="8px" $align="center">
            <Image src={AvatarIvanov} alt="Иванов Сергей Владимирович" $width="40px" $height="40px" />
            <Typography $variant="body-regular">
              Иванов Сергей Владимирович
            </Typography>
            <Button type="button" $padding="6px">
              <Image src={CaretDownGray} $width="20px" $height="20px" />
            </Button>
          </Flexbox>

          <Button type="button">
            <Image src={BellBlue} $width="24px" $height="24px" />
          </Button>
        </Flexbox>

      </Flexbox>
    </StyledHeader>
  );
}

export default Header;
