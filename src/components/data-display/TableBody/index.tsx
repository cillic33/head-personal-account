import {IProps} from "./props";
import TableBodyTr from "@components/data-display/TableBodyTr";

const TableBody = ({data, settings}: IProps) => {
  return (
    <tbody>
    {data.map(row => (
      <TableBodyTr data={row} key={row.id as string} settings={settings} />
    ))}
    </tbody>
  );
}

export default TableBody;
