import { TPosts } from "@customTypes/Posts.ts";

const PostCard = ({ id, username, avatar, likes }: TPosts) => {
  return (
    <>
      <div className="w-full max-w-[500px] outline outline-1 h-[600px]"></div>
    </>
  );
};

export default PostCard;
