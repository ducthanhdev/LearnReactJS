import "./App.css";
import { YoutubeData } from "./YoutubeData";

function Youtube(props) {
  return (
    <div className="youtube-list">
      <div className="youtube">
        <div className="youtube-image">
          <img src={props.img} alt=""></img>
        </div>
        <div className="youtube-metadescription">
          <div className="youtube-avatar">
            <img src={props.img} alt="" />
          </div>
          <div className="youtube-info">
            <div className="youtube-title">{props.title}</div>
            <div className="youtube-author">{props.author}</div>
          </div>
        </div>
      </div>
      <div className="youtube">
        <div className="youtube-image">
          <img src={props.img} alt=""></img>
        </div>
        <div className="youtube-metadescription">
          <div className="youtube-avatar">
            <img
              src="https://media.istockphoto.com/id/1277767891/vi/anh/nhi%E1%BB%81u-qu%E1%BA%A3-b%C3%AD-ng%C3%B4-ch%C3%ADn-t%C6%B0%C6%A1i-l%C3%A0m-n%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=HD3_iu7ssz4hJyeAafAYevHIfUXxSmXF_zGY5uxtIVA="
              alt=""
            />
          </div>
          <div className="youtube-info">
            <div className="youtube-title">Hoc ReacJs voi Thanh IT</div>
            <div className="youtube-author">DucThanhDev Hello</div>
          </div>
        </div>
      </div>
      <div className="youtube">
        <div className="youtube-image">
          <img
            src="https://media.istockphoto.com/id/1277767891/vi/anh/nhi%E1%BB%81u-qu%E1%BA%A3-b%C3%AD-ng%C3%B4-ch%C3%ADn-t%C6%B0%C6%A1i-l%C3%A0m-n%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=HD3_iu7ssz4hJyeAafAYevHIfUXxSmXF_zGY5uxtIVA="
            alt=""
          ></img>
        </div>
        <div className="youtube-metadescription">
          <div className="youtube-avatar">
            <img
              src="https://media.istockphoto.com/id/1277767891/vi/anh/nhi%E1%BB%81u-qu%E1%BA%A3-b%C3%AD-ng%C3%B4-ch%C3%ADn-t%C6%B0%C6%A1i-l%C3%A0m-n%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=HD3_iu7ssz4hJyeAafAYevHIfUXxSmXF_zGY5uxtIVA="
              alt=""
            />
          </div>
          <div className="youtube-info">
            <div className="youtube-title">Hoc ReacJs voi Thanh IT</div>
            <div className="youtube-author">DucThanhDev Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App">
        {YoutubeData.map((item, index) => (
          <Youtube
            key={item.id}
            img={item.image}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
