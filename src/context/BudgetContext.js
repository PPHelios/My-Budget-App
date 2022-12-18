import { createContext, useContext, useReducer } from "react";
import { BudgetReducer } from "./BudgetReducer";

const initialState = [
  {
    id: 0,
    name: "Daily",
    expenses: [
      { id: 0, name: "Games", value: 60, description: "buy games" },
      { id: 1, name: "Toys", value: 10, description: "buy toys" },
    ],
    budget: 100,
  },
  {
    id: 1,
    name: "Food",
    expenses: [
      { id: 0, name: "mac", value: 80, description: "buy food" },
      { id: 1, name: "buffalo", value: 40, description: "buy food" },
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
    let totale = 0;
    budgets.map((budget) => {
      const btotal = budget.expenses.reduce((total, next) => {
        console.log(total, next.value);
        return total + parseInt(next.value);
      }, 0);
      console.log(btotal);
      totale += btotal;
    });

    return totale;
  };

  const value = {
    budgets,
    dispatch,
    getBudgetNames,
    findBudgetById,
    totalBudgets,
    totalExpenses,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
