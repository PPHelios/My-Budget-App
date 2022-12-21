import { BudgetsChart } from "../../charts/BudgetsChart";
import { useBudgetsContext } from "../../context/BudgetContext";
import { TotalBudgetChart } from "../charts/TotalBudgetChart";
import { TotalExpensesChart } from "../charts/TotalExpensesChart";
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
        <div className="chartsPanel--totals-budgets">
          <h2>Total Budget : {total}</h2>
          <TotalBudgetChart />
        </div>
        <div className="chartsPanel--totals-expenses">
          <h2>Total Expenses : {expenses}</h2>
          <TotalExpensesChart />
        </div>
      </div>
      <div className="chartsPanel--progressbar">
        <ProgressBar progress={progress} bgcolor={bgcolor} />
      </div>
    </div>
  );
};
