import { FETCH_START, FETCH_SUCC, FETCH_END } from './actionsTypes'

export const getAllProduct = (dispatch) => {
    const url = "https://apitester.ir/api/Products";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch(fetchSucc(data));
            console.log("dasta", data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const fetchStart = () => ({
    type: FETCH_START,
});

export const fetchSucc = (data) => ({
    type: FETCH_SUCC,
    payload: data
});

export const fetchEnd = (errorMassage) => ({
    type: FETCH_END,
    payload: errorMassage
});
