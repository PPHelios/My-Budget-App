import { useEffect, useState, useCallback } from "react";
import { useBudgetsContext } from "../../context/BudgetContext";

export const AddExpenseModal = ({ id, handleClose }) => {
  const [formData, setFormData] = useState({
    expenseName: "",
    value: 0,
    description: "",
    budget: id || 0,
  });
  const { getBudgetNames, findBudgetById, dispatch } = useBudgetsContext();

  // useContext hook
  const miniBudgets = getBudgetNames();
  const modalName = findBudgetById(+formData.budget).name;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddExpense = (e) => {
    e.preventDefault();
    dispatch({
      type: "addExpense",
      id: +formData.budget,
      name: formData.expenseName,
      value: formData.value,
      description: formData.description,
    });
    handleClose();
  };

  const closeOnEscapeKeyDown = useCallback((e) => {
    if (e.charCode || e.keyCode === 27) {
      handleClose();
    }
  });

  const handleUserSelect = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };
  const UsersOptions = () => {
    return (
      <>
        {miniBudgets.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </>
    );
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () =>
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [closeOnEscapeKeyDown]);
  return (
    <div className="addExpenseModal--body" onClick={handleClose}>
      <div
        className="addExpenseModal--content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="addExpenseModal--head">
          <div className="addExpenseModal--head-modalName"> {modalName}</div>

          <div
            onClick={handleClose}
            className="addExpenseModal--head-modalClose"
          >
            &#10005;
          </div>
        </div>
        <b>Enter Your New Expense :</b>
        <form onSubmit={handleAddExpense}>
          <label htmlFor="expenseName">Expense:</label>
          <input
            name="expenseName"
            id="expenseName"
            value={formData.expenseName}
            onChange={handleChange}
            placeholder="Enter Expense Name..."
            required
            autoFocus
          />
          <label htmlFor="value">Value:</label>
          <input
            type="number"
            name="value"
            id="value"
            value={formData.value}
            onChange={handleChange}
            placeholder="Enter Expense value..."
            min={0}
            max={1e7}
            required
          />
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Expense description..."
            required
          />
          <select
            name="budget"
            value={formData.budget}
            onChange={handleUserSelect}
          >
            {<UsersOptions />}
          </select>
          <button className="btn inverted">Add</button>
        </form>
      </div>
    </div>
  );
};
