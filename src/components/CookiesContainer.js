import React from 'react'
import {connect} from 'react-redux';
import { buyCookies } from '../redux';

function CookiesContainer(props) {
    return (
        <div>
            <h2>Number of cookies- {props.numOfCookies}</h2>
            <button onClick={props.buyCookies}>Buy Cokies</button>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        numOfCookies: state.cookies.numOfCookies
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyCookies: ()=>dispatch(buyCookies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesContainer)
