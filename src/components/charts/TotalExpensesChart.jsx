import { ResponsivePie } from "@nivo/pie";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import { useBudgetsContext } from "../../context/BudgetsContext";

export const TotalExpensesChart = () => {
  const { totalExpenses, totalExpensesChartData } = useBudgetsContext();
  const data = totalExpensesChartData();
  const total= totalExpenses()
  return (
    <Card >
      <CardHeader title={`Total Expenses: ${total}`} />
      <Container disableGutters={true} sx={{ height: 140 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
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
      </Container>
    </Card>
  );
};
