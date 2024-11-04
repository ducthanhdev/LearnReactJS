import { YoutubeData } from "../../data/YoutubeData";
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.slice()
        .reverse()
        .map((item) => (
          <YoutubeItem
            key={item.id}
            img={
              item.image ||
              "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
            }
            title={item.title}
            author={item.author}
          />
        ))}
    </div>
  );
}

export default YoutubeList;
