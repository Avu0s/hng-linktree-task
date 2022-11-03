import zuriLogo from "../assets/img/zuri-intern.png";
import i4g from "../assets/img/ingressive.png";
import slack from "../assets/img/slack-icon.jpg";
import github from "../assets/img/github.png";

function Footer() {
  return (
    <footer>
      <div className="slack-git">
        <img src={slack} alt="slack logo" height="25px" />
        <a href="https://github.com/Avu0s">
          <img src={github} alt=" github logo" height="22px" />
        </a>
      </div>
      <hr />
      <div className="company">
        <img src={zuriLogo} alt="zuri-icon" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="I4G" />
      </div>
    </footer>
  );
}
export default Footer;
