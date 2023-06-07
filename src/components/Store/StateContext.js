import { createStore } from "redux";

function counterReducer(state,action)
{
switch(action.type)
{
case 'Change': 
return {
    ...state,
    counter: action.counter  
};

case 'Change2':
return {
    ...state,
    counter2:action.counter2    
};

case 'Change3':
return {
    ...state,
    counter3:action.counter3
};

case 'Change4':
return {
    ...state,
    counter4:action.counter4
};

case 'Change5':
return {
    ...state,
    counter5:action.counter5
};

case 'Change6':
return {
    ...state,
    counter6:action.counter6
};

case 'Change7':
return {
    ...state,
    counter7:action.counter7
};

case 'Change8':
return {
    ...state,
    counter8:action.counter8
};

case 'Change9':
return {
    ...state,
    counter9:action.counter9
};

case 'Change10':
return {
    ...state,
    counter10:action.counter10
};

case 'Change11':
return {
    ...state,
    counter11:action.counter11
};

case 'Change12':
return {
    ...state,
    counter12:action.counter12
};

case 'Change14':                                            // Sub Table as pop for 1st row
return{
    ...state,
    counter14:action.counter14
}

case 'Change15':                                            // Sub Table as pop for 2nd row
return{
    ...state,
    counter15:action.counter15
}


default:
      return state;

}
}





const store=createStore(counterReducer);

export default store;
