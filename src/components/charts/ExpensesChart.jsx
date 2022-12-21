import { useState } from "react";
import { useBudgetsContext } from "../../context/BudgetContext";

export const ExpensesChart = ({ id }) => {
  const k = Date.now() - 2.592e9;
  const [startDate, setStartDate] = useState(k);
  //   console.log(startDate);
  //   const dateFormat = new Date(startDate);

  //   const initialState =
  //     dateFormat.getFullYear() +
  //     "-" +
  //     (dateFormat.getMonth() + 1) +
  //     "-" +
  //     dateFormat.getDate();
  //   console.log(initialState);
  //console.log(typeof new Date(date).getTime());
  const { expensesChartData } = useBudgetsContext();
  const data = expensesChartData(id, startDate);
  console.log(data);
  const handleStartDateChange = (e) => {
    setStartDate(e.target.valueAsNumber);
  };
  return (
    <>
      <form>
        <input type="date" onChange={handleStartDateChange} />
      </form>
      <div className="chart"></div>
    </>
  );
};
