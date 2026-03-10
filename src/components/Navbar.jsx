import habitFlowIcon from "../assets/habitFlowIcon.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <h1>
            <img src={habitFlowIcon} alt="icon" width="50px" />
            HABIT PLUS
          </h1>
        </div>
        <div>
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


