import "./App.css";
import Youtube from "./Component/Youtube";
import { YoutubeData } from "./data/YoutubeData";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Youtube img="https://media.istockphoto.com/id/1277767891/vi/anh/nhi%E1%BB%81u-qu%E1%BA%A3-b%C3%AD-ng%C3%B4-ch%C3%ADn-t%C6%B0%C6%A1i-l%C3%A0m-n%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=HD3_iu7ssz4hJyeAafAYevHIfUXxSmXF_zGY5uxtIVA=" title="Hoc ReacJs voi Thanh IT" author = "DucThanhDev" ></Youtube>
      </div>
    </div>
  );
}

export default App;
