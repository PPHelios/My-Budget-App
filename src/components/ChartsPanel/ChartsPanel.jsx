import { useBudgetsContext } from "../../context/BudgetContext";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const ChartsPanel = () => {
  const { totalBudgets, totalExpenses } = useBudgetsContext();
  const total = totalBudgets();
  const expenses = totalExpenses();
  const progress = Math.floor((expenses / total) * 100);
  let bgcolor = "blue";
  if (progress > 80) {
    bgcolor = "red";
  } else if (progress >= 40) {
    bgcolor = "green";
  }

  return (
    <div className="chartsPanel--body">
      <div className="chartsPanel--totals">
        <h2>Total Budget : {total}</h2>
        <h2>Total Expenses : {expenses}</h2>
      </div>

      <div className="chartsPanel--progressbar">
        <ProgressBar progress={progress} bgcolor={bgcolor} />
      </div>
    </div>
  );
};
