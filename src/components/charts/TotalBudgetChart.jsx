import { ResponsivePie } from "@nivo/pie";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {useBudgetsContext} from "../../context/BudgetsContext"

export const TotalBudgetChart = () => {
  const { totalBudget, totalBudgetChartData } = useBudgetsContext();
  const budgets = totalBudgetChartData();
const total= totalBudget()
// `Total Budgets: ${total}`
  return(
    

<ResponsivePie
      data={budgets}
      margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={20}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={180}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      
      
    />
    
  )
}