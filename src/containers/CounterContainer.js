import React, { useCallback } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch, connect } from 'react-redux'
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    
    // const number = useSelector(state => state.counter.number);
    // const dispatch = useDispatch();
    // const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    // const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    
    return (
        <Counter 
            number={ number }
            onIncrease={ increaseAsync }
            onDecrease={ decreaseAsync }
        />
        // <Counter number={ number } onIncrease={ increase } onDecrease={ decrease } />
    );
}

// const mapStateToProps = state => ({
//     number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//         console.log("increase");
//     },
//     decrease: () => {
//         dispatch(decrease());
//         console.log("decrease");
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);