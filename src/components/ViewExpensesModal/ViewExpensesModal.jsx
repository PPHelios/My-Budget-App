import { useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker"
import { startOfMonth, startOfYear } from "date-fns";
import { useBudgetsContext } from "../../context/BudgetContext";
import { ExpensesMonthChart } from "../charts/ExpensesMonthChart";
import { ExpensesYearChart } from "../charts/ExpensesYearChart";
export const ViewExpensesModal = ({ id, ModalName, handleClose }) => {
  const { dispatch,expensesMonthChartData, expensesYearChartData  } = useBudgetsContext();
  const [monthView, setMonthView] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
   console.log(startDate);
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
    const expenses = monthView?expensesMonthChartData(id, startDate):expensesYearChartData(id, startDate);
    return (
   <>
        {expenses.map((x) => {
        
         let date = x.date;
         if (typeof date !== 'string'){
          console.log( date)
          date = monthObjectToString(x.date)
         // console.log(date)
         }
          return (
            <tr key={x.id}>
              <td> {x.name}</td>
              <td> {x.value}$ </td>
              <td> {date}</td>
              <td> {x.description}</td>
              <td>
              <button onClick={() => handleDeleteExpense(x.id)}>
                &#10005;
              </button></td>
            </tr>
          );
        })}
     </>
    );
  };

  return (
    <div className="addExpenseModal--body" onClick={handleClose}>
      <div
        className="addExpenseModal--content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="addExpenseModal--head">
          <div className="addExpenseModal--head-modalName"> Your {ModalName} Expenses :</div>
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
        <div className="addExpenseModal--data">
          <div className="addExpenseModal--data-list">
          
          <form className="picker" >
      {monthView? <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
    />:<DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
    />}
    <button type="button" id="picker-btn" onClick={()=>setMonthView(!monthView)}>{monthView? "Year View" :" Month view"}</button>
      </form>
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Date</th>
                <th>Comment</th>
                <th>Delete</th>
              </tr> 
              </thead>
              <tbody>
        <ExpensesList />
        </tbody>
        </table>
        </div>
        <div className="addExpenseModal--data-chart">
        {monthView ? (
          <ExpensesMonthChart id={id} startDate={startDate}/>
        ) : (
          <ExpensesYearChart id={id} startDate={startDate}/>
        )}
      </div>
      </div>
      </div>
    </div>
  );
};


const monthObjectToString = (date) => {
 
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  month.length === 1 ? (month += "0" + month) : (month = month);
  let day = date.getDate().toString();
  day.length === 1 ? (day = "0" + day) : (day = day);
  const dateString = year + "-" + month + "-" + day;
  return dateString;
};