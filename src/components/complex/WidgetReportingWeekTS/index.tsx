import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetReportingWeekTS = (props: IProps) => {
  return (
    <Expand
      title="TS за отчетную неделю"
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      <div data-id={props.id}></div>

      WidgetReportingWeekTS

    </Expand>
  );
}

export default WidgetReportingWeekTS;