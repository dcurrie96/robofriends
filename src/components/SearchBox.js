import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
    <input
    className='bg--green pa3 b--blue'
    type='search'
    placeholder='search robots'
    onChange={searchChange}
    />
    </div>
  );
}

export default SearchBox;
