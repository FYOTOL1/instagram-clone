const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 flex justify-center h-14 w-full bg-white z-50 border-t-2 border-gray-300 shadow-md">
        <div className="container flex items-center justify-between w-full h-full text-xl">
          <img className="w-7 h-7 rounded-full" src="/me.jpg" alt="Error" />
          <i className="fa-brands fa-facebook-messenger"></i>
          <i className="fa-solid fa-clapperboard"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-house"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
