import React, {useState} from 'react';
import './App.css';
import { useToasts } from 'react-toast-notifications'

function App() {
  const [type, setType] = useState("success");
  const {addToast} = useToasts();
  const fire = () => {
    addToast('massage', {
      appearance: type,
      autoDismiss: true
    })
  }
  return (
    <div className="App">
      <div className="app_container"></div>
      <div className="section__select">
        <select value={type} onChange={e=>{
          setType(e.target.value)
        }}>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="error">error</option>
          <option value="info">info</option>
        </select>
      </div>
      <div className="section__button">
        <button onClick={fire}>Fire</button>
      </div>
    </div>
  );
}

export default App;
