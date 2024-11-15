import Expand from "@components/surfaces/Expand";
import {MApplications} from "@utils/mock";
import Flexbox from "@components/surfaces/Flexbox";
import WidgetApplicationsForApprovalRow from "@components/complex/Widgets/WidgetApplicationsForApprovalRow";
import {IWidget} from "@typing/TWidget";
import {FC} from "react";

// @barrelblur: убрать доллары
const WidgetApplicationsForApproval: FC<IWidget> = (props) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $isSplitter={true}
    >
      <Flexbox
        gap="4px"
        $direction="column"
      >
        {MApplications.map((item) => (
          <WidgetApplicationsForApprovalRow item={item} key={item.id} />
        ))}
      </Flexbox>
    </Expand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetApplicationsForApproval;
