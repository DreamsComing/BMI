import React,{useState, useEffect} from 'react'
import './colors.css'

function Colors({setColor}) {
    const [blue, setBlue] = useState(false)
    const [pink, setPink] = useState(false)
    const [white, setWhite] = useState(false)

    const [menu, setMenu] = useState(false)
    const [colors, setColors] = useState(false)

const openMenu = () => {
    setMenu(!menu)
    setColors(false)
}
const openColors = () => {
    setColors(!colors)
}

useEffect(() => {
    if(blue) {
        setColor({
            background: 'blue'
        })
    } else if(pink) {
        setColor({
            background: 'pink'
        })
    } else if(white) {
        setColor({
            background: 'white'
        })
    }
}, [blue, pink, white])
  return (
    <div className='colors'>
        <div className='startWindow'>
            <button className='menu' onClick={() => openMenu()}>
                <h1>Menu</h1>
            </button>
            <div className={`options ${menu ? 'active' : ''}`}>
            {/* colors */}
                <div>
                    <button onClick={() => openColors()}>Colors</button>
                </div>
            </div>

           
        </div>
        <div id="optionColors" className='chooseColor'>
            <div className={`${colors ? 'activeChooseColor' : ''}`}>
                 <button id='pink' className='color' onClick={() => {
                    setPink(true) 
                    setBlue(false)
                    setWhite(false)
                    }}/>
                 <button id='blue' className='color' onClick={() => {
                    setPink(false) 
                    setBlue(true)
                    setWhite(false)
                 }}/>
                 <button id='white' className='color' onClick={() => {
                    setPink(false) 
                    setBlue(false)
                    setWhite(true)
                 }}/>
            </div>
        </div>
    </div>
  )
}

export default Colors
