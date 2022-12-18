import { useState } from "react";
import { Button } from "../Button/Button";
import { AddBudgetModal } from "../AddBudgetModal/AddBudgetModal";
import { AddExpenseModal } from "../AddExpenseModal/AddExpenseModal";
export const MainBar = ({ scrollToNewPanel }) => {
  const [modalsState, setModalsState] = useState({
    addBudgetModalOn: false,
    addExpenseModalOn: false,
  });

  const handleAddBudgetModal = () => {
    setModalsState({
      ...modalsState,
      addBudgetModalOn: !modalsState.addBudgetModalOn,
    });
  };
  const handleAddExpenseModal = () => {
    setModalsState({
      ...modalsState,
      addExpenseModalOn: !modalsState.addExpenseModalOn,
    });
  };
  return (
    <>
      <nav>
        <div className="logo">
          <h3>Expenses App</h3>
        </div>

        <div className="nav--bts-container">
          <Button
            name="Add Budget"
            className="btn"
            onClick={handleAddBudgetModal}
          />
          <Button
            name="Add Expense"
            className="btn inverted"
            onClick={handleAddExpenseModal}
          />
        </div>
      </nav>
      {modalsState.addBudgetModalOn && (
        <AddBudgetModal
          handleClose={handleAddBudgetModal}
          scrollToNewPanel={scrollToNewPanel}
        />
      )}
      {modalsState.addExpenseModalOn && (
        <AddExpenseModal handleClose={handleAddExpenseModal} />
      )}
    </>
  );
};
