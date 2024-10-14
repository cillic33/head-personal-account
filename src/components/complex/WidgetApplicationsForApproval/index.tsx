import Expand from "@components/surfaces/Expand";
import {Props} from "./props";
import {MApplications} from "@utils/mock";
import Flexbox from "@components/surfaces/Flexbox";
import WidgetApplicationsForApprovalRow from "@components/complex/WidgetApplicationsForApprovalRow";

const WidgetApplicationsForApproval = (props: Props) => {
  return (
    <Expand
      title="Заявки на утверждение"
      $isDragIcon={true}>
      <div data-id={props.id}></div>

      <Flexbox
        $gap="4px"
        $direction="column">
        {MApplications.map((item) => (
          <WidgetApplicationsForApprovalRow item={item} key={item.id} />
        ))}
      </Flexbox>
    </Expand>
  );
}

export default WidgetApplicationsForApproval;
