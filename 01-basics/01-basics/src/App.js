// When importing your own files in the `src` folder
// Make sure you put `./` in front

import sushi from "./sushi.jpg"
import "./style.css"

function App() {
  return (
    <>
      <img src={require('./sushi.jpg')} alt="sushi"/>
      <img src={sushi} />

      <h1>Hello World</h1>
      {1 + 1}
      <p>
        {Math.random() * 100 + 1}
      </p>
      <h2 style={{
        'backgroundColor':'green', 
        'fontSize':'64px'
      }}>I love Salmon Sushi</h2>
      <ul>
        <li>Salmon Sushi Roll</li>
        <li>Salmon Sashimi</li>
      </ul>
    </>
  );
}

export default App;