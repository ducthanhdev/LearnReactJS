import "./App.css";
import Toggle from "./component/state/Toogle";
import YoutubeList from "./component/Youtube/YoutubeList";

function App() {
  const name = "DucThanhDev"
  return (
    <div className="App">
      {/* <YoutubeList>
        {
          /*Children : html, component, text, variable*/
          // <h2>Lorem iosdahfjiosdhosdihfiosdhfdiosfisdofi</h2> // <---Html
          //{name}  // <-- avarible
        }
        {/* </YoutubeList> */} 

        <Toggle></Toggle>
    </div>
  );
}

export default App;
