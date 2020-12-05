import { BUY_COOKIES } from "./cookiesTypes";

const initialState = {
    numOfCookies: 50
}
const cookiesReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COOKIES:
            return{
                numOfCookies: state.numOfCookies - 1
            }
        default:
            return state;
    }
}
export default cookiesReducer;