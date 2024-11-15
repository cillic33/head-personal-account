import {IProps} from "./props";
import {Flexbox} from "@components/surfaces/Flexbox";
import {Image} from "@components/data-display/Image";
import {Typography} from "@components/data-display/Typography";
import {Button} from "@components/inputs/Button";
import EditBlueIcon from "@images/EditBlueIcon.svg";
import DeleteRedIcon from "@images/DeleteRedIcon.svg";
import {FC, useState} from "react";
import {theme} from "@utils/theme/theme";

export const WidgetMyLinksRow: FC<IProps> = ({item, onEditClick, onDeleteClick}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handlerEditClick = () => {
    if (onEditClick) {
      onEditClick(item);
    }
  }

  const handlerDeleteClick = () => {
    if (onDeleteClick) {
      onDeleteClick(item);
    }
  }

  return (
    <Flexbox
      key={item.id}
      gap="12px"
      align="center"
      padding="8px 12px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      background={isHovered ? theme.colors.surfaceSecondary : 'transparent'}
      borderRadius="6px"
    >
      <Image
        src={item.imageSrc}
        // @barrelblur: почему у изображения есть flex значение?
        // @barrelblur: значение flex должно быть у структурных тегов
        // @barrelblur: изображение должно просто сущестовать
        flex="0 0 24px"/>
      <Typography
        variant="body-regular"
        // @barrelblur здесь ситуация аналогичная, типография не должна иметь такого поведения
        flex="1 0 auto">{item.title}</Typography>
      <Button
        variant="no-style"
        size="no-size"
        // @barrelblur ситуация аналогичная
        flex="0 0 24px"
        // @barrelblur полагаю, здесь здесь нужно делать условный рендеринг, а не делать элемент прозрачным
        opacity={isHovered ? 1 : 0}
        onClick={handlerEditClick}
      >
        <Image
          src={EditBlueIcon}
          width="24px"/>
      </Button>
      <Button
        variant="no-style"
        size="no-size"
          // @barrelblur полагаю, здесь здесь нужно делать условный рендеринг, а не делать элемент прозрачным
        opacity={isHovered ? 1 : 0}
        onClick={handlerDeleteClick}
      >
        <Image
          src={DeleteRedIcon}
          width="24px"
          // @barrelblur: будто это не дизайн система, а просто возможность делать стили прямо в атрибутах
          flex="0 0 24px"/>
      </Button>
    </Flexbox>
  );
}
