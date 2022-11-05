import { PRODUCT_ALL, PRODUCT_ID, PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_EDIT } from '../actions/actionsTypes'

const initState = {
    items: [
        { id: 1, name: "ali", age: 55 },
        { id: 2, name: "vali", age: 53 },
        { id: 3, name: "zali", age: 23 }
    ],
    iseLoading: true
};

function ProductReducer(state = initState, action) {
    switch (action.type) {
        case PRODUCT_ALL:
            return { ...state, items: state.items };

        case PRODUCT_ID:
            return { ...state, items: state.items.find(q => q.id == action.payload) };

        case PRODUCT_ADD:
            return { ...state, items: state.items.concat([action.payload]) };

        case PRODUCT_REMOVE:
            return { ...state, items: state.items.filter(q => q.id != action.payload) };

        default:
            return state;
    }
}

export default ProductReducer;