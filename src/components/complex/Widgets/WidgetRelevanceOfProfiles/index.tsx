import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetMetrics} from "@utils/mock";
import PieChartComponent from "@components/data-display/PieChart";

const WidgetRelevanceOfProfiles = (props: IWidget) => {
  const dataRelevanceFactor = MWidgetMetrics["relevanceFactorMetric"];

  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $externalLink={props.externalLink}
    >
      <PieChartComponent $data={dataRelevanceFactor} />
    </Expand>
  );
}

export default WidgetRelevanceOfProfiles;
