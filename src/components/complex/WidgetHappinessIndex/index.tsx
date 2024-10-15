import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetHappinessIndex = (props: IProps) => {
  return (
    <Expand
      title="Индекс счастья"
      $isDragIcon={true}
      $isGotoButton={true}
    >
      <div data-id={props.id}></div>

      WidgetHappinessIndex

    </Expand>
  );
}

export default WidgetHappinessIndex;
