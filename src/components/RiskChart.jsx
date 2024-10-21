import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js' 

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)



const riskData={
    labels:['Moderately Conservative 60/40','Moderate 40/60','Moderately Aggressive 20/80'],
    datasets:[{
        label:['Average Returns'],
        data:[5.0,6.2,6.5],
        backgroundColor:['green','yellow','rgb(255, 25, 86)'],
        borderColor:['black','black','black'],
        borderWidth:4,
        circumference:180,
        hoverOffset:5,
        rotation:270
    }]
}

const riskOptions={
    aspectRatio:3,
    responsive: true,
    plugins: {
        legend: {
            display: true,
            labels: {
              color: 'black'
            }
        }
    }
      
   
}

function RiskChart(){
    return (
        <>
        <p className="text-center">Percentage Bonds/Stocks</p>
        <Doughnut data={riskData} options={riskOptions}></Doughnut>
        </>
    )
}

export default RiskChart