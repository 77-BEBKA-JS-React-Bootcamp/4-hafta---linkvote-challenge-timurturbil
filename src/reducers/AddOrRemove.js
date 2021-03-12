const initialUserState = {
    arr:[...JSON.parse(localStorage.getItem('Liste'))]
}

const addReducer = (state = initialUserState, action) => {
    switch(action.type){
        case('ADD'):
             return {
                ...state, arr: [...state.arr, action.myObject]
             };
        case('DELETE'):
        return {
            ...state,
            arr: state.arr.filter((item, index) => item.name !== action.name)
          } 
        case('UPDATE'):
        let normalState = state.arr;
        let myValue = state.arr.filter((item, index) => item.name === action.name)
        let indexOfValue = normalState.indexOf(myValue[0]);
        
        if(action.value < 0){
            --normalState[indexOfValue].points
        }else{
            ++normalState[indexOfValue].points
        }
            return{
                ...state,
                arr: normalState
            }  
        case('ORDER'):
        let myState = state.arr;
        if(action.index === 0){
            myState.sort(function(a, b) {
                return  parseFloat(b.points) - parseFloat(a.points);
            });
        }else{
            myState.sort(function(a, b) {
                return parseFloat(a.points) - parseFloat(b.points);
            });
        }

            return{
                ...state,
                arr: myState
            }        
        default:
            return state;        
    }   

}

export default addReducer;