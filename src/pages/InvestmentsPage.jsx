import Navbar from '../components/Navbar'
import InvestmentGraph from '../components/InvestmentGraph'
import RiskChart from '../components/RiskChart'
import { useState } from 'react'



function InvestmentsPage(){
    const [budget,setBudget] = useState(150)
    const [years,setYears] = useState(5)
    const [growthRate, setGrowthRate]= useState(5)
    const changeBudget = event =>{
        setBudget(event.target.value)

    }
    const changeYears = event =>{
        setYears(event.target.value)

    }

    const changeGrowthRate = event =>{
        setGrowthRate(event.target.value)
    }
    let graphOptions= {
        scales:{
            y:{
                min:0,
            }
        }
    }
    
    return (<>
    <div className='bg-green-600 h-lvh'>
    <Navbar></Navbar>
    <br></br>
    <p className='pl-6'>Fields here will be replaced with a form in the future</p>
    <br></br>
    <div className='flex w-2/4 justify-around'>
    
        <p>Input Monthly Budget</p>
        <input onChange={changeBudget} value={budget} className='bg-green-500 w-12 text-center'></input>

        <p>Input Years</p>
        <input onChange={changeYears} value={years} className='bg-green-500 w-6 text-center'></input>

        <p>Input Growth Rate</p>
        <input onChange={changeGrowthRate} value={growthRate} className='bg-green-500 w-6 text-center'></input>
    </div>
    <br></br>
    
    <div className='flex'>
      <div className='relative w-[75vw] h-[50vh]'>
        <InvestmentGraph option={[graphOptions]} years={years} monthlyInvestment={budget} rate={growthRate}></InvestmentGraph>
      </div>
      <div className='relative w-[35vw] h-[50vh]'>
        <RiskChart></RiskChart>
      </div>
    </div>
    </div>
    </>)
}
export default InvestmentsPage