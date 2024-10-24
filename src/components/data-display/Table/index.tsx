import {IProps} from "./props";
import TableHead from "@components/data-display/TableHead/TableHead";
import TableBody from "@components/data-display/TableBody";

const Table = ({data}: IProps) => {
  return (
    <div>
      <table>
        <TableHead data={data.head} />
        <TableBody data={data.body} />
      </table>
    </div>
  );
}

export default Table;
