import {IProps} from "./props";
import TableBodyTr from "@components/data-display/TableBodyTr";
import {MutableRefObject} from "react";

const TableBody = ({data, settings, onClick}: IProps) => {
  const handleClick = (trRef: MutableRefObject<HTMLTableRowElement | null>) => {
    if (onClick) {
      onClick(trRef);
    }
  }

  return (
    <tbody>
    {data.map(row => (
      <TableBodyTr data={row} key={row.id as string} settings={settings} onClick={handleClick} />
    ))}
    </tbody>
  );
}

export default TableBody;
