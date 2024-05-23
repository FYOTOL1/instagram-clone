import { TPosts } from "@customTypes/Posts.ts";
import PostCard from "./PostCard";

const Posts = () => {
  const posts: TPosts[] = [
    {
      id: 1,
      username: "Ahmed",
      avatar: "/post-1.jpg",
      likes: 451.5432,
      date: new Date().toLocaleString(),
      comments: [
        {
          id: 1,
          username: "Yaser",
          avatar: "/me.jpg",
          comment: "Wow I Like it",
          likes: 300,
          date: new Date().toLocaleString(),
        },
      ],
    },
    {
      id: 2,
      username: "Ahmed",
      avatar: "/cat.jpg",
      likes: 451.5432,
      date: new Date().toLocaleString(),
      comments: [
        {
          id: 1,
          username: "Yaser",
          avatar: "/me.jpg",
          comment: "Wow I Like it",
          likes: 300,
          date: new Date().toLocaleString(),
        },
      ],
    },
    {
      id: 3,
      username: "Ahmed",
      avatar: "/me.jpg",
      likes: 451.5432,
      date: new Date().toLocaleDateString(),
      comments: [
        {
          id: 1,
          username: "Yaser",
          avatar: "/me.jpg",
          comment: "Wow I Like it",
          likes: 300,
          date: new Date().toLocaleDateString(),
        },
      ],
    },
  ];

  const renderPosts = posts.map((e) => <PostCard {...e} />);

  return (
    <>
      <div className="flex items-center flex-col gap-6 w-full mt-5">
        {renderPosts}
      </div>
    </>
  );
};

export default Posts;
