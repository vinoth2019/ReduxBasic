
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counterSlice'

const Counter = () => {  
  const counterValue = useSelector((state) => state.counter.counter);  
  const show = useSelector((state) => state.counter.isShowCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  const incrmentHandler = () => {
    dispatch(counterActions.increment())
  }
  const decmentHandler = () => {
    dispatch(counterActions.decrement())
  } 
  const increase = () => {dispatch(counterActions.increase(10))}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
      <button onClick={incrmentHandler}>Increment</button>
      <button onClick={decmentHandler}>Decrement</button>
      <button onClick={increase}>Increase</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
