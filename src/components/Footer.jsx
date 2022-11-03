import zuriLogo from "../assets/img/zuri-intern.svg";
import i4g from "../assets/img/I4G.svg";
import slack from "../assets/img/slack.svg";
import github from "../assets/img/github.svg";

function Footer() {
  return (
    <footer>
      <div className="slack-git">
        <img src={slack} alt="slack logo" height="25px" />
        <a href="https://github.com/Avu0s">
          <img src={github} alt=" github logo" height="25px" />
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
