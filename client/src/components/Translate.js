import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Translate = () => {
    const [translation, setTranslation] = useState("")
    const [characters, setCharacters] = useState(0)

    const [inputs, setInputs] = useState({
        text: "",
        toLanguage: "English"
    })

    const createQuery = () => {
        return `Translate in ${inputs.toLanguage} this text: "${inputs.text}"`
    }

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setCharacters(e.target.value.length)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = createQuery();
        console.log(query)
        try {
        const res = await axios.post('http://localhost:3001/translate', { query })
        setTranslation(res.data)
        } catch (err) {
        console.log(err)
        alert("Unable to translate, retry later")
        }
    };


  return (
    <div className="content">
      <div className="navbar navbar-translator">
        <div className="logo translator-logo">
          <span className="logo-text">SmartLingo</span>
          <span className='slogan'>AI powered translator</span>
        </div>

        <nav>
          <ul>
            <li><a href= "mailto:">Contact us</a></li>
          </ul>
        </nav>
       </div>
      <div className="translation-box">
        <div className="input">
          <textarea cols="30" rows="10" placeholder="Type here" name="text" onChange={handleChange}></textarea>
          <div className="characters">
            <span style={ characters > 1000 ? {color: "coral"} : {}}>{characters} </span><span>/ 1.000</span>
          </div>
        </div>
        
        <div className="center-line"></div>
        <div className="enter" onClick={handleSubmit}><i className="fa-solid fa-arrow-right"></i></div>
        <div className="enter-background"></div>

        <div className="output">
          <div className="form">
            <select onChange={handleChange} name="toLanguage" >
              <option value="English" >English</option>
              <option value="Italian" >Italian</option>
              <option value="french" >French</option>
              <option value="Spanish" >Spanish</option>
              <option value="Dutch" >Dutch</option>
              <option value="Portuguese" >Portuguese</option>
            </select>
          </div>
          <span class="output-text">{translation}</span>
        </div>
      </div>
    </div>
  )
}

export default Translate
