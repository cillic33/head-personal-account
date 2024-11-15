import {Flexbox} from "@components/surfaces/Flexbox";
import {Typography} from "@components/data-display/Typography";
import {Person} from "@components/data-display/Person";
import {IProps} from "./props";
import {FC} from "react";

// @barrelblur: убрать доллары
export const WidgetMyDeputiesRow: FC<IProps> = ({data}) => {
  return (
    <Flexbox gap="16px" $align="center" $justify="space-between">
      <Person src={data.src} name={data.name} />
      <Typography $variant="body-regular" $textAlign="end">{data.period}</Typography>
    </Flexbox>
  );
}
