import { createContext, useContext, useReducer } from "react";
import{budgetsReducer} from "./budgetsReducer"

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
    totalExpenses(){
      
      return this.expenses.reduce((total,next)=>total+next.value,0)}
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
        value: 60,
        description: "buy food",
        date: "2022-12-24",
      },
      
    ],
    budget: 2000,
        totalExpenses(){return this.expenses.reduce((total,next)=>total+next.value,0)}

  },
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
    totalExpenses(){
      
      return this.expenses.reduce((total,next)=>total+next.value,0)}
  },
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
    totalExpenses(){
      
      return this.expenses.reduce((total,next)=>total+next.value,0)}
  },{
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
    totalExpenses(){
      
      return this.expenses.reduce((total,next)=>total+next.value,0)}
  },{
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
    totalExpenses(){
      
      return this.expenses.reduce((total,next)=>total+next.value,0)}
  },{
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
    totalExpenses(){
      
      return this.expenses.reduce((total,next)=>total+next.value,0)}
  }
];

const BudgetsContext = createContext()
export const useBudgetsContext = () => useContext(BudgetsContext)
export const BudgetsContextProvider = ({children}) => {
const [budgets,dispatch]= useReducer(budgetsReducer, initialState)


// Helper Functions

const totalBudget = () => { 
  return budgets.reduce((total, next)=>total + next.budget,0)
}

const totalExpenses = () => { 
  return budgets.reduce((total, next)=>total + next.totalExpenses(),0)
  }

const totalBudgetChartData = () => { 
return budgets.reduce((total, next)=>{
    total.push({id:next.name, value:next.budget})
    return total
  },[])
}




 const totalExpensesChartData = () => { 
  
return budgets.map(budget=>{
  const totalBudgetExpenses = budget.expenses.reduce((total, next)=>total+next.value,0)
  
 return {id:budget.name, value:totalBudgetExpenses}})

  }

const value={
  budgets, 
  dispatch,
  totalBudget,
  totalExpenses, 
  totalBudgetChartData,
  totalExpensesChartData
}

return(
  <BudgetsContext.Provider value={value}>
  {children}
</BudgetsContext.Provider>
)
}