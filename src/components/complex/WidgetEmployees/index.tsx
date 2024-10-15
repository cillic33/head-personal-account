import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidgetProps";

const Employees = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
    >
      Employees
    </Expand>
  );
}

export default Employees;
