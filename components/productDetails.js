import React from 'react'
import { connect } from 'react-redux';
import { add } from '../store/actions/action';

function ProductDetails({ addProduct }) {

    const save = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const id = form.get("id");
        const name = form.get("name");
        const age = form.get("age");

        addProduct({ id, name, age });
        e.target.reset();
    }


    return (
        <div>
            <form onSubmit={(e) => save(e)} method="post" >
                <label htmlFor="id">id:</label>
                <input type="text" name="id" />
                <label htmlFor="name">name:</label>
                <input type="text" name="name" />
                <label htmlFor="age">age:</label>
                <input type="text" name="age" />
                <button type="submit">save</button>
            </form>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        addProduct: (item) => dispatch(add(item))
    }
};

export default connect(null, mapDispatchToProps)(ProductDetails);