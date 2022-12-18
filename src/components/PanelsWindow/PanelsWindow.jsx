import { forwardRef } from "react";
import { useBudgetsContext } from "../../context/BudgetContext";
import { Panel } from "../Panel/Panel.tsx";

export const PanelsWindow = forwardRef(({ ...props }, ref) => {
  const { budgets } = useBudgetsContext();

  const budgetPanels = budgets.map((b) => (
    <Panel
      key={b.id}
      id={b.id}
      name={b.name}
      expenses={b.expenses}
      budget={b.budget}
    />
  ));
  return (
    <div className="panelsWindow" ref={ref}>
      {budgetPanels}
    </div>
  );
});
