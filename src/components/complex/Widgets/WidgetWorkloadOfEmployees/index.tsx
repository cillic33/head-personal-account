import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWorkloadOfEmployees} from "@utils/mock";
import ProgressBar from "@components/data-display/ProgressBar";
import Flexbox from "@components/surfaces/Flexbox";

const WidgetWorkloadOfEmployees = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      <Flexbox $gap="8px" $direction="column">
        {MWorkloadOfEmployees.map(item => (
          <ProgressBar key={item.id} $percent={item.percent} $color={item.color} $title={item.title} />
        ))}
      </Flexbox>
    </Expand>
  );
}

export default WidgetWorkloadOfEmployees;
