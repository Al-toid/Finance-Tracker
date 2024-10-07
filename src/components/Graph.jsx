import './Graph.css'
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

function Graph(){
    let options={}
    return(<Line options={options} data={lineChartData}></Line>)
}

export default Graph