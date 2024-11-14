import Flexbox from "@components/surfaces/Flexbox";
import Typography from "@components/data-display/Typography";
import Person from "@components/data-display/Person";
import {IProps} from "./props";

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const WidgetMyDeputiesRow = ({data}: IProps) => {
  return (
    <Flexbox gap="16px" $align="center" $justify="space-between">
      <Person src={data.src} name={data.name} />
      <Typography $variant="body-regular" $textAlign="end">{data.period}</Typography>
    </Flexbox>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetMyDeputiesRow;
