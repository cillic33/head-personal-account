import {MouseEvent, ReactNode, RefObject} from "react";
import {TButtonType, TPosition} from "@typing/TCssValues";

type Variant = "primary" | "dark" | "light" | "no-style";

type Size = "s" | "m" | "no-size";

export interface IProps {
  children: ReactNode;
  id?: string;
  type?: TButtonType;
  variant?: Variant;
  size?: Size;
  isActive?: boolean;
  // @barrelblur Onclick это обязательный обработчик, он не может быть опциональным, он должен присуствовать в любом случае
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  // @barrelblur внутренний отступ не должен быть частью кнопки, это особенность вариантов кнопок
  padding?: string;
  // @barrelblur реф должен быть без доллара, и передается через специальный тип (RefObject)
  ref?: RefObject<HTMLElement> | null;
  // @barrelblur у кнопки не должно быть позиции
  position?: TPosition;
  width?: string;
  height?: string;
  // @barrelblur кнопка не должна управлять флексом, если есть вариант с иконкой, это должно быть внутри
  flex?: string;
  // @barrelblur это тоже не про кнопку
  opacity?: number;
  disabled?: boolean;
  // @barrelblur и это не про кнопу?
  background?: string;
  // @barrelblur это часть не про кнопку
  borderRadius?: string;
  // @barrelblur и это тоже
  top?: string;
  // @barrelblur и это тоже
  right?: string;
  // @barrelblur и это тоже
  bottom?: string;
  // @barrelblur и это тоже
  left?: string;
}
