function AmountBox(props){
   return (
   <div>
    <p>{props.title}:</p>
    <p>${props.amount}</p>
   </div>) 
}

export default AmountBox