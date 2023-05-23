import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../src/general-type';
import { addToParameter } from '../../src/action';

'use client';

function Post() {
    const state = useSelector((state: AppState) => state.parameter) | 0;
    const dispatch = useDispatch();

    const clicPlusHandler = () => {
        dispatch(addToParameter(3))
    };

    return (
        <div>{state}
            <button onClick={clicPlusHandler}>++</button>
        </div>
    )
}

export default Post