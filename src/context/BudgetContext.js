import { createContext, useContext, useReducer } from "react";
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
        date: 1171413833724,
      },
      {
        id: 1,
        name: "Toys",
        value: 10,
        description: "buy toys",
        date: 1671453833724,
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
        date: 1671113833724,
      },
      {
        id: 1,
        name: "buffalo",
        value: 40,
        description: "buy food",
        date: 1671153833724,
      },
    ],
    budget: 200,
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
  return  budgets.map(b => b.expenses
.reduce((total, next) => total + next.value ,0))
.reduce((total, next) => total + +next ,0)
  };

  const expensesChartData = (budgetId, startDate) => {
    const f = findBudgetById(budgetId);
    const h = f.expenses.filter((e) => {
      // const timeStampStartDate = new Date(startDate).getTime();
      // console.log(e.date);
      // console.log(new Date(startDate).getTime());
      // console.log(e.date > timeStampStartDate);
      return e.date > startDate;
    });
    //console.log("h " + h);
    const z = h.map((expense) => {
      const date = new Date(expense.date).getDate();
      return { date, value: expense.value };
    });
    //console.log(z);
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
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
