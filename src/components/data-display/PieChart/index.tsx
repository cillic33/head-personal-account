import { PieChart, Pie, Cell } from "recharts";
import {IProps} from "@components/data-display/PieChart/props";

const PieChartComponent = ({$data}: IProps) => {
  const data = $data.variants;
  const COLORS = $data.colors;

  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={35}
        outerRadius={50}
        paddingAngle={2}
        dataKey="value"
        cornerRadius={3}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default PieChartComponent;
