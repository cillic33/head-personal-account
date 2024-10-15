import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetRelevanceOfProfiles = (props: IProps) => {
  return (
    <Expand
      title="Актуальность профилей"
      $isDragIcon={true}
      $isGotoButton={true}
    >
      <div data-id={props.id}></div>

      WidgetRelevanceOfProfiles

    </Expand>
  );
}

export default WidgetRelevanceOfProfiles;
