import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <>
      <header className="  flex justify-between items-center p-4 border-b-2  bg-gradient-to-r from-red-100 via-yellow-200 to-green-100 sticky top-0  ">
        <h1>Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </header>
    </>
  );
};

export default Header;
