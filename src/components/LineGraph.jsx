import './LineGraph.css'
import {Line} from "react-chartjs-2"
import { lineChartData } from '../mock_data'
import { Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
} from 'chart.js' 

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
)

function LineGraph(){
    let options={}
    return(<Line options={options} data={lineChartData} className='bg-green-100'></Line>)
}

export default LineGraph