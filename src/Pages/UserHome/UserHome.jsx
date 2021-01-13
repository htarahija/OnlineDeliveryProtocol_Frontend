import React, { useState, useEffect } from 'react';

 function getItems() {
    return fetch('http://localhost:3000/getItems')
      .then(data => data.json())
  }

  function klikni(item) {
    console.log("Izabran je "+ JSON.stringify(item))
  }


const UserHome = () => {
    const [items,setItems] = useState([])
    const [selectedItem,setSelectedItem]=useState([])
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
       {items.map(item => <li key={item._id} onClick={e=>{klikni(item)}}>{item.name}</li>)}
     </ul>
   </div>
  )
}



export default UserHome;