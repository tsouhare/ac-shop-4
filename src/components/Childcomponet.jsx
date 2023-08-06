
export default function ChildComponent ({changeMessage}){
  	const ClickHandler = () => {
    	changeMessage("Goodbye!");
  	}
	
  	return (
    	<button onClick={ClickHandler}>Show Goodbye</button>
  	);
};



