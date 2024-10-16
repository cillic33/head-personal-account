import Flexbox from "@components/surfaces/Flexbox";
import Typography from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";
import {IProps} from "./props";
import WidgetMyDeputiesRow from "@components/complex/Widgets/WidgetMyDeputiesRow";

const WidgetMyDeputiesList = ({data}: IProps) => {
  return (
    <Flexbox $gap="16px" $direction="column">
      {data.map(item => (
        <Flexbox key={item.id} $gap="16px" $direction="column">
          <Flexbox $gap="16px" $direction="column">
            <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>{item.title}</Typography>
          </Flexbox>
          <Flexbox $gap="16px" $direction="column">
            {item.rows.map(row => <WidgetMyDeputiesRow key={row.id} data={row} />)}
          </Flexbox>
        </Flexbox>
      ))}
    </Flexbox>
  );
}

export default WidgetMyDeputiesList;
