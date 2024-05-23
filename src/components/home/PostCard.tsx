import { TPosts } from "@customTypes/Posts.ts";

const PostCard = ({ id, username, avatar, likes, date, comments }: TPosts) => {
  console.log(likes);

  const renderTopComments = comments.slice(0, 3).map((e) => (
    <>
      <div className="flex justify-between flex-row-reverse text-xs">
        <div className="flex justify-end gap-1">
          <p className="text-gray-800">{e.comment.slice(0, 60)}</p>
          <p className="font-semibold">{e.username}</p>
        </div>
        <i className="fa-regular fa-heart"></i>
      </div>
    </>
  ));

  return (
    <>
      <div key={id} className="relative w-full max-w-[600px]">
        <img
          className="w-full object-cover bg-[#111] h-[700px]"
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

        <div className="container">
          <div className="flex items-center justify-between flex-row-reverse h-10 text-2xl">
            <div className="flex items-center flex-row-reverse gap-3">
              <i className="fa-regular fa-heart text-gray-800"></i>
              <i className="fa-regular fa-comment text-gray-800"></i>
              <i className="fa-regular fa-paper-plane text-gray-800"></i>
            </div>
            <i className="fa-regular fa-bookmark text-gray-800"></i>
          </div>

          <p className="text-sm text-end text-gray-700 mt-1">Likes {likes}</p>
          <div className="flex flex-col gap-2 mt-3">{renderTopComments}</div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
