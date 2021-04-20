import React from 'react';
import { getPostsData } from './API/instagram';
import { PhotoCard } from './PhotoCard';
import './styles/Galery.css';

class Galery extends React.Component {

  state = {
    photos: []
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