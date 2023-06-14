import React from 'react'
import './App.css';
export const Product = () => {
  return (
    <>
     <div className='bigbox'>
        <div className='firstboximg' >
            <img  className='pic' src="https://static.vecteezy.com/system/resources/previews/007/018/072/original/a-team-discussion-on-office-table-teamwork-character-illustration-business-character-illustration-on-white-background-vector.jpg" alt="upper-img"  height='140px' width='100%'/>
        </div>
        <div className='circle'></div>
        <span className='tr_text'>Traditiona Wedding 📌</span> <br/>
        <span className='star'>⭐⭐⭐⭐⭐</span> <br />
        <span className='Music_text'>Music Equipment</span>

        <div className='follower'>
                <div className='circle follower one'></div>
                <div className='circle follower two'></div>
                <div className='circle follower three'></div>
               
        </div>
        <p className='follower_count'>+79k Followers</p>

        <button>INVITE</button>
     </div>
     
    
    </>
  )
}
