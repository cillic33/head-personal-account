import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetStaffMovement = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetStaffMovement
    </Expand>
  );
}

export default WidgetStaffMovement;
