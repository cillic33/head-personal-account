import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidgetProps";

const WidgetRelevanceOfProfiles = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetRelevanceOfProfiles
    </Expand>
  );
}

export default WidgetRelevanceOfProfiles;
