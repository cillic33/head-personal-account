import Flexbox from "@components/surfaces/Flexbox";
import Typography from "@components/data-display/Typography";
import Person from "@components/data-display/Person";
import {IProps} from "./props";

const WidgetMyDeputiesRow = ({data}: IProps) => {
  return (
    <Flexbox $gap="16px" $align="center" $justify="space-between">
      <Person src={data.src} name={data.name} />
      <Typography $variant="body-regular">{data.period}</Typography>
    </Flexbox>
  );
}

export default WidgetMyDeputiesRow;
