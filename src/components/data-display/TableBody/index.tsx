import {IProps} from "./props";
import TableBodyTr from "@components/data-display/TableBodyTr";
import {MutableRefObject, useRef} from "react";

const TableBody = ({data, settings}: IProps) => {
  const bodyRef = useRef<HTMLTableSectionElement | null>(null);
  const handleClick = (trRef: MutableRefObject<HTMLTableRowElement | null>) => {
    if (bodyRef.current) {
      const rows = Array.from(bodyRef.current.querySelectorAll('tr'));
      rows.forEach(row => row.classList.remove('active'));
    }
    if (trRef.current) {
      trRef.current.classList.add('active');
    }
  }

  return (
    <tbody ref={bodyRef}>
    {data.map(row => (
      <TableBodyTr data={row} key={row.id as string} settings={settings} onClick={handleClick} />
    ))}
    </tbody>
  );
}

export default TableBody;
