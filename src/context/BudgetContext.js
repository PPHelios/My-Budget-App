import { createContext, useContext, useReducer } from "react";
import { isBefore, isAfter, endOfMonth, parseISO } from "date-fns";
import { BudgetReducer } from "./BudgetReducer";
const date = Date.now();
const initialState = [
  {
    id: 0,
    name: "Daily",
    expenses: [
      {
        id: 0,
        name: "Games",
        value: 60,
        description: "buy games",
        date: "2022-12-1T18:50:14.851Z",
      },
      {
        id: 1,
        name: "Toys",
        value: 10,
        description: "buy toys",
        date: "2022-11-21T18:50:14.851Z",
      },
    ],
    budget: 100,
    date,
  },
  {
    id: 1,
    name: "Food",
    expenses: [
      {
        id: 0,
        name: "mac",
        value: 80,
        description: "buy food",
        date: "2022-12-1T18:50:14.851Z",
      },
      {
        id: 1,
        name: "buffalo",
        value: 40,
        description: "buy food",
        date: "2022-12-15T18:50:14.851Z",
      },
      {
        id: 2,
        name: "pizza",
        value: 90,
        description: "buy food",
        date: "2022-10-5T18:50:14.851Z",
      },
      {
        id: 3,
        name: "waffle",
        value: 60,
        description: "buy food",
        date: "2022-11-15T18:50:14.851Z",
      },
    ],
    budget: 400,
  },
];
export const BudgetContext = createContext(null);

// useContext hook
export const useBudgetsContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }) => {
  const [budgets, dispatch] = useReducer(BudgetReducer, initialState);

  // Helper functions
  const getBudgetNames = () =>
    budgets.reduce((usersArray, nextBudget) => {
      const budget = { id: nextBudget.id, name: nextBudget.name };
      usersArray.push(budget);
      return usersArray;
    }, []);

  const findBudgetById = (id) => {
    const budget = budgets.find((b) => b.id === id);
    return budget;
  };

  const totalBudgets = () =>
    budgets.reduce((total, next) => total + parseInt(next.budget), 0);

  const totalExpenses = () => {
    return budgets
      .map((b) => b.expenses.reduce((total, next) => total + next.value, 0))
      .reduce((total, next) => total + +next, 0);
  };
  const totalBudgetChartData = () =>
    budgets.reduce((total, next) => {
      total.push({ id: next.name, value: next.budget });
      return total;
    }, []);
  const totalExpensesChartData = () => {
    return budgets.map((budget) => {
      const totalExpenses = budget.expenses.reduce(
        (total, next) => total + next.value,
        0
      );
      return { id: budget.name, value: totalExpenses };
    });
  };
  const expensesChartData = (budgetId, startDate) => {
    const f = findBudgetById(budgetId);
    const ss = parseISO(startDate);

    const h = f.expenses.filter((e) => {
      // const timeStampStartDate = new Date(startDate).getTime();
      const vv = new Date(e.date);
      console.log(e.date);
      console.log(ss);
      // console.log(new Date(startDate).getTime());
      // console.log(e.date > timeStampStartDate);
      return isAfter(e.date, ss) && isBefore(e.date, endOfMonth(ss));
    });
    console.log("h " + h);
    const z = h.map((expense) => {
      const date = new Date(expense.date).getDate();
      return { id: date, value: expense.value };
    });
    console.log("z" + z);
    return z;
  };

  const value = {
    budgets,
    dispatch,
    getBudgetNames,
    findBudgetById,
    totalBudgets,
    totalExpenses,
    expensesChartData,
    totalBudgetChartData,
    totalExpensesChartData,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
