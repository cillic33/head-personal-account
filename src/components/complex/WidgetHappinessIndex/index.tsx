import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetHappinessIndex = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetHappinessIndex
    </Expand>
  );
}

export default WidgetHappinessIndex;
