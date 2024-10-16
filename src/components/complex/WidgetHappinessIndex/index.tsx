import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";

const WidgetHappinessIndex = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetHappinessIndex
    </Expand>
  );
}

export default WidgetHappinessIndex;
