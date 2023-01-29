import FilterButton from "./Buttons";

function App() {
  return (
    <div className="app">
      <h1 className="app__label">Search</h1>
      <div className="input__block">
        <input
          type='text'
          placeholder="Search product"
        />
        <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_5203_6475)">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="#808089"/>
          </g>
          <defs>
          <clipPath id="clip0_5203_6475">
          <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
          </clipPath>
          </defs>
        </svg>
        <svg className="close-search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.2929C5.31658 3.90237 4.68342 3.90237 4.29289 4.2929C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929Z" fill="#808089"/>
        </svg>
      </div>
      <div className="filter__block">
        <button className="filter__button filter-mode filtered">
          <svg className="filter-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5205_217734)">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.66675 2.49984C1.66675 2.0396 2.03984 1.6665 2.50008 1.6665H17.5001C17.9603 1.6665 18.3334 2.0396 18.3334 2.49984V4.65466C18.3334 5.09669 18.1578 5.52061 17.8453 5.83317L12.5001 11.1783V15.8332C12.5001 16.1488 12.3217 16.4374 12.0394 16.5785L8.70609 18.2452C8.44777 18.3744 8.14099 18.3606 7.89531 18.2087C7.64963 18.0569 7.50008 17.7887 7.50008 17.4998V11.1783L2.1549 5.83317C1.84234 5.52061 1.66675 5.09669 1.66675 4.65466V2.49984ZM3.33341 3.33317V4.65466L8.92267 10.2439C9.07895 10.4002 9.16675 10.6122 9.16675 10.8332V16.1515L10.8334 15.3181V10.8332C10.8334 10.6122 10.9212 10.4002 11.0775 10.2439L16.6667 4.65466V3.33317H3.33341Z"/>
            </g>
            <defs>
            <clipPath id="clip0_5205_217734">
            <rect width="16.6667" height="16.6667" fill="white" transform="translate(1.66675 1.6665)"/>
            </clipPath>
            </defs>
          </svg>
          <span>Filter</span>
        </button>
        <button className="filter__button sorting-mode">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5205_217744)">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.24416 1.91058C5.5696 1.58514 6.09723 1.58514 6.42267 1.91058L9.756 5.24392C10.0814 5.56935 10.0814 6.09699 9.756 6.42243C9.43057 6.74786 8.90293 6.74786 8.57749 6.42243L6.66675 4.51168V15.8332C6.66675 16.2934 6.29365 16.6665 5.83342 16.6665C5.37318 16.6665 5.00008 16.2934 5.00008 15.8332V4.51168L3.08934 6.42243C2.7639 6.74786 2.23626 6.74786 1.91083 6.42243C1.58539 6.09699 1.58539 5.56935 1.91083 5.24392L5.24416 1.91058ZM14.1667 3.33317C14.627 3.33317 15.0001 3.70627 15.0001 4.1665L15.0001 15.488L16.9108 13.5772C17.2363 13.2518 17.7639 13.2518 18.0893 13.5772C18.4148 13.9027 18.4148 14.4303 18.0893 14.7558L14.756 18.0891C14.5997 18.2454 14.3878 18.3332 14.1667 18.3332C13.9457 18.3332 13.7338 18.2454 13.5775 18.0891L10.2442 14.7558C9.91872 14.4303 9.91872 13.9027 10.2442 13.5772C10.5696 13.2518 11.0972 13.2518 11.4227 13.5772L13.3334 15.488L13.3334 4.1665C13.3334 3.70627 13.7065 3.33317 14.1667 3.33317Z" fill="#1A94FF"/>
            </g>
            <defs>
              <clipPath id="clip0_5205_217744">
                <rect width="16.6667" height="16.6667" fill="white" transform="translate(1.66675 1.6665)"/>
              </clipPath>
            </defs>
          </svg>
          <span>Popular</span>
        </button>
      </div>
      <div className="filtered-otions">
        
      </div>
    </div>
  );
}

export default App;
