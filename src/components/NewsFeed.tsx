import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './NewsFeed.css';

const NewsFeed = () => {
    const randomPicApi = "https://picsum.photos/400/300?random=1";
    const dummyPic = 'https://www.vega.com/-/media/images/noimage-available.png?'
    //<img alt='something random' src={randomPicApi} />
    return (
        <IonCard>
            <div className='tag-border'>Mat og Drikke</div>
            <img alt='something random' src={dummyPic} />
            <IonCardHeader color='dark'>
                <IonCardTitle>Lorem ipsum dolor</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </IonCardContent>
        </IonCard>
    );
}

export default NewsFeed;