const Header = () => {
  return (
    <>
      <div className="container flex items-center justify-between flex-row-reverse py-2">
        <h1 className="text-2xl font-[cursive]">Instagram</h1>
        <div className="flex items-center gap-4 text-xl">
          <i className="fa-brands fa-facebook-messenger"></i>
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
