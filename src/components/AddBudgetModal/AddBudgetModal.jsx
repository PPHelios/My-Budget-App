import { useRef } from "react";
import { flushSync } from "react-dom";
import { useBudgetsContext } from "../../context/BudgetContext";

export const AddBudgetModal = ({ handleClose, scrollToNewPanel }) => {
  const { budgets, dispatch } = useBudgetsContext();
  const budgetNameRef = useRef(null);
  const budgetValueRef = useRef(null);

  const handleAddBudget = (e) => {
    e.preventDefault();

    const existingBudget = budgets.find(
      (b) => b.name.toLowerCase() === budgetNameRef.current.value.toLowerCase()
    );
    if (existingBudget) {
      alert("This budget already exists!!!");
      budgetNameRef.current.value = "";
      budgetNameRef.current.focus();
    } else {
      flushSync(
        dispatch({
          type: "addBudget",
          name: budgetNameRef.current.value,
          budget: budgetValueRef.current.value,
        })
      );
      scrollToNewPanel();
      handleClose();
    }
  };

  return (
    <div className="addExpenseModal--body" onClick={handleClose}>
      <div
        className="addExpenseModal--content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="addExpenseModal--head">
          <div className="addExpenseModal--head-modalName"> </div>
          <div
            onClick={handleClose}
            className="addExpenseModal--head-modalClose"
          >
            &#10005;
          </div>
        </div>
        <b>Enter New Budget :</b>
        <form onSubmit={handleAddBudget}>
          <label htmlFor="name">Expense:</label>
          <input
            id="name"
            ref={budgetNameRef}
            placeholder="Enter Budget Name..."
            required
            autoFocus
          />
          <label htmlFor="value">Value:</label>
          <input
            type="number"
            id="budget"
            ref={budgetValueRef}
            placeholder="Enter Your Budget..."
            min={0}
            required
          />
          <button className="btn inverted">Add</button>
        </form>
      </div>
    </div>
  );
};
