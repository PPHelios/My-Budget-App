import { useState } from "react";
import { useBudgetsContext } from "../../context/BudgetContext";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
export const ExpensesChart = ({ id }) => {
  const [date, setDate] = useState(0);
  //console.log(typeof new Date(date).getTime());
  const { expensesChartData } = useBudgetsContext();
  const data = expensesChartData(id, date);
  console.log(data);
  const handleStartDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      {data ? (
        <>
          <form>
            <input type="date" onChange={handleStartDateChange} />
          </form>
          <VictoryChart domainPadding={20}>
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[5, 10, 15, 20, 25, 31]}
              tickFormat={[5, 10, 15, 20, 25, 31]}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickValues={[50, 100, 150]}
              tickFormat={(y) => `$${y}`}
            />
            <VictoryBar
              style={{ data: { fill: "red", width: 10 } }}
              data={data}
              // data accessor for x values
              x="date"
              // data accessor for y values
              y="value"
            />
          </VictoryChart>
        </>
      ) : (
        <h2>nodata</h2>
      )}
    </>
  );
};
