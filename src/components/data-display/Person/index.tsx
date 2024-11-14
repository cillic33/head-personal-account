import {IProps} from "./props";
import Image from "@components/data-display/Image";
import styled from "styled-components";
import Typography from "@components/data-display/Typography";

const StyledPerson = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

// @barrelblur: неправильно размечена функция
const Person = ({src, name, $width = "32px", $height = "32px", $fontVariant, $isNowrap, $isEllipsis}: IProps) => {
  return (
    <StyledPerson>
      <Image src={src} $width={$width} $height={$height} />
      <Typography $variant={$fontVariant ? $fontVariant : "body-regular"} $isNowrap={$isNowrap} $isEllipsis={$isEllipsis}>{name}</Typography>
    </StyledPerson>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Person;
