import { SplashScreen } from '@awesome-cordova-plugins/splash-screen';
import { useEffect, useState } from 'react';
import splashImg from '../img/mvpSplash.png'
import './SplashScreen.css';

const Splash = () => {     
    var splashScreen = SplashScreen;
    splashScreen.show();
    const [showImg, setShowImg] = useState(true);

    return (
        <div>
            {showImg ?
            <img alt="new" onClick={()=> setShowImg(false)} src={splashImg}/>
            : <div className='kengleTxt'>Kengle</div> }
        </div>
    )
}

export default Splash;