import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetAbsence = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetAbsence
    </Expand>
  );
}

export default WidgetAbsence;
