import React, { useState, useEffect } from 'react';
import Colors from './colors';
import './BMI.css';

function PersonBMI() {
    // adaptive layout
    const [wide, setWide] = useState(false);
    const [narrow, setNarrow] = useState(false);
    const [show, setShow] = useState(false); // I created this method becouse we should use by two things: 
                                             //1: We use it for hide and show text of "Result"
                                             //2: We use it for hide and show text("Just so you know average healthy BMI is between 18.5 and 24.9.") for a small screen 
                                            
    // color
    const [color, setColor] = useState({
        background: 'blue'
    })

    useEffect(() => {
        const layout = window.innerWidth;
        if (layout > 700) {
            setNarrow(false);
            setWide(true);
        } else {
            setWide(false);
            setNarrow(true);
        }
    }, []);

    const [BMI, setBMI] = useState('');
    const [average, setAverage] = useState('');
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const handleWeight = (e) => {
        setWeight(e.target.value);
    };
    
    const handleHeight = (e) => {
        setHeight(e.target.value);
    };

    const personBMI = () => {
        const squereHeight = height * height;
        const calculatBMI = weight / squereHeight;
        setShow(true) // When we click on button it's gonna show to us "Result" and hide text "Just so you know average healthy BMI is between 18.5 and 24.9."

        if (!isNaN(calculatBMI)) {
            setBMI(calculatBMI.toFixed(2));
            if (calculatBMI < 18.5 || calculatBMI > 24.9) {
                if (calculatBMI > 24.9) {
                    setAverage(`Your BMI is ${calculatBMI.toFixed(2)} which is overweight`);
                } else {
                    setAverage(`Your BMI is ${calculatBMI.toFixed(2)} which is low weight`);
                }
            } else {
                setAverage(`Your BMI is ${calculatBMI.toFixed(2)}, which is within the normal range.`);
            }
        } else if(isNaN(calculatBMI)) {
            setShow(false) // it's hide text "Result" and show to us "Just so you know average healthy BMI is between 18.5 and 24.9."
            setBMI('Please enter valid weight and height.');
            setAverage('');
        }
    };

    const clean = () => {              
        setShow(false)                 
        setWeight(0);                     
        setHeight(0);                  
        setBMI('');                    
        setAverage('');                
    };                   

    return (
        <div style={color} className='main'>
            <div className='window'>
                <h1>Do you want to find out your <span>BMI</span></h1>
                <div className='wrapper'>
                    {wide && <p name="knowlage">Just so you know average healthy BMI is between 18.5 and 24.9.</p>}
                    {narrow &&  <React.Fragment>
                                    {!show && <p>Just so you know average healthy BMI is between 18.5 and 24.9.</p>} 
                                    { show && <h3>Result</h3>}                                                                  
                                    <p>{average}</p>
                                    </React.Fragment>}                                    
                    <div className='info'>
                        <div className='vairieble'>
                            <div className='weightInput'>
                                <label className='weightLabel'>w<sup>(kg.)</sup></label>
                                <input onChange={handleWeight} value={weight} />
                            </div>

                            <div className='heightInput weightInput'>
                                <label className='heightInput weightLabel'>h<sup>(m.)</sup></label>
                                <input onChange={handleHeight} value={height} />
                            </div>

                        </div>

                        <div className='buttons'>
                            <button onClick={() => personBMI()}>{weight} / {height}<sup>2</sup></button>
                            <button onClick={() => clean()}>Clear</button>
                        </div>

                        <div className='result'>
                            {wide && <React.Fragment>
                                            {show && <h3>Result</h3>}
                                            <p>{BMI}</p>
                                            <p>{average}</p>
                                    </React.Fragment>
                            }
                            
                        </div>
                    </div>

                </div>
            </div>
            {/* Color */}
            <div>
                    <Colors setColor={setColor} />
            </div>
        </div>
    );
}

export default PersonBMI;
