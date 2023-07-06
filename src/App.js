import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from './redux/features/counter/counterSlice';

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  console.log(count);
  return (
    <div className="App">
      <header className="App-header">
<button  onClick={()=>dispatch(decrement())}>-</button> 
<input type="text" disabled value={count} />
<button onClick={()=>dispatch(increment())}>+</button>
      </header>
    </div>
  );
}

export default App;
