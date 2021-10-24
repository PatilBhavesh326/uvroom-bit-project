import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions/index';
    
const CreateBook = () =>{
    
    const counter = useState();
    const currentUser = useSelector(state=>state.counter);

    const dispatch = useDispatch();

    const user = {name:'bhavesh'}

    return(
        <div className='createBok-hooks'>

            <h1> Counter: {counter} </h1>
            <button onClick={allActions.counterActions.incrementCount()}></button>

        </div>
    )


}

export default CreateBook;