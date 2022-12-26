
import { ResponsiveBar } from '@nivo/bar'


import "react-datepicker/dist/react-datepicker.css"
import { useBudgetsContext } from "../../context/BudgetContext";

export const ExpensesYearChart = ({ id, startDate }) => {


  

  const { expensesYearChartData,groupedYearChartExpenses } = useBudgetsContext();
  const data = groupedYearChartExpenses(expensesYearChartData(id, startDate)).sort((a, b) => a.id - b.id);
  console.log(data);

  const ExpensesBarChart = () => (
    <>
    <ResponsiveBar
        data={data}
        
        indexBy="id"
        margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={["green"]}
        
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
            legend: 'Year',
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


// const currentDate = new Date();
// const getMonthStart = (date) => {
//   const monthStart = startOfYear(date);
//   const year = monthStart.getFullYear();
//   let month = (monthStart.getMonth() + 1).toString();
//   month.length === 1 ? (month = "0" + month) : (month = month);
//   let day = monthStart.getDate().toString();
//   day.length === 1 ? (day = "0" + day) : (day = day);
//   const dateString = year + "-" + month + "-" + day;
//   return dateString;
// };
