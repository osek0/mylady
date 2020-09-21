import React from 'react';
import { getFeed, getUrl } from './API/facebook';

class Galery extends React.Component {

  state = {
    photos: []
  }

  handleClick = async () => {
    const feed = await getFeed();
    const photos = feed.map(async (post) => await getUrl(post.id));
    
    await Promise.all(photos)
    .then(urls => {
      this.setState({photos: urls});
    });
    
    console.log(this.state.photos);
  }

  loadPhotos = () => {
    return this.state.photos.map( photo => <img src={photo} /> );
  }

  render() {
    return (
      <div>
        <p>Galery</p>
        <button onClick={this.handleClick}> Click me! </button>
        {this.loadPhotos()}
      </div>
    );
  }
}

export default Galery;