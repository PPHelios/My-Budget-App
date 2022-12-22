import { ResponsivePie } from "@nivo/pie";
import { useBudgetsContext } from "../../context/BudgetContext";

const data = [
  {
    id: "ruby",

    value: 300,
  },
  {
    id: "go",
    label: "go",
    value: 404,
    color: "hsl(297, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 583,
    color: "hsl(145, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 421,
    color: "hsl(57, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 393,
    color: "hsl(250, 70%, 50%)",
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const TotalBudgetChart = () => {
  const { totalBudgetChartData } = useBudgetsContext();
  const budgets = totalBudgetChartData();

  return (
    <ResponsivePie
      data={budgets}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      
      
    />
  );
};
