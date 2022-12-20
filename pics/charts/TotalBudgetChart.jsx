const data = [
  { x: 1, y: 15 },
  { x: 2, y: 4 },
  { x: 3, y: 2 },
  { x: 4, y: 3 },
  { x: 5, y: 1 },
];
export const TotalBudgetChart = (second) => {
  const CustomLabel = () => {
    return (
      <g>
        <VictoryLabel />
        <VictoryTooltip
          x={200}
          y={250}
          orientation="top"
          pointerLength={0}
          cornerRadius={50}
          flyoutWidth={100}
          flyoutHeight={100}
          flyoutStyle={{ fill: "blue" }}
        />
      </g>
    );
  };
  return (
    <VictoryPie
      style={{ labels: { fill: "white" } }}
      innerRadius={100}
      labelRadius={120}
      labels={({ data }) => `# ${data.y}`}
      labelComponent={<CustomLabel />}
      data={data}
    />
  );
};
