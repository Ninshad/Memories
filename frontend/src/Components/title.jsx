import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Title = () => {
const [titleText, setTitleText] = useState(null)
axios.get('http://localhost:5000/posts') 
.then((res) => setTitleText(res.data.Name) )
console.log('Title:', titleText);   
  return (
    <div>
        <h1>{titleText}</h1>
    </div>
  )
}

export default Title