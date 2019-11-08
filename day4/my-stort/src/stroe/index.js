import {createStore} from 'redux';
// import { Provider } from 'react-redux'
// let store = createStore((store={
//     value:''
// },action)=>{
//     switch(action.type){
//         case 'SETAUTHOR':
//             return{
//                 ...store,
//                 value:action.value
//             }
//             break;
//         default:
//             return store
//             break;
//     }
// })
const initalState = {
    greeting:''
};
function greeter(store,action){
    if (typeof store === 'undefined') {
        return initalState;
    }
    switch(action.type){
        case 'SETAUTHOR':
            return {
                ...store,
                greeting: action.text
            }
            break;
        default:
            return store
            break;
    }
}
window.$store = createStore(greeter);