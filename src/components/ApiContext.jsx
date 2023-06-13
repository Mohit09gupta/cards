import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export let Cardcontext = createContext()
function Context({children}) {
  let [count,setCount] = useState(3)
    let [cards,setCards] = useState([
      {
        Word:'Oha yō gozaimasu (おはようございます)',
        Meaning:"Good morning",
        image:"https://e0.pxfuel.com/wallpapers/867/40/desktop-wallpaper-good-morning-japanese-scenery-morning-scenery.jpg",
        id:1
      },
      {
        Word:'Sumimasen (すみません)',
        Meaning:"I'm sorry",
        image:"https://gifdb.com/images/high/sorry-cute-bow-zf6lzgw5xzoji3w5.gif",
        id:2
      },  
      {
        Word:'O-yasumi nasai (おやすみなさい)',
        Meaning:"Good night",
        image:"https://i.scdn.co/image/ab67616d0000b2739eabb6a849e79ba8800bdcc1",
        id:3
      }
    ])
    let addcards = (data)=>{
      setCount(3+data.length)
      setCards([...cards,...data])
    }
    let updatecards = (data)=>{
      cards.splice(cards.findIndex((ele)=>ele.id === data.id),1,data)
      setCards([...cards])  
    }
    let postcard = (data)=>{
      data.id = cards.length +1
      setCount(cards.length +1)
      setCards([...cards,data])
    }
  return (
    <Cardcontext.Provider value={{cards,addcards,updatecards,postcard,count}}>
        {children}
    </Cardcontext.Provider>
  )
}

export default Context