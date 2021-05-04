
const initialState = {
	value : 0
}
const reducer = (state = initialState , action)=>{
	console.log(state, action)
switch (action.type){
	case "ADD" : return{
		value : state.value+1
	}
	case "DEC" : return{
		value : state.value-1
	}
	case "DB" : return{
		value : state.value*3
	}
}
return state
	}

export default reducer ;