import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { AddExpenseModal } from "../AddExpenseModal/AddExpenseModal";
import { ViewExpensesModal } from "../ViewExpensesModal/ViewExpensesModal";
export const Panel = ({ id, name, expenses, budget }) => {
const [modalsState, setModalsState] = useState({addExpenseModal:false, showExpensesModal:false})
  const totalExpenses: number = expenses.reduce((total: number, next) => {
   return total + (+next.value)
  }, 0);

  let progress = totalExpenses / budget *100;
  let bgcolor = "blue";
  let panelStyle = progress < 100 ? "panel--main" : "panel--main danger";
  if (progress > 80) {
    bgcolor = "red";
  } else if (progress >= 40) {
    bgcolor = "green";
  }

  const handleAddExpenseModal = () => {
   setModalsState({...modalsState,addExpenseModal:!modalsState.addExpenseModal})
  }
const handleViewExpenseModal = () => {
   setModalsState({...modalsState,showExpensesModal:!modalsState.showExpensesModal})
  }
  
  const PanelMain = () => { 
    return (
      <div className={panelStyle}>
      <div className="panel--head">
        <h4>{name}</h4>
        <div>
          <span className="panel--expenses">{+totalExpenses}</span>/
          <span className="panel--budget">{+budget}</span>
        </div>
      </div>
      <ProgressBar
        bgcolor={bgcolor}
        progress={Math.round(progress)}
        height={30}
      />
      <div className="panel--btns">
        <Button name="Add Expense" className="btn inverted" onClick={ handleAddExpenseModal} />
        <Button name="view Expenses" className="btn muted" onClick={handleViewExpenseModal}/>
      </div>
    </div>
    )
   }
  return (
    <>
      <PanelMain />
      
      {modalsState.addExpenseModal && <AddExpenseModal id={id} handleClose={handleAddExpenseModal} />}
      
      {modalsState.showExpensesModal && <ViewExpensesModal ModalName={name} id={id} handleClose={handleViewExpenseModal}/>}
    </>
  );
};
