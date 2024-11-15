import {Expand} from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MMyDeputies} from "@utils/mock";
import {WidgetMyDeputiesList} from "@components/complex/Widgets/WidgetMyDeputiesList";
import {FC} from "react";

// @barrelblur: убрать доллары
export const WidgetMyDeputies: FC<IWidget> = (props) => {
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
