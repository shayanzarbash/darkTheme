import { PRODUCT_ALL, PRODUCT_ID, PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_EDIT } from './actionsTypes'

export const getAll = () => ({
    type: PRODUCT_ALL,
});

export const getById = id => ({
    type: PRODUCT_ID,
    poyload: id
});

export const add = (item) => ({
    type: PRODUCT_ADD,
    payload: item
});

export const remove = id => ({
    type: PRODUCT_REMOVE,
    payload: id
});

export const edit = (item) => ({
    type: PRODUCT_EDIT,
    payload: item
})