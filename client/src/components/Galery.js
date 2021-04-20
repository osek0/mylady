import React from 'react';
import { getPostsData } from './API/instagram';
import { PhotoCard } from './PhotoCard';
import './styles/Galery.css';

class Galery extends React.Component {

  state = {
    photos: [
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120440659_181337626833103_2100077222813139652_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=oI1O-aRo_qcAX--4PvQ&_nc_ht=scontent-waw1-1.xx&tp=7&oh=323eca02ecf191f266d22881aa2a7390&oe=5F98F6E0',
        description: '💙Welurowa sukienka💙 Rozmiar uniwersalny Polski producent Bardzo dobra jakość'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120449494_181337333499799_3930413715336319229_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=NnGxzY8BGKwAX8zSKbh&_nc_ht=scontent-waw1-1.xx&tp=7&oh=dd10203e21933b948d77a728ec30dbdf&oe=5F9963C0',
        description: '▪️◾▪️Kurtka Neli▪️◾▪️ Polski producent Rozmiary 36,38,40,42,44,46'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120439990_181337046833161_4723923571435749348_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=4bMFXrF9VkMAX9GRTaB&_nc_ht=scontent-waw1-1.xx&tp=7&oh=26fb2f774f25ed4234a307b803a68544&oe=5F98AD68',
        description: '🖤◾🖤Kurtka Cocomore 🖤◾🖤 Rozmiar 36,38,40 Bardzo dobra jakość'
      }
    ]
  }

  setPostsData = async () => {
    const data = await getPostsData();

    this.setState({photos: data});
  }

  loadPhotos = () => {
    return this.state.photos.map( photo => {
      return <PhotoCard postID={photo.postID} url={photo.url} description={photo.description} />;
    });
  }

  componentDidMount() {
    this.setPostsData();
  }

  render() {
    return (
      <div>
        <p>Galery</p>
        <button onClick={this.handleClick}> Click me! </button>
        <div className="photos">
          {this.loadPhotos()}
        </div>
      </div>
    );
  }
}

export default Galery;