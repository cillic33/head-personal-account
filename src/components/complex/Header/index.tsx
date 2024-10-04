import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import LogoIbs from "@images/LogoIbs.svg"
import Image from "@components/data-display/Image";

const StyledHeader = styled.div`
  background: #fff;
  padding: 12px 32px;
`

const LOGO_IMG_ALT = 'Главная';

const Header = () => {
  return (
    <StyledHeader>
      <Flexbox $align="center" $justify="space-between">
        <Flexbox $gap="24px" $align="center">
          <Image src={LogoIbs} alt={LOGO_IMG_ALT} $width="40px" $height="40px" />
          <div>Личный кабинет руководителя</div>
        </Flexbox>
        <div>Иванов Сергей Владимирович</div>
      </Flexbox>
    </StyledHeader>
  );
}

export default Header;
