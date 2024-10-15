import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetHappinessIndex = (props: IProps) => {
  return (
    <Expand
      title="Индекс счастья"
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      <div data-id={props.id}></div>

      WidgetHappinessIndex

    </Expand>
  );
}

export default WidgetHappinessIndex;
