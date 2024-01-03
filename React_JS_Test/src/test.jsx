import { useState} from 'react';
import './App.css'

function App() {
  const [state, setState] = useState(0);
  const [name, setName] = useState(null);
  const [data, setData] = useState([]);

  const targetfunc = (e) => {
    setName(e.target.value);
  };

  const clickfunc = () => { 
    setData((prev) => [...prev, name]); // name'i ekleyin, data'yi değil
  };
  console.log(data, "data")
  return (
    <>
      <div className='main'>
        <p>You clicked {state} times</p>
        <button onClick={() => setState(state + 1)}>max</button>
        <button onClick={() => setState(state - 1)}>min</button>
      </div>
      <br />
      <input type="text" onChange={targetfunc} />
      <button onClick={clickfunc}>tikla</button>
      <br />
      <div>
        {
          data.map((item, index) => (
          <p key={index}>{item}</p>
          ))
        }
      </div>
    </>
  );
}

export default App
