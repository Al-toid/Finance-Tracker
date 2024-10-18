import PropTypes from "prop-types"

function AmountBox(props){
   return (
   <div className=" w-1/4 border-solid border-black bg-green-500 text-center rounded-md">
    <p>{props.title}</p>
    <p>${props.amount}</p>
   </div>) 
}

AmountBox.PropTypes = {
   title: PropTypes.string,
   amount: PropTypes.string
}



export default AmountBox