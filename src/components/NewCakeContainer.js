import React, {useState} from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux/index'

function NewCakeContainer(props) {
    const [cakeNum, setCake] = useState(1);
    
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>

            <input type='text' value={cakeNum} onChange={e => setCake(e.target.value)} />

            <button onClick={ () => props.buyCake(cakeNum)}>Buy {cakeNum} Cake</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
