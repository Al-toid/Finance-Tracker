import './Navbar.css'
import reactLogo from '../assets/react.svg'
function Navbar(){
    return(<nav className='flex p-5 bg-green-300 shadow-md justify-between'>
        <div className='flex'>
            <a href="#"><img src={reactLogo} className='h-10 inline pr-1' ></img></a>
            <h1 className='text-3xl'>Finance Tracker</h1>
        </div>
        <ul className='flex items-center'>
            <li className='mx-4'><a href="#" className='text-lg hover:text-white duration-300'>Account</a></li>
            <li className='mx-4'><a href="#" className='text-lg hover:text-white duration-300'>Page1</a></li>
            <li className='mx-4'><a href="#" className='text-lg hover:text-white duration-300'>Page2</a></li>
        </ul>
    </nav>)
}

export default Navbar