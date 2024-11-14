import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import Flexbox from "@components/surfaces/Flexbox";
import {MWidgetEmployees} from "@utils/mock";
import WidgetEmployeesRow from "@components/complex/Widgets/WidgetEmployeesRow";

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const WidgetEmployees = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $isSplitter={true}
    >
      <Flexbox $gap="4px" $direction="column">
        {MWidgetEmployees.map((item) => (
          <WidgetEmployeesRow key={item.id} item={item} />
        ))}
      </Flexbox>
    </Expand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetEmployees;
