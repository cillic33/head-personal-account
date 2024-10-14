import Expand from "@components/surfaces/Expand";
import {Props} from "./props";

const WidgetApplicationsForApproval = (props: Props) => {
  return (
    <Expand title="Заявки на утверждение" $isDragIcon={true}>
      ТЕЛО {props.id}
    </Expand>
  );
}

export default WidgetApplicationsForApproval;
