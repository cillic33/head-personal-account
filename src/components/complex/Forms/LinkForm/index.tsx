import Input from "@components/inputs/Input";
import {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {IProps} from "./props";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const LinkForm = ({action, method, onChange}: IProps) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    link: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDataForm = {...dataForm, [event.target.name]: event.target.value};

    setDataForm(newDataForm);

    if (onChange) {
      onChange(newDataForm);
    }
  }

  const handleInputClear = (target: HTMLInputElement) => {
    const newDataForm = {...dataForm, [target.name]: ""};

    setDataForm(newDataForm);

    if (onChange) {
      onChange(newDataForm);
    }
  }

  return (
    <StyledForm action={action} method={method}>
      <Input type="text" name="name" value={dataForm.name} placeholder="Название" onChange={handleInputChange} onClear={handleInputClear} />
      <Input type="url" name="link" value={dataForm.link} placeholder="Ссылка" onChange={handleInputChange} onClear={handleInputClear} />
    </StyledForm>
  );
}

export default LinkForm;