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
    years: PropTypes.number,
    monthlyInvestment: PropTypes.number,
    rate: PropTypes.number
}


function LineGraph(props){
    //using the monthly investment amount, we create an array with the sum of these investments
    let regularSavings=[]
    let years=[]
    let growthRate=1+(props.rate/100)
    for(let i=0;i<props.years;i++){
        years[i]=2025+i
        if (i==0){
            regularSavings[i]=props.monthlyInvestment*12
        }
        else{
            regularSavings[i]=regularSavings[i-1]+props.monthlyInvestment*12
        }
    }
    //using compound interest we calculate growth over time
    let investmentSavings=[]
    for(let i=0;i<props.years;i++){
        if (i==0){
            investmentSavings[i]=(props.monthlyInvestment*12)*growthRate
        }
        else{
            investmentSavings[i]=(investmentSavings[i-1]+props.monthlyInvestment*12)*growthRate
        }
    }

    let investmentData= {
        //x axis
        labels: years,
        //y axis
        datasets: [
            {
                label: "Potential",
                data: investmentSavings,
                borderColor: "green"   
            },
            {
                label: "Regular Saving",
                data: regularSavings,
                borderColor: "gray"
            },
        ],
    };

    return(<Line options={props.option} data={investmentData}  className='bg-gray-200'></Line>)
}

export default LineGraph