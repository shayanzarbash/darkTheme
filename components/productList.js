import React from 'react';
import { connect } from 'react-redux';
import {remove} from '../store/actions/action'
 

function ProductList({ products, removeProduct }) {

    console.log(removeProduct);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(prop =>
                            <tr key={prop.id}>
                                <td>{prop.id}</td>
                                <td>{prop.name}</td>
                                <td>{prop.age}</td>
                                <td>
                                    <button onClick={() => removeProduct(prop.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

// برای خواندن اطلاعات
const mapStateToProps = state => ({
    products: state.productState.items
});

// برای ارسال اطلاعات به ریداکس
const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (id) => dispatch(remove(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);