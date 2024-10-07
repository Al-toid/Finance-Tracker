import './Navbar.css'
import reactLogo from '../assets/react.svg'
import userPFP from "../assets/user_pfp.jpg"
function Navbar(){
    return(<nav className='flex p-5 bg-green-300 shadow-md justify-between'>
        <div className='flex'>
            <a href="#"><img src={reactLogo} className='h-10 inline pr-1' ></img></a>
            <h1 className='text-3xl'>Finance Tracker</h1>
        </div>
        <ul className='flex items-center'>
            <li className='mx-4'><a href="#" className='text-lg hover:text-white duration-300'>Home</a></li>
            <li className='mx-4'><a href="#" className='text-lg hover:text-white duration-300'>Investments</a></li>
            <li className='mx-4'><a href="#" className='text-lg hover:text-white duration-300'><img src={userPFP} className='w-10 rounded-md'></img></a></li>
        </ul>
    </nav>)
}

export default Navbar