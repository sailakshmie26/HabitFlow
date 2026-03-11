import habitFlowIcon from "../assets/habitFlowIcon.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-center">
        <h5 className="flex items-center justify-center gap-2">
          <img className="w-10 h-10 transform hover:scale-110 transition" 
          src={habitFlowIcon} alt="icon"/>
          HABIT FLOW
        </h5>
        <p>© 2026 HabitFlow. Made with ❤️ for habit builders by Sailakshmy</p>
      </footer>
    </>
  );
};

export default Footer;
