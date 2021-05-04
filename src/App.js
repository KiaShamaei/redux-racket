import React , {useState}from 'react';
import './App.css';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

function App() {
// const [value, setValue]= useState(0)
//improve reducer to 
// const reducer = ()=>{
// return {
// 	value : 20
// }
// }
const store = createStore(reducer);
// const handleAdd = ()=>{
// 	setValue (e=> e + 1)
// }
// const handleDec = ()=>{
// 	setValue (e=> e - 1)
// }

  return (
    <div className="App">
	<Provider store = {store}>
     <Counter   />

	</Provider>

    </div>
  );
}

export default App;
