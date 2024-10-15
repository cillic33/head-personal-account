import Expand from "@components/surfaces/Expand";
import {MApplications} from "@utils/mock";
import Flexbox from "@components/surfaces/Flexbox";
import WidgetApplicationsForApprovalRow from "@components/complex/WidgetApplicationsForApprovalRow";
import {IWidget} from "@typing/TWidgetProps";

const WidgetApplicationsForApproval = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
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
