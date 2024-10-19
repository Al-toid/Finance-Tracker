import Navbar from '../components/Navbar'
import LineGraph from '../components/LineGraph'
function InvestmentsPage(){
    return (<>
    <Navbar></Navbar>
    <div className='w-8/12 m-auto'>
        <LineGraph></LineGraph>
    </div>
    </>)
}
export default InvestmentsPage