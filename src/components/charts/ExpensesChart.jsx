import { useState } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { startOfMonth } from "date-fns";
import { useBudgetsContext } from "../../context/BudgetContext";

export const ExpensesChart = ({ id }) => {

  const initialState = getMonthStart(currentDate);
  const [startDate, setStartDate] = useState(initialState);
  console.log(startDate);
  console.log(currentDate);

  const { expensesChartData } = useBudgetsContext();
  const data = expensesChartData(id, startDate);
  console.log(data);

  const handleStartDateChange = (e) => {
    const x = new Date(e.target.value);
    const newDate = getMonthStart(x).toString();
    console.log(newDate);
    setStartDate(newDate);
  };






  const ExpensesBarChart = () => (
    <>
    <ResponsiveBar
        data={data}
        
        indexBy="id"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
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
      <form>
        <input
          type="date"
          value={startDate}
          step={30}
          onChange={handleStartDateChange}
        />
      </form>
      <div className="expensesChart--chart">
        <ExpensesBarChart />
      </div>
      
    </>
  );
};


const currentDate = new Date();
const getMonthStart = (date) => {
  const monthStart = startOfMonth(date);
  const year = monthStart.getFullYear();
  let month = (monthStart.getMonth() + 1).toString();
  month.length === 1 ? (month = "0" + month) : (month = month);
  let day = monthStart.getDate().toString();
  day.length === 1 ? (day = "0" + day) : (day = day);
  const dateString = year + "-" + month + "-" + day;
  return dateString;
};
const edata =[
  {
    "country": "AD",
    "hot dog": 185,
    "hot dogColor": "hsl(307, 70%, 50%)",
    "burger": 82,
    "burgerColor": "hsl(232, 70%, 50%)",
    "sandwich": 55,
    "sandwichColor": "hsl(196, 70%, 50%)",
    "kebab": 72,
    "kebabColor": "hsl(191, 70%, 50%)",
    "fries": 125,
    "friesColor": "hsl(4, 70%, 50%)",
    "donut": 47,
    "donutColor": "hsl(77, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 126,
    "hot dogColor": "hsl(24, 70%, 50%)",
    "burger": 29,
    "burgerColor": "hsl(45, 70%, 50%)",
    "sandwich": 197,
    "sandwichColor": "hsl(344, 70%, 50%)",
    "kebab": 190,
    "kebabColor": "hsl(65, 70%, 50%)",
    "fries": 117,
    "friesColor": "hsl(46, 70%, 50%)",
    "donut": 51,
    "donutColor": "hsl(286, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 49,
    "hot dogColor": "hsl(287, 70%, 50%)",
    "burger": 126,
    "burgerColor": "hsl(122, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(219, 70%, 50%)",
    "kebab": 34,
    "kebabColor": "hsl(76, 70%, 50%)",
    "fries": 71,
    "friesColor": "hsl(133, 70%, 50%)",
    "donut": 62,
    "donutColor": "hsl(345, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 28,
    "hot dogColor": "hsl(322, 70%, 50%)",
    "burger": 4,
    "burgerColor": "hsl(132, 70%, 50%)",
    "sandwich": 189,
    "sandwichColor": "hsl(294, 70%, 50%)",
    "kebab": 145,
    "kebabColor": "hsl(49, 70%, 50%)",
    "fries": 195,
    "friesColor": "hsl(51, 70%, 50%)",
    "donut": 97,
    "donutColor": "hsl(200, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 130,
    "hot dogColor": "hsl(111, 70%, 50%)",
    "burger": 118,
    "burgerColor": "hsl(246, 70%, 50%)",
    "sandwich": 66,
    "sandwichColor": "hsl(28, 70%, 50%)",
    "kebab": 8,
    "kebabColor": "hsl(289, 70%, 50%)",
    "fries": 117,
    "friesColor": "hsl(81, 70%, 50%)",
    "donut": 59,
    "donutColor": "hsl(120, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 67,
    "hot dogColor": "hsl(182, 70%, 50%)",
    "burger": 186,
    "burgerColor": "hsl(215, 70%, 50%)",
    "sandwich": 6,
    "sandwichColor": "hsl(61, 70%, 50%)",
    "kebab": 132,
    "kebabColor": "hsl(359, 70%, 50%)",
    "fries": 37,
    "friesColor": "hsl(322, 70%, 50%)",
    "donut": 75,
    "donutColor": "hsl(220, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 36,
    "hot dogColor": "hsl(258, 70%, 50%)",
    "burger": 130,
    "burgerColor": "hsl(256, 70%, 50%)",
    "sandwich": 190,
    "sandwichColor": "hsl(339, 70%, 50%)",
    "kebab": 95,
    "kebabColor": "hsl(147, 70%, 50%)",
    "fries": 34,
    "friesColor": "hsl(265, 70%, 50%)",
    "donut": 140,
    "donutColor": "hsl(36, 70%, 50%)"
  }
]