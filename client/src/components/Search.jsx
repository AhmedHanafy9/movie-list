import React from 'react';
const {useState} = React;

const Search = ({handleSearchMovie}) => {
  const [searchEntry, setSearchEntry] = useState('');
  return (
    <form className="search-form" onSubmit={(event) => {
      handleSearchMovie(searchEntry);
    }}>
      <input type="text" placeholder="Search.."
        value={searchEntry}
        onChange={(event) => setSearchEntry(event.target.value)}/>
      <button type="submit">Go!</button>
    </form>
  );
};


export default Search;
