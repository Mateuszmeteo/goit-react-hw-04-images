import { Component } from "react";
import axios from "axios"
import css from './app.module.css'

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

const API_KEY = "36240096-2eba6952fadc15ce6318a051b";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;


export class App extends Component {

  state = {
    searchQuery: "",
    images: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    selectedImage: null,
  };

  componentDidMount() {
    this.fetchImages()
  }

  // handleSubmit = (searchQuery) => {
  //   this.setState({ searchQuery, page: 1, images: [] }, this.fetchImages);
  // };

  handleSubmit = (searchQuery) => {
    this.setState({ searchQuery, page: 1, images: [] }, () => {
      this.fetchImages();
    });
  };

  fetchImages = async () => {
    const {searchQuery, page} = this.state

    const URL = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${PER_PAGE}`;

    this.setState({loading: true})

    try {
      const response = await axios.get(URL)
      const newImages = response.data.hits.map((image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeformatURL: image.largeformatURL
      }))
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
      }))
    } catch (error) {
      this.setState({error})
    } finally {
      this.setState({ loading: false})
    }
  }

  handleImageClick = (image) => {
    this.setState({ selectedImage: image, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null, showModal: false });
  };


  render() {
    const { images, loading, showModal, selectedImage } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery 
          images={images}
          onImageClick={this.handleImageClick}        
        />
        {images.length > 0 && !loading && (
          <Button onClick={this.fetchImages}>Load More</Button>
        )}
        {showModal && (
          <Modal onClose={this.handleCloseModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.id} />
          </Modal>
        )}
      </div>
    );
  }


}


///======================///////////============================//
       // {/* <ImageGallery>
         // {images.map((image) => (
         //   <ImageGalleryItem
          //    key={image.id}
          //    image={image}
          //    onClick={this.handleImageClick}
         //   />
        //  ))}
      //  </ImageGallery> */}//








//=============================/////////////////////////=============================///////////////////////=======//

// export class App extends Component {
//   // handleSubmit = (value) => {
//   //   console.log(value)
//   // }

//   state = {
//     images: [],
//     isLoading: false,
//     error: null
//   }

//   // async componentDidMount() {
//   //   this.setState({ isLoading: true })

//   // }

//   componentDidMount() {
//     this.fetchImages()
//   }

//   fetchImages = async (searchQuerry) => {
//     const API_KEY = "36240096-2eba6952fadc15ce6318a051b";
//     const API_URL = `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//     this.setState({ isLoadnig: true})

//     try {
//       const response = await axios.get(API_URL)
//       this.setState({ images: response.data.hits, isLoading: false })
//     } catch (error) {
//       this.setState({ error })
//     } finally {
//       this.setState ({ isLoading: false})
//     }

//   }

//   render() {
//     const { images, isLoading, error } = this.state

//     return(
//       <div>
//         <Searchbar onSubmit={this.fetchImages} />
//       </div>
//     )
//   }
  
  
// }


///========================================/////=============////////

      // <div>
      //   <Searchbar onSubmit={this.fetchImages} />
      //   {loading && <Loader />}
      //   {error && <p>There was an error: {error}</p>}
      //   {images.length > 0 && <ImageGallery images={images} />}
      // </div>




///========================////
//===  pixabay ===///

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12


//  Your API key: 36240096-2eba6952fadc15ce6318a051b


///========////////============//////=============///////====////






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//       <Searchbar onSubmit />
//     </div>
//   );
// };
