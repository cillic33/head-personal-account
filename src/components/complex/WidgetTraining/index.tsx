import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetTraining = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $internalLink="/training"
    >
      WidgetTraining
    </Expand>
  );
}

export default WidgetTraining;
