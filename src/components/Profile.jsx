import avatar from "../assets/img/Whiteface.gif";
import share from "../assets/img/share.svg";
import options from "../assets/img/mobileShare.png";

function Profile() {
  return (
    <div className="profile">
      <img src={share} alt="share button" className="share" id="share"/>
      <img
        src={options}
        alt="options button"
        className="share"
        id="options"
        height="30px" 
      />

      <img src={avatar} alt="avatar" height="85px" id="profile__img" />
      <h1>Avos</h1>
      <p id="slack">Avos</p>
    </div>
  );
}
export default Profile;
