import {Expand} from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetReportingWeekTS} from "@utils/mock";
import {Typography} from "@components/data-display/Typography";
import {Flexbox} from "@components/surfaces/Flexbox";
import {FC} from "react";

export const WidgetReportingWeekTS: FC<IWidget> = (props) => {
  return (
    <Expand
      title={props.title}
      isOpen={props.isOpen}
      isDragIcon={props.isDragIcon}
      externalLink={props.externalLink}
      isSplitter={true}
    >
      <Flexbox gap="4px" direction="column">
        {
          MWidgetReportingWeekTS.map((item) => (
            <Flexbox justify="space-between" key={item.id} padding="8px 12px">
              <Typography variant="body-regular">{item.title}</Typography>
              <Typography variant="h3">{item.count}</Typography>
            </Flexbox>
          ))
        }
      </Flexbox>
    </Expand>
  );
}
