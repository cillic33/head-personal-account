import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetAbsence = (props: IProps) => {
  return (
    <Expand
      title="Отсутствия"
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      <div data-id={props.id}></div>

      WidgetAbsence

    </Expand>
  );
}

export default WidgetAbsence;
