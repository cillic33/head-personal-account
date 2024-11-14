import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MMyDeputies} from "@utils/mock";
import WidgetMyDeputiesList from "@components/complex/Widgets/WidgetMyDeputiesList";

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const WidgetMyDeputies = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $externalLink={props.externalLink}
      $isSplitter={true}
    >
      <WidgetMyDeputiesList data={MMyDeputies} />
    </Expand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetMyDeputies;
