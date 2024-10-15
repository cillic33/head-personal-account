import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";
import {MApplications} from "@utils/mock";
import Flexbox from "@components/surfaces/Flexbox";
import WidgetApplicationsForApprovalRow from "@components/complex/WidgetApplicationsForApprovalRow";

const WidgetApplicationsForApproval = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
    >
      <Flexbox
        $gap="4px"
        $direction="column"
      >
        {MApplications.map((item) => (
          <WidgetApplicationsForApprovalRow item={item} key={item.id} />
        ))}
      </Flexbox>
    </Expand>
  );
}

export default WidgetApplicationsForApproval;
