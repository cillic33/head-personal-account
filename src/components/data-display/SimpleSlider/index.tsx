import Slider from "react-slick";
//import {useState} from "react";
import {IProps} from "./props";
import styled from "styled-components";
import ChevronLeftBlue from "@images/ChevronLeftBlue.svg";
import ChevronRightBlue from "@images/ChevronRightBlue.svg";
import Typography from "@components/data-display/Typography";

const StyledWrapSlider = styled.div<IProps>`
  position: relative;
  width: 100%;
  max-width: ${props => props.$maxWidth || "100%"};
  height: ${props => props.$height || undefined};
  border: ${props => "1px solid" + props.theme.colors.surfacePrimary};
  border-radius: 6px;

  .slick-slide {
    height: ${props => props.$height || undefined};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    z-index: 1;
  }

  .slick-prev {
    left: 4px;
    
    &:before {
      content: url(${ChevronLeftBlue});
    }
  }
  .slick-next {
    right: 4px;
    
    &:before {
      content: url(${ChevronRightBlue});
    }
  }
`

export default function SimpleSlider(props: IProps) {
  const {$weeksData} = props;
  //const FIRST_SLIDE = 1; // TODO передать в пропсах
  //const countSlides = $weeksData.length;
  //const [activeId, setActiveId] = useState<number>(FIRST_SLIDE);

  /*const handleLeftArrowClick = () => {
    setActiveId((prev: number) => prev > 1 ?  prev - 1 : 1);
  }

  const handleRightArrowClick = () => {
    setActiveId((prev: number) => prev < countSlides - 1 ? prev + 1 : countSlides);
  }*/

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledWrapSlider {...props}>
      <Slider {...settings}>
        {$weeksData.map((item) => (
          <Typography $variant="body-semibold" key={item.id} data-id={item.id}>
            {item.text}
          </Typography>
        ))}
      </Slider>
    </StyledWrapSlider>

  );
}
