import { useState } from "react";
import { startOfMonth } from "date-fns";
import { useBudgetsContext } from "../../context/BudgetContext";

export const ExpensesChart = ({ id }) => {
  const currentDate = new Date();
  const getMonthStart = (date) => {
    const monthStart = startOfMonth(date);
    const year = monthStart.getFullYear();
    let month = (monthStart.getMonth() + 1).toString();
    month.length === 1 ? (month = "0" + month) : (month = month);
    let day = monthStart.getDate().toString();
    day.length === 1 ? (day = "0" + day) : (day = day);
    const dateString = year + "-" + month + "-" + day;
    return dateString;
  };
  const initialState = getMonthStart(currentDate);
  const [startDate, setStartDate] = useState(initialState);
  console.log(startDate);
  console.log(currentDate);
  const { expensesChartData } = useBudgetsContext();
  const data = expensesChartData(id, startDate);
  console.log(data);
  const handleStartDateChange = (e) => {
    const x = new Date(e.target.value);
    const newDate = getMonthStart(x).toString();
    console.log(newDate);
    setStartDate(newDate);
  };
  return (
    <>
      <form>
        <input
          type="date"
          value={startDate}
          step={30}
          onChange={handleStartDateChange}
        />
      </form>
      <div className="chart"></div>
    </>
  );
};
