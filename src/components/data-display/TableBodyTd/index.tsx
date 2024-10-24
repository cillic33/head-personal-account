import {IProps} from "./props";
import {TTableCell} from "@typing/TTable";

const TableBodyTd = ({k: key, data}: IProps) => {
  if (key === "id") {
    return;
  }

  if (typeof data === "object") {
    return (
      <td key={key}>
        {Object.keys(data).map(nestedKey => {
          const obj = data;

          return (
            <div key={nestedKey}>
              {obj[nestedKey as keyof TTableCell]}
            </div>
          );
        })}
      </td>
    );
  }

  return (
    <td key={key}>
      {data}
    </td>
  );
}

export default TableBodyTd;
