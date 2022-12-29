import { ResponsivePie } from "@nivo/pie";
import { useBudgetsContext } from "../../context/BudgetContext";


export const TotalBudgetChart = () => {
  const { totalBudgetChartData } = useBudgetsContext();
  const budgets = totalBudgetChartData();

  return (
    <ResponsivePie
      data={budgets}
      margin={{ top: 30, right: 30, bottom: 40, left: 30 }}
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
