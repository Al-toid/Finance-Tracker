import AmountBox from '../components/AmountBox'
import { amountData } from '../mock_data'
import LineGraph from '../components/LineGraph'
import Navbar from '../components/Navbar'
function HomePage(){
    return(<>
    <div className='bg-gray-300 h-screen'>
    <Navbar />
    <div className='flex w-7/12 justify-around pt-5' >
      <AmountBox title={amountData.balance.label} amount={amountData.balance.amount}></AmountBox>
      <AmountBox title={amountData.expenses.label} amount={amountData.expenses.amount}></AmountBox>
    </div>
    {/*For ChartJS Elements to be resposive, container must be relatively postioned with h/w defined*/}
    <div>
      <div className='relative w-[75vw] h-[50vh]'>
        <LineGraph></LineGraph>
      </div>
    </div>
    
   
    </div>
    </>)
}

export default HomePage