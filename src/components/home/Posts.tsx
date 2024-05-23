import { TPosts } from "@customTypes/Posts.ts";
import PostCard from "./PostCard";

const Posts = () => {
  const posts: TPosts[] = [
    {
      id: 1,
      username: "Ahmed",
      avatar: "/post-1.jpg",
      likes: 451.5432,
      date: "20/11/2023",
      comments: [
        {
          id: 1,
          username: "Yaser",
          avatar: "/me.jpg",
          comment: "Wow I Like it",
          likes: 300,
          date: "20/11/2023",
        },
        {
          id: 2,
          username: "Khalid",
          avatar: "/me.jpg",
          comment: "Creative",
          likes: 300,
          date: "20/11/2023",
        },
        {
          id: 3,
          username: "Ahmed",
          avatar: "/me.jpg",
          comment: "Amazing",
          likes: 300,
          date: "20/11/2023",
        },
      ],
    },
    {
      id: 2,
      username: "Ahmed",
      avatar: "/cat.jpg",
      likes: 451.5432,
      date: "20/11/2023",
      comments: [
        {
          id: 1,
          username: "Yaser",
          avatar: "/me.jpg",
          comment: "Wow I Like it",
          likes: 300,
          date: "20/11/2023",
        },
      ],
    },
    {
      id: 3,
      username: "Ahmed",
      avatar: "/car.jpg",
      likes: 451.5432,
      date: "20/11/2023",
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
