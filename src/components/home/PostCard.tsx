import { TPosts } from "@customTypes/Posts.ts";

const PostCard = ({ id, username, avatar, likes, date }: TPosts) => {
  console.log(likes);

  return (
    <>
      <div key={id} className="relative w-full max-w-[600px] h-[700px]">
        <img
          className="h-full w-full object-cover bg-[#111]"
          src={avatar}
          alt="Error"
          loading="lazy"
        />

        <div className="container absolute top-0 bottom-0 flex flex-col justify-between w-full">
          <div className="flex justify-between items-center py-2">
            <button className="flex items-center justify-center text-sm h-7 w-16 text-white outline outline-1 rounded-md focus:opacity-80 hover:opacity-80">
              <p>Follow</p>
            </button>
            <div className="flex items-center flex-row-reverse gap-2 text-white">
              <img
                className="w-8 h-8 object-cover rounded-full shadow-sm"
                src={avatar}
                alt="Error"
                loading="lazy"
              />
              <div className="flex items-end flex-col text-sm">
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
