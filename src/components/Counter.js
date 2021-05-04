import React from "react";
import "../App.css";
import {connect} from "react-redux";

const Counter = (props) => {

	console.log(props)
	//use of dispatch form 1
	const dec = ()=>{
		props.dispatch({type : "DEC"})
	}
  return (
    <div>
      <h1>Counter</h1>
      <div className="App">
        <button onClick={props.add}>+</button>
        <p>{props.value}</p>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
};
const mapStateToProps =(state)=>{
	return{value :  state.value}
	
}
//use of dispatch form 2
const mapDispatchToProps=(dispatch)=>{
	return {
		add : ()=>dispatch({type: "ADD"}),

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
