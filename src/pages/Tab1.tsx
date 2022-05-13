import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Footer from '../components/Footer';
import NewsFeed from '../components/NewsFeed';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className='food-tab'>
      <IonContent fullscreen>
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
