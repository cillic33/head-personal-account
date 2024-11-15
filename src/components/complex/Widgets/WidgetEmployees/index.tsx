import {Expand} from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {Flexbox} from "@components/surfaces/Flexbox";
import {MWidgetEmployees} from "@utils/mock";
import {WidgetEmployeesRow} from "@components/complex/Widgets/WidgetEmployeesRow";
import {FC} from "react";

export const WidgetEmployees: FC<IWidget> = (props) => {
  return (
    <Expand
      title={props.title}
      isOpen={props.isOpen}
      isDragIcon={props.isDragIcon}
      isSplitter={true}
    >
      <Flexbox gap="4px" direction="column">
        {MWidgetEmployees.map((item) => (
          <WidgetEmployeesRow key={item.id} item={item} />
        ))}
      </Flexbox>
    </Expand>
  );
}
