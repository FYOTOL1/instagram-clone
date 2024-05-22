import { Link } from "react-router-dom";

interface IStories {
  id: number;
  username: string;
  avatar: string;
  watched: boolean;
}

const StoriesBar = () => {
  const stories: IStories[] = [
    { id: 1, username: "Ahmed", avatar: "/me.jpg", watched: false },
    { id: 2, username: "Ahmed", avatar: "/me.jpg", watched: true },
    { id: 3, username: "Ahmed", avatar: "/me.jpg", watched: false },
    { id: 4, username: "Ahmed", avatar: "/me.jpg", watched: true },
    { id: 1, username: "Ahmed", avatar: "/me.jpg", watched: false },
    { id: 2, username: "Ahmed", avatar: "/me.jpg", watched: true },
    { id: 3, username: "Ahmed", avatar: "/me.jpg", watched: false },
    { id: 4, username: "Ahmed", avatar: "/me.jpg", watched: true },
    { id: 1, username: "Ahmed", avatar: "/me.jpg", watched: false },
    { id: 2, username: "Ahmed", avatar: "/me.jpg", watched: true },
    { id: 3, username: "Ahmed", avatar: "/me.jpg", watched: false },
    { id: 4, username: "Ahmed", avatar: "/me.jpg", watched: true },
    { id: 4, username: "Ahmed", avatar: "/me.jpg", watched: true },
  ];

  const renderStories = stories
    .sort((a, b) => +a.watched - +b.watched)
    .map((e) => (
      <>
        <Link
          to={"/"}
          className={`relative flex flex-col items-center min-w-16 cursor-pointer rounded-full`}
        >
          <img
            className={`h-14 w-14 rounded-full object-fill transition-all outline-offset-[2px] ${
              e.watched
                ? "outline outline-1 outline-gray-200 hover:outline-gray-500"
                : "outline outline-3 outline-red-600 hover:outline-red-400"
            }`}
            src={e.avatar}
            alt="Avatar"
          />
          <p
            className={`absolute bottom-[-20px] text-xs text-center text-gray-500 mt-1 ${
              e.watched ? "text-gray-600" : "text-black"
            }`}
          >
            {e.username.slice(0, 20)}
          </p>
        </Link>
      </>
    ));

  return (
    <>
      <div
        id="StoriesBar"
        className="flex items-center flex-row-reverse gap-3 py-1 overflow-x-scroll"
      >
        <Link to={"/"} className="relative min-w-16 overflow-hidden ms-1">
          <img
            className="h-16 w-16 rounded-full object-fill"
            src="/me.jpg"
            alt="Me"
          />
          <i className="fa-solid fa-plus absolute bottom-0 flex items-center justify-center text-xs outline outline-3 outline-white w-5 h-5 text-white bg-blue-500 rounded-full"></i>
        </Link>
        {renderStories}
      </div>
    </>
  );
};

export default StoriesBar;
