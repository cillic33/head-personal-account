import {IProps} from "./props";
import TableBodyTr from "@components/data-display/TableBodyTr";

const TableBody = ({data}: IProps) => {
  return (
    <tbody>
    {data.map(row => (
      <TableBodyTr data={row} key={row.id as string} />
    ))}
    </tbody>
  );
}

export default TableBody;
