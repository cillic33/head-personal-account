import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetMyLinks = (props: IProps) => {
  return (
    <Expand
      title="Мои ссылки"
      $isDragIcon={true}
      $popupId="addLinkPopup"
    >
      <div data-id={props.id}></div>

      WidgetMyLinks

    </Expand>
  );
}

export default WidgetMyLinks;
