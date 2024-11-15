import {IProps} from "@components/complex/EmployeeCardField/props";
import {theme} from "@utils/theme/theme";
import {Flexbox} from "@components/surfaces/Flexbox";
import {FC} from "react";

export const EmployeeCardField: FC<IProps> = ({children}) => {
  return (
    <Flexbox
      align="center"
      padding="8px 0"
      border={`1px solid ${theme.colors.surfacePrimary}`}
      borderWidth="1px 0 0 0"
    >
      {children}
    </Flexbox>
  );
}
