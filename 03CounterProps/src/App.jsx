import Card from "./Card";
import Counter from "./Counter";
import Form from "./Form";
import UpdateData from "./UpdateData";
import "./App.css"

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Form />  */}
      <div className="card-box">
      <Card name="demo" work={"content Rwiter"} />
      <Card name="deepak"/>
      <Card name="jay"/>
      <Card name="raju"/>
      </div>
      {/* <UpdateData /> */}
    </div>
  );
}

export default App;