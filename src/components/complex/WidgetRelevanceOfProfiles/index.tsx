import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetRelevanceOfProfiles = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetRelevanceOfProfiles
    </Expand>
  );
}

export default WidgetRelevanceOfProfiles;
