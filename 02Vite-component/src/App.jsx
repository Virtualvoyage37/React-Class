import MyApp from "./ClassComponent";

function App() {
  var str = "My Name Is Demo";
  let value = 25;

  function AddValue(){
    
  }
  
  return (
    <>
      <h1>Vale: {value}</h1>
      <p class="">Hello {` ${str} `}</p>
      <button onClick={AddValue()}>Add Value</button>
      <button>Remove Value</button>
      {/* <MyApp />  */}
    </>
  );
}

export default App;
