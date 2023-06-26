


export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const searchQuery = e.target.elements.searchInput.value;
      onSubmit(searchQuery);
    };
  
    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
  
          <input
            id="searchInput"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  };
  




///===============///////===================////////==================================/////////////



// export class Searchbar extends Comment {
//     constructor (props) {
//         super()
//         this.state = {
//             searchQuerry: '',
//         }
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const { searchQuerry } = this.state
//         this.props.onSubmit(searchQuerry)
//     }

//     handleChange = (e) => {
//         this.setState({
//             searchQuerry: e.target.value
//         })
//     }

//     render() {
//         const { searchQuerry } = this.state

//         return(
//         <header class="searchbar">
//             <form class="form" onSubmit={handleSubmit}>
//                 <button type="submit" class="button">
//                     <span class="button-label">Search</span>
//                 </button>

//                 <input
//                     id="inputSearch"
//                     class="input"
//                     type="text"
//                     autocomplete="off"
//                     autofocus
//                     placeholder="Search images and photos"
//                     value={searchQuerry}
//                     onChange={handleSubmit}
//                 />
//             </form>
//         </header>
//         )
//     } 
// }







/////================================///////////////=========================//////////


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const inputEl = e.target.querySelector('#inputSearch').value
    //     const inputEl = e.target.elements.inputSearch.value;
    //     onSubmit(inputEl)
    // }
