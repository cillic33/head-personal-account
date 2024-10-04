import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import LogoIbs from "@images/LogoIbs.svg"
import Image from "@components/data-display/Image";
import Typography from "@components/data-display/Typography";

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
        <div>Иванов Сергей Владимирович</div>
      </Flexbox>
    </StyledHeader>
  );
}

export default Header;
