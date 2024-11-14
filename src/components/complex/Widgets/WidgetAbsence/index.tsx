import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetAbsence} from "@utils/mock";
import Flexbox from "@components/surfaces/Flexbox";
import Typography from "@components/data-display/Typography";

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const WidgetAbsence = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $externalLink={props.externalLink}
      $isSplitter={true}
    >
      <Flexbox $gap="4px" $direction="column">
        {
          MWidgetAbsence.map((item) => (
            <Flexbox $justify="space-between" key={item.id} $padding="8px 12px">
              <Typography $variant="body-regular">{item.title}</Typography>
              <Typography $variant="h3">{item.count}</Typography>
            </Flexbox>
          ))
        }
      </Flexbox>
    </Expand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetAbsence;
