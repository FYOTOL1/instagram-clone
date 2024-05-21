import StoriesBar from "./StoriesBar";
import Header from "./Header";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <StoriesBar />
      <Posts />
    </div>
  );
};

export default Home;
