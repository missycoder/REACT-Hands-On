function displayHeader() {
  return (<h1>Shout Component & Addition Component</h1>);
}

function sayHello() {
  return "MESSAGE FROM TOWN COUNCIL:"
}

function Shout(props) {
  return <div>
    {props.msg.toUpperCase()}
  </div>
}

function SumOfTwo(props) {
  return <div>
     {props.number1} + {props.number2} = {props.number1 + props.number2}
  </div>
}

// What is a component in React
// 1. Is a function
// 2. First alphabet of the function is upper case
// 3. Return JSX
//
// Functions can recieve parameters
// but the corresponding concept in
// React componenet is props
//
// the props parameter will contain all the 
// attributes assigned to the component instance
function Alert(props) {
  console.log(props.msg);
  return <div style={{
    backgroundColor:props.bgcolor,
    padding:"10px",
    marginTop:"5px",
    marginBottom:"5px",
    color:"black"
  }}>
    {props.msg}
  </div>
}

function App() {
  return (
    <>
    <h1>2.2 & 2.3</h1>
    {displayHeader()}
    {sayHello()}
    <Alert msg="Please reduce your noise after 10pm" bgcolor="salmon"/>
    <Alert msg="Thank you for your cooperation." bgcolor="pink"/>
    <Shout msg="hello world"/>
    <SumOfTwo number1={7} number2={3}/>
    </>
  );
}

export default App;
