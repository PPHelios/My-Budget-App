import { useEffect, useCallback } from "react";
import { useBudgetsContext } from "../../context/BudgetContext";
import { ExpensesChart } from "../charts/ExpensesChart";
import { TotalBudgetChart } from "../charts/TotalBudgetChart";
export const ViewExpensesModal = ({ id, ModalName, handleClose }) => {
  const { dispatch, findBudgetById } = useBudgetsContext();

  const handleDeleteExpense = (expenseId) => {
    dispatch({
      type: "deleteExpense",
      budgetId: id,
      expenseId,
    });
  };

  const handleDeleteBudget = () =>
    dispatch({
      type: "deleteBudget",
      id,
    });
  const closeOnEscapeKeyDown = useCallback((e) => {
    if (e.charCode || e.keyCode === 27) {
      handleClose();
    }
  });
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () =>
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [closeOnEscapeKeyDown]);

  const ExpensesList = () => {
    const expenses = findBudgetById(id).expenses;
    return (
      <ul>
        {expenses.map((x) => {
          ("datetime-local");
          return (
            <li key={x.id}>
              <span> {x.name}</span>
              <span> {x.value}$ </span>
              <span> {x.date}</span>
              <span> {x.description}</span>
              <button onClick={() => handleDeleteExpense(x.id)}>
                {" "}
                &#10005;
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="addExpenseModal--body" onClick={handleClose}>
      <div
        className="addExpenseModal--content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="addExpenseModal--head">
          <div className="addExpenseModal--head-modalName"> {ModalName}</div>
          <div
            className="addExpenseModal--head-deleteBudget"
            onClick={handleDeleteBudget}
          >
            &#10005;
          </div>
          <div
            onClick={handleClose}
            className="addExpenseModal--head-modalClose"
          >
            &#10005;
          </div>
        </div>
        <b>Your Expenses :</b>
        <ExpensesList />
        <ExpensesChart id={id}/>
      </div>
    </div>
  );
};
