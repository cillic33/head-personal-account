import {IProps} from "@components/complex/EmployeeCardField/props";
import {theme} from "@utils/theme/theme";
import Flexbox from "@components/surfaces/Flexbox";

const EmployeeCardField = ({children}: IProps) => {
  return (
    <Flexbox
      $align="center"
      $padding="8px 0"
      $border={`1px solid ${theme.colors.surfacePrimary}`}
      $borderWidth="1px 0 0 0"
    >
      {children}
    </Flexbox>
  );
}

export default EmployeeCardField;
