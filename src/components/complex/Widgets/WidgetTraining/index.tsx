import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";

const WidgetTraining = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $internalLink={props.$internalLink}
    >
      WidgetTraining
    </Expand>
  );
}

export default WidgetTraining;
