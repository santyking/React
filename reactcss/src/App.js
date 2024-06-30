import logo from './logo.svg';
import './App.css';
import style from './mahstyle.module.css';
// import './Mystyle.css'

function App() {
  return (
    <div>
      {/* <h1 className={comp}>Hello!</h1> */}
      {/* <h1 className={style.comp}>Hello!</h1> */}
      <h1 style={{backgroundColor: "black",color: "white"}}>Hello!</h1>
    </div>
  );
}

export default App;
