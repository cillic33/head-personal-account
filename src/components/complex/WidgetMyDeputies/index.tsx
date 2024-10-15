import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetMyDeputies = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetMyDeputies
    </Expand>
  );
}

export default WidgetMyDeputies;
