import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addToNumber,
} from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNumber(10))}>add to 10</button>
      <button onClick={() => dispatch(addToNumber(20))}>add to 20</button>
      <ul>
        {channelList.map((channel) => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
