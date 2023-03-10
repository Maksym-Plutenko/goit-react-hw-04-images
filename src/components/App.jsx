import React, { Component } from 'react';

import { apiHandler } from '../utilites/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    request: '',
    page: 1,
    isLoading: false,
    modalMode: false,
    modalPicture: '',
  };

  findPictures = async request => {
    const requestTrimmed = request.trim();
    if (requestTrimmed) {
      this.setState({
        request: requestTrimmed,
        page: 1,
        isLoading: true,
      });
      const response = await apiHandler.findPictures(requestTrimmed, 1);
      this.setState({
        pictures: response.data.hits,
        isLoading: false,
      });
    }
  };

  morePictures = async () => {
    this.setState({
      isLoading: true,
    });
    const newPage = this.state.page + 1;
    const response = await apiHandler.findPictures(this.state.request, newPage);
    const newPictures = [...this.state.pictures, ...response.data.hits];
    this.setState({
      pictures: newPictures,
      page: newPage,
      isLoading: false,
    });
  };

  modalOn = picture => {
    this.setState({
      modalMode: true,
      modalPicture: picture,
    });
  };

  modalOff = () => {
    this.setState({
      modalMode: false,
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingBottom: 24,
        }}
      >
        <Searchbar onSubmit={this.findPictures} />
        <ImageGallery pictures={this.state.pictures} onClick={this.modalOn} />
        {this.state.isLoading && <Loader />}

        {this.state.pictures.length > 0 && (
          <Button onClick={this.morePictures} />
        )}

        {this.state.modalMode && (
          <Modal picture={this.state.modalPicture} close={this.modalOff} />
        )}
      </div>
    );
  }
}

export { App };
