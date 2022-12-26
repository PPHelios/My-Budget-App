import { useState } from "react";
import { ResponsiveBar } from '@nivo/bar'

import "react-datepicker/dist/react-datepicker.css"
import { useBudgetsContext } from "../../context/BudgetContext";

export const ExpensesMonthChart = ({ id,startDate }) => {

  

  const { expensesMonthChartData, groupedMonthChartExpenses } = useBudgetsContext();
  const data = groupedMonthChartExpenses(expensesMonthChartData(id, startDate));
  //console.log([{a:0}] == false);

  
// console.log(data);





  const ExpensesBarChart = () => (
    <>
    <ResponsiveBar
        data={data}
        
        indexBy="id"
        margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={"#61cdbb"}
        
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
      
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendPosition: 'middle',
            legendOffset: 35
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Value',
            legendPosition: 'middle',
            legendOffset: -45
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
       
        
        role="application"
        ariaLabel="Nivo bar chart demo"
        
    />
    </>
)



  return (
    <>
 
      <div className="expensesChart--chart">
     { data.length>0?<ExpensesBarChart />:<h2>No Expenses At This Period...</h2>}
      </div>
      
    </>
  );
};




