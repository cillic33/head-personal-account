import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MMyDeputies} from "@utils/mock";
import WidgetMyDeputiesList from "@components/complex/Widgets/WidgetMyDeputiesList";

const WidgetMyDeputies = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      <WidgetMyDeputiesList data={MMyDeputies} />
    </Expand>
  );
}

export default WidgetMyDeputies;
