import { createContext, useContext, useReducer } from "react";
import { isSameYear, isSameMonth } from "date-fns";
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
        date: "2022-12-1",
      },
      {
        id: 1,
        name: "Toys",
        value: 10,
        description: "buy toys",
        date: "2022-12-5",
      },
    ],
    budget: 600,
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
        date: "2022-10-2",
      },
      {
        id: 1,
        name: "buffalo",
        value: 40,
        description: "buy food",
        date: "2022-11-3",
      },
      {
        id: 2,
        name: "pizza",
        value: 90,
        description: "buy food",
        date: "2022-11-8",
      },
      {
        id: 3,
        name: "waffle",
        value: 60,
        description: "buy food",
        date: "2022-12-15",
      },
      {
        id: 4,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-15",
      }

      ,
      {
        id: 5,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-15",
      },
      {
        id: 6,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-15",
      },
      {
        id: 7,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-15",
      },
      {
        id: 8,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-16",
      },
      {
        id: 9,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-17",
      },
      {
        id: 10,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-18",
      },
      {
        id: 11,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-20",
      }


      ,
      {
        id: 12,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-22",
      },
      {
        id: 13,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-23",
      },
      {
        id: 14,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-24",
      },
      {
        id: 15,
        name: "cc",
        value: 90,
        description: "buy food",
        date: "2022-12-24",
      },
      
    ],
    budget: 2000,
  },
];
export const BudgetContext = createContext(null);

// useContext hook
export const useBudgetsContext = () => useContext(BudgetContext);

export const BudgetsContextProvider = ({ children }) => {
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

  const totalBudget = () =>
    budgets.reduce((total, next) => total + parseInt(next.budget), 0);

  const totalExpenses = () => {
    return budgets
      .map((b) => b.expenses.reduce((total, next) => total + next.value, 0))
      .reduce((total, next) => total + +next, 0);
  };

  const totalBudgetChartData = () =>
    budgets.reduce((total, next) => {
      total.push({ id: next.name, value: +next.budget });
      return total;
    }, []);

  const totalExpensesChartData = () => {
    return budgets.map((budget) => {
      const totalExpenses = budget.expenses.reduce(
        (total, next) => total + +next.value,
        0
      );
      return { id: budget.name, value: totalExpenses };
    });
  };

  const expensesMonthChartData = (budgetId, startDate) => {
    const budget = findBudgetById(budgetId);
    //const startDateIso = parseISO(startDate);
    // console.log(budget);
    const filteredExpenses = budget.expenses.filter((e) => {
      // const timeStampStartDate = new Date(startDate).getTime();
      const expenseDate = new Date(e.date);
      // console.log(e.date);
      // console.log(expenseDate);
      // console.log(new Date(startDate).getTime());
      // console.log(e.date > timeStampStartDate);
      return isSameMonth(expenseDate, startDate);
    });
    // console.log("filteredExpenses " + JSON.stringify(filteredExpenses));

    // console.log("expensesArray" +JSON.stringify(expensesArray) );
   


    
    return filteredExpenses ;
  };

  const groupedMonthChartExpenses=(filteredExpenses)=>{
    const expensesArray = filteredExpenses.map((expense) => {
      const date = new Date(expense.date).getDate();
     //const date=Math.floor(Math.random() * 30)
      return { id: date, value: expense.value };
    });
    const final=  groupDates(expensesArray)

    return final ;
  }

  const expensesYearChartData = (budgetId, startDate) => {
    const budget = findBudgetById(budgetId);
    //const startDateIso = parseISO(startDate);
    // console.log(budget);
    const filteredExpenses = budget.expenses.filter((e) => {
      // const timeStampStartDate = new Date(startDate).getTime();
      const expenseDate = new Date(e.date);
      // console.log(e.date);
      // console.log(expenseDate);
      // console.log(new Date(startDate).getTime());
      // console.log(e.date > timeStampStartDate);
      return isSameYear(expenseDate, startDate) 
    });
    // console.log("filteredExpenses " + JSON.stringify(filteredExpenses));
    
    // console.log("expensesArray" +JSON.stringify(expensesArray) );
    return filteredExpenses ;
  };

  const groupedYearChartExpenses=(filteredExpenses)=>{
    const expensesArray = filteredExpenses.map((expense) => {
      const date = new Date(expense.date).getMonth() + 1;
     //const date=Math.floor(Math.random() * 30)
      return { id: date, value: expense.value };
    });
    const final=  groupDates(expensesArray)

    return final ;
  }

  const value = {
    budgets,
    dispatch,
    getBudgetNames,
    findBudgetById,
    totalBudget,
    totalExpenses,
    expensesMonthChartData,
    totalBudgetChartData,
    totalExpensesChartData,
    expensesYearChartData,
    groupedMonthChartExpenses,
    groupedYearChartExpenses
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};




const groupDates = (arr)=> {
  // console.log(arr)
  var resMap = new Map();
  var result = [];
  arr.map((x) => {
      if (!resMap.has(x.id))
          resMap.set(x.id, x.value);
      else
          resMap.set(x.id, (x.value + resMap.get(x.id)));
  })
  resMap.forEach((value, key) => {
      result.push({
          id: key,
          value: value
      })
  })
  
  // console.log(result);
  return result
  }