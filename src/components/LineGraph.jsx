import {Line} from "react-chartjs-2"
import PropTypes from "prop-types"
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
LineGraph.propTypes = {
    option: PropTypes.object,
    dataset: PropTypes.object
 }

function LineGraph(props){
    return(<Line options={props.option} data={props.dataset}></Line>)
}



export default LineGraph