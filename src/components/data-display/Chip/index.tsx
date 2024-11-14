import {IProps} from "./props";
import styled from "styled-components";

// @barrelblur: много лишних аттрибутов, которые можно было бы вывести в темы
// @barrelblur: убрать доллары
const StyledChip = styled.div<IProps>`
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  background: ${props => props.$background || undefined};
  border-radius: ${props => props.$borderRadius || undefined};
  position: ${props => props.$position || undefined};
  top: ${props => props.$top || undefined};
  right: ${props => props.$right || undefined};
  border: ${props => props.$border || undefined};
  padding: ${props => props.$padding || undefined};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap || undefined};
  flex: ${props => props.$flex || undefined};
`

// @barrelblur: неправильно размечена функция
const Chip = ({...props}: IProps) => {
  return (
    <StyledChip {...props} />
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Chip;
