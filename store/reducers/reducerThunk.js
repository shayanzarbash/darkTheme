import { FETCH_START, FETCH_SUCC, FETCH_END } from '../actions/actionThunk'

const initState = {
    items: [],
    isLoading: true,
    massege: ""
};

function ProductReducerThunk(state = initState, action) {
    switch (action.type) {
        case FETCH_START:
            return {
                items: [], massege: "", isLoading: true
            }

        case FETCH_SUCC:
            console.log("action.payload", action.payload)
            return {
                items: action.payload, massege: "", isLoading: false
            }

        case FETCH_END:
            return {
                items: [], massege: "", isLoading: false
            }

        default:
            return state;
    }
}

export default ProductReducerThunk;