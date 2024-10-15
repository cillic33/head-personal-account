import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetMyDeputies = (props: IProps) => {
  return (
    <Expand
      title="Мои заместители"
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      <div data-id={props.id}></div>

      WidgetMyDeputies

    </Expand>
  );
}

export default WidgetMyDeputies;
