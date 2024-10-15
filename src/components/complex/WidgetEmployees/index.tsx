import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const Employees = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
    >
      Employees
    </Expand>
  );
}

export default Employees;
