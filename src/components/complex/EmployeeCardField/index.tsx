import {IProps} from "@components/complex/EmployeeCardField/props";
import {theme} from "@utils/theme/theme";
import Flexbox from "@components/surfaces/Flexbox";
import {FC} from "react";

const EmployeeCardField: FC<IProps> = ({children}) => {
  return (
    <Flexbox
      /* @barrelblur: убрать доллары */
      $align="center"
      $padding="8px 0"
      $border={`1px solid ${theme.colors.surfacePrimary}`}
      $borderWidth="1px 0 0 0"
    >
      {children}
    </Flexbox>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default EmployeeCardField;
