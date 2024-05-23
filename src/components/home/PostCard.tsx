import { TPosts } from "@customTypes/Posts.ts";

const PostCard = ({ id, username, avatar, likes, date }: TPosts) => {
  return (
    <>
      <div
        key={id}
        className="relative w-full max-w-[600px] outline outline-1 h-[700px]"
      >
        <img
          className="h-full w-full object-scale-down bg-[#111]"
          src={avatar}
          alt="Error"
        />

        <div className="container absolute top-0 bottom-0 flex flex-col justify-between w-full">
          <div className="flex justify-between items-center py-2">
            <p>{likes}</p>
            <div className="flex items-center flex-row-reverse gap-2 text-white">
              <img className="w-8 h-8 rounded-full" src={avatar} alt="Error" />
              <div className="text-sm text-right">
                <p>{username}</p>
                <p className="text-xs">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
