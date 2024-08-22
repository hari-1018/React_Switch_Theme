import React,{useState} from 'react';
import './App.css';

function App() {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? 'dark' : 'light'}>
      <h1>Switch Theme</h1>
      <button className="button" onClick={changeTheme}>
        <b>Switch Theme</b>
      </button>


    
    </div>
  );
}

export default App;
