// [
//   {
//     id: 0,
//     name: "Daily",
//     expenses: [
//       { name: "Games", value: 60 },
//       { name: "Toys", value: 10 },
//     ],
//     budget: 100,
//   },
// ];
let budgetId = 1;
let expenseId = 3;
export const BudgetReducer = (budgets, action) => {
  switch (action.type) {
    case "addExpense": {
      const { id, name, value, description } = action;
      const updatedBudget = budgets.map((b) => {
        if (b.id === id) {
          const date = new Date();
          console.log(date);
          return {
            ...b,
            expenses: [
              ...b.expenses,
              {
                id: expenseId++,
                name,
                value: +value,
                description,
                date,
              },
            ],
          };
        } else {
          return b;
        }
      });
      console.log(updatedBudget);
      return updatedBudget;
    }
    case "deleteExpense": {
      const { budgetId, expenseId } = action;

      const newBudgets = budgets.map((b) => {
        if (b.id === budgetId) {
          const newExpenses = b.expenses.filter((e) => e.id !== expenseId);
          return { ...b, expenses: newExpenses };
        } else {
          return b;
        }
      });
      console.log(newBudgets);
      return newBudgets;
    }
    case "addBudget": {
      const newBudget = {
        id: budgetId++,
        name: action.name,
        expenses: [],
        budget: action.budget,
      };
      return [...budgets, newBudget];
    }
    case "deleteBudget": {
      return budgets.filter((b) => b.id !== action.id);
    }
    default: {
    }
  }
};
