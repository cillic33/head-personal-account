import {IProps, IStyledInput} from "./props";
import styled from "styled-components";
import {ChangeEvent, FC, useRef, useState} from "react";
import CloseGrayIcon from "@images/CloseGrayIcon.svg";
import {Image} from "@components/data-display/Image";
import {Button} from "@components/inputs/Button";

const StyledInputWrap = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #E1E7ED;
  border-radius: 8px;
  padding: 8px 10px;
`

const StyledInput = styled.input<IStyledInput>`
  background: #ffffff;
  border: none;
  padding: 0;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.textIconBasePrimary};
  text-overflow: ellipsis;
  overflow: hidden;
  
  &::placeholder {
    color: ${props => props.theme.colors.textIconBaseTertiary};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    background-image: url(${CloseGrayIcon});
    background-size: 20px 20px;
    cursor: pointer;
  }
`

export const Input: FC<IProps> = (
  {
    type,
    name,
    placeholder,
    value,
    onChange,
    onClear,
    icon,
  }) => {
    // @barrelblur: Зачем инпуту свою стояние? Это же же компоннет должен предоставлять API для взаимодействия снаружи
  const [query, setQuery] = useState<string>(value || "");

    // @barrelblur: зачем этому компоненту реф?
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery((event.currentTarget).value);

    if (onChange) {
      onChange(event);
    }
  }

  const handleClear = () => {
    setQuery("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // @barrelblur: Этой функциональности в принипе не должно быть здесь
    // @barrelblur: Типа мы в другом месте при использловании события передаем таргет на инпут?
    // @barrelblur: А зачем передавать таргет, если мы можем передаь значение, который снаружи просто перезапишет стейт
    if (inputRef.current && onClear) {
      onClear(inputRef.current);
    }
  }

  return (
    <StyledInputWrap>
      {icon &&
        <Image src={icon} $width="24px" $height="24px" />
      }
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder || ""}
        value={query}
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off"
      />
      {query && type !== "search" &&
        <Button $variant="no-style" size="no-size" onClick={handleClear}>
          <Image src={CloseGrayIcon} />
        </Button>
      }
    </StyledInputWrap>
  );
}
