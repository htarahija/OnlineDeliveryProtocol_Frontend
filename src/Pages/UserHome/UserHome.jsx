import React, { useState, useEffect } from 'react';

 function getItems() {
    return fetch('http://localhost:3000/getItems')
      .then(data => data.json())
  }


const UserHome = () => {
    const [items,setItems] = useState([])
    useEffect(() => {
        let mounted = true;
        getItems()
          .then(items => {
            if(mounted) {
                setItems(items)
            }
          })
        return () => mounted = false;
      }, [])

 return(
    <div className="wrapper">
     <h1>My Items List</h1>
     <ul>
       {items.map(item => <li key={item.name}>{item.name}</li>)}
     </ul>
   </div>
  )
}

export default UserHome;