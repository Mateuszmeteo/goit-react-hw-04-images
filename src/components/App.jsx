import { useState, useEffect } from "react"
import axios from "axios"
import css from './app.module.css'

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";


const API_KEY = "36240096-2eba6952fadc15ce6318a051b";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;


export const App = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetchImages()
  }, )

  const handleSubmit = (searchQuery) => {
    setSearchQuery(searchQuery)
    setPage(1)
    setImages([])
    fetchImages()
    setError(error)
  }

  const fetchImages = async () => {
    setLoading(true)

    try {
      const URL = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${PER_PAGE}`;
      const response = await axios.get(URL)
      const newImages = response.data.hits.map((image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeformatURL: image.largeformatURL
      }))
      setImages((prevImages) => [...prevImages, ...newImages])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
    setShowModal(false)
  }
  



    return (
      <div className={css.app}>
        <Searchbar onSubmit={handleSubmit} />
        {loading && <Loader />}
        <ImageGallery 
          images={images}
          onImageClick={handleImageClick}        
        />
        {images.length > 0 && !loading && (
          <Button onClick={fetchImages}>Load More</Button>
        )}
        {showModal && (
          <Modal onClose={handleCloseModal} selectedImage={selectedImage}>
            {selectedImage && <img src={selectedImage.largeformatURL} alt={selectedImage.id} />}
          </Modal>
        )}
      </div>
    );
  }



