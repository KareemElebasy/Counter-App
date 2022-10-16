function CounterBtns(props) {

    console.log("props" , props)

  return (
    <>
      <div className="Btns">
        <button

          className="btn btn-increase"
          onClick={() =>{ props.SetcounterVal(props.counterVal + 1 )}}
        >
          Increase Counter
        </button>

        <button
          className="btn btn-decrease"
          onClick={() =>{ props.counterVal>0 ? props.SetcounterVal(props.counterVal - 1 ):props.SetcounterVal(0)}}
        >
          Decrease Counter
        </button>
        <button
          className="btn btn-reset"
          onClick={() =>{props.SetcounterVal(0)}}
        >
          Reset Counter
        </button>
      </div>
    </>
  );
}

export default CounterBtns;
