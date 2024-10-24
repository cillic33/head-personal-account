import {IProps} from "./props";

const TableHead = ({data}: IProps) => {
  const tableTitles = Object.values(data);

  return (
    <thead>
      <tr>
        {tableTitles.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
