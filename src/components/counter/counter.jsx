import { useState } from "react";
import CounterBtns from "../counterBtns/counterBtns";

function Counter () {

const[counterVal,SetcounterVal] = useState(0)

    return (

        <div className="counter">
        <h1 className="heading">Counter App Using React</h1>
        <p className="counter-val">{counterVal}</p>

        <CounterBtns counterVal ={counterVal} SetcounterVal = {SetcounterVal}/>
        </div>
    );
  }

  export default Counter;
