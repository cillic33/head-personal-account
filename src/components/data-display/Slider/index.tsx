import {IProps} from "./props";
import styled from "styled-components";
import ChevronLeftBlue from "@images/ChevronLeftBlue.svg";
import ChevronRightBlue from "@images/ChevronRightBlue.svg";
import Image from "@components/data-display/Image";
import {useEffect, useState} from "react";
import Typography from "@components/data-display/Typography";

const StyledSlider = styled.div<IProps>`
  overflow: hidden;
  position: relative;
  border: 1px solid ${props => props.theme.colors.surfacePrimary};
  border-radius: 6px;
  width: ${props => props.$width || "100%"};
  height: ${props => props.$height || "32px"};
`

const StyledSliderWrap = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition: left .3s ease;
`

const StyledSliderItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const StyledArrowLeft = styled(Image)`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 1;
`

const StyledArrowRight = styled(Image)`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 1;
`

const Slider = (props: IProps) => {
  const FIRST_SLIDE = 1;
  const COUNT_SLIDES = 3;

  const [activeId, setActiveId] = useState<number>(FIRST_SLIDE);

  const handleLeftArrowClick = () => {
    setActiveId((prev: number) => prev > 1 ?  prev - 1 : 1);
  }

  const handleRightArrowClick = () => {
    setActiveId(prev => prev < COUNT_SLIDES - 1 ? prev + 1 : COUNT_SLIDES);
  }

  useEffect(() => {
    const wrapper = document.querySelector("#sliderWrapper");
    const newSlide = document.querySelector(`[data-id="${activeId}"]`);
    const yPos = newSlide.offsetLeft;

    wrapper.style.left = -yPos + "px";
  }, [activeId]);

  return (
    <StyledSlider {...props}>
      <StyledArrowLeft
        src={ChevronLeftBlue}
        $width="20px"
        $height="20px"
        onClick={handleLeftArrowClick}
      />
      <StyledSliderWrap id="sliderWrapper">
        {props.$weeksData.map(item => (
          <StyledSliderItem key={item.id} data-id={item.id}>
            <Typography $variant="body-semibold">{item.text}</Typography>
          </StyledSliderItem>
        ))}
      </StyledSliderWrap>
      <StyledArrowRight
        src={ChevronRightBlue}
        $width="20px"
        $height="20px"
        onClick={handleRightArrowClick}
      />
    </StyledSlider>
  );
}

export default Slider;
