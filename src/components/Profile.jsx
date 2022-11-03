import avatar from '../assets/img/Whiteface.gif'
import share from '../assets/img/shareBtn.png'
import mShare from '../assets/img/mobileShare.png'

function Profile(){
    return(
        <div className='profile'>
            <img src={share} alt="share button" className='share'/>
        <img src={mShare} alt="mobile share button" className='share' id='mshare' />
             
       <img src={avatar} alt="avatar" height='85px' id='profile__img'/>
       <h1>Avos</h1>
       <p id='slack'>Avos</p>
        </div>
    )
}
export default Profile