function displayHeader() {
  return (<h1>About Me</h1>);
}

function sayHello() {
  return "Hello Everybody"
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
    color:"white"
  }}>
    {props.msg}
  </div>
}

function App() {
  return (
    <>
    <h1>Hello World</h1>
    {displayHeader()}
    {sayHello()}
    <Alert msg="Be careful of wet floor" bgcolor="green"/>
    <Alert msg="Be careful of wild monkeys" bgcolor="purple"/>
    </>
  );
}

export default App;
