import {IProps, IStyledInput} from "./props";
import styled from "styled-components";
import {ChangeEvent, useRef, useState} from "react";
import CloseGrayIcon from "@images/CloseGrayIcon.svg";
import Image from "@components/data-display/Image";
import Button from "@components/inputs/Button";

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

const Input = (
  {
    type,
    name,
    placeholder,
    value,
    onChange,
    onClear,
    icon,
  }: IProps) => {
  const [query, setQuery] = useState<string>(value || "");
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
      {query &&
        <Button $variant="no-style" size="no-size" onClick={handleClear}>
          <Image src={CloseGrayIcon} />
        </Button>
      }
    </StyledInputWrap>
  );
}

export default Input;
