import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Just now</span>
      </div>
      <div className="messagecontent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/324672/pexels-photo-324672.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      </div>
    </div>
  )
}

export default Message;
