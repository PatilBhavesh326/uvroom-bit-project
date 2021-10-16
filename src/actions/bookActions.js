
const createBook = (book) =>{
    return {
        type:'CREATE_BOOK',
        payload: book
    }
}

const incrementCount = () =>{
    return{
        type:'INCREMENT'
    }
}

const decrementCount = () =>{
    return {
        type : 'DECREMENT'
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createBook,
    incrementCount,
    decrementCount
}