import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllProduct } from '../store/actions/actionThunk';


function ProductListThunk({ products, getAll, isLoading, massege }) {

    console.log("data", products);

    useEffect(() => {
        getAll()
    }, []);

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
                            <tr key={prop.productId}>
                                <td>{prop.productId}</td>
                                <td>{prop.productName}</td>
                                <td>{prop.unitPrice}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

// برای خواندن اطلاعات
const mapStateToProps = state => {
    return {
        products: state.productThunkState.items,
        isLoading: state.productThunkState.isLoading,
        massege: state.productThunkState.massege
    }
};

// برای ارسال اطلاعات به ریداکس
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => getAllProduct(dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductListThunk);