import "./App.css";
import GetRepo from "./getrepo";
import GetUserData from "./getuser.js";
import CreateRepo from "./createrepo.js"
import DeleteRepo from "./deleterepo.js"

function App() {
  return (
    <div className="App">
      <p></p>
    <h1>Github App</h1>
    <GetUserData/>

    <div id="options">
        <GetRepo />
        <CreateRepo />
        <DeleteRepo />
    </div>
    </div>
  );
}

export default App;
