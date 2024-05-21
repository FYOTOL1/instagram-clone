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
          className={`relative h-14 min-w-14 transition-all cursor-pointer ${
            e.watched
              ? "outline outline-1 outline-gray-200 hover:outline-gray-500"
              : "[outline:3px_solid_red] hover:outline-red-300"
          } outline-offset-[3px] rounded-full`}
        >
          <img
            className="h-14 w-14 rounded-full object-fill"
            src={e.avatar}
            alt="Avatar"
          />
          <p className="text-xs text-center text-gray-500 mt-1">{e.username}</p>
        </Link>
      </>
    ));

  return (
    <>
      <div
        id="StoriesBar"
        className="flex items-center flex-row-reverse gap-5 py-2 overflow-x-scroll h-32"
      >
        <div className="relative h-16 min-w-16 overflow-hidden ms-1">
          <img
            className="h-16 w-16 rounded-full object-fill"
            src="/me.jpg"
            alt="Me"
          />
          <i className="fa-solid fa-plus absolute bottom-0 flex items-center justify-center text-xs outline outline-3 outline-white w-5 h-5 text-white bg-blue-500 rounded-full"></i>
        </div>
        {renderStories}
      </div>
    </>
  );
};

export default StoriesBar;
