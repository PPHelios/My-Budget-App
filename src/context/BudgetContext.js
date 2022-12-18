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

  const value = { budgets, dispatch, getBudgetNames, findBudgetById };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
