// import logo from './logo.svg';
import './App.css';
import Kaju from './Components/ClassComp';
import Raju from "./Components/FunctionalComp";
import{useState}from "react"

function App() {
  const [count,setCount] = useState(false);
  function tara() {
    setCount(!count)
  }
  const [oute,setoute] = useState(false);
  function sitara() {
    setoute(!oute)
  }
  return (
    <div className="pp">
    <h1 className="App">Styling Using Functional and Class Component</h1>
    <button  onClick={tara} >To see Styling in Functional Component</button>
    <button   onClick={sitara}>To see Styling in Class Component</button>
    {count?<Raju />:null}
    {oute?<Kaju />:null}
    </div>
  );
}

export default App;
