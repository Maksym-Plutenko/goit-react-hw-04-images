import React, { useState } from 'react';

import { apiHandler } from '../utilites/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

const App = () => {
  // state = {
  //   pictures: [],
  //   request: '',
  //   page: 1,
  //   isLoading: false,
  //   modalMode: false,
  //   modalPicture: '',
  // };

  const [pictures, setPictures] = useState([]);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMode, setModalMode] = useState(false);
  const [modalPicture, setModalPicture] = useState('');



  const findPictures = async request => {
    const requestTrimmed = request.trim();
    if (requestTrimmed) {
      // this.setState({
      //   request: requestTrimmed,
      //   page: 1,
      //   isLoading: true,
      // });
      setRequest(requestTrimmed);
      setPage(1);
      setIsLoading(true);
      const response = await apiHandler.findPictures(requestTrimmed, 1);
      // this.setState({
      //   pictures: response.data.hits,
      //   isLoading: false,
      // });
      setPictures(response.data.hits);
      setIsLoading(false);
    }
  };

  const morePictures = async () => {
    // this.setState({
    //   isLoading: true,
    // });
    setIsLoading(true);
    const newPage = page + 1;
    const response = await apiHandler.findPictures(request, newPage);
    const newPictures = [...pictures, ...response.data.hits];
    // this.setState({
    //   pictures: newPictures,
    //   page: newPage,
    //   isLoading: false,
    // });
    setPictures(newPictures);
    setPage(newPage);
    setIsLoading(false);
  };

 const modalOn = picture => {
    // this.setState({
    //   modalMode: true,
    //   modalPicture: picture,
    // });
    setModalMode(true);
    setModalPicture(picture);
  };

  const modalOff = () => {
    // this.setState({
    //   modalMode: false,
    // });
    setModalMode(false);
  };

  // render() {
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
        <Searchbar onSubmit={findPictures} />
        <ImageGallery pictures={pictures} onClick={modalOn} />
        {isLoading && <Loader />}

        {pictures.length > 0 && (
          <Button onClick={morePictures} />
        )}

        {modalMode && (
          <Modal picture={modalPicture} close={modalOff} />
        )}
      </div>
    );
  // }
}

export { App };
