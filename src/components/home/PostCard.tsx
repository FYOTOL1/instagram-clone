import { IPosts } from "@types/Posts";

const PostCard = ({ id, username, avatar, likes }: IPosts) => {
  return (
    <>
      <div className="w-full max-w-[500px] outline outline-1 h-[600px]"></div>
    </>
  );
};

export default PostCard;
