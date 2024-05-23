import StoriesBar from "./StoriesBar";
import Header from "./Header";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <Header />
      <StoriesBar />
      <hr className="mt-2" />
      <Posts />
    </>
  );
};

export default Home;
