import Slider from "react-slick";
import {IProps} from "./props";
import styled from "styled-components";
import ChevronLeftBlue from "@images/ChevronLeftBlue.svg";
import ChevronRightBlue from "@images/ChevronRightBlue.svg";
import {Typography} from "@components/data-display/Typography";
import {FC, useState} from "react";

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

export const SimpleSlider: FC<IProps> = (props) => {
  const {$weeksData, $onSlide} = props;
  const [oldSlide, setOldSlide] = useState<number>(1);

  const settings = {
    initialSlide: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setOldSlide(current);
      $onSlide(oldSlide, current);
    },
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
