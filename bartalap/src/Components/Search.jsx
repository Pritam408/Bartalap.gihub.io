import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text" placeholder='search' />
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
          <span>Pritam</span>
        </div>
      </div>
    </div>
  )
}

export default Search;
