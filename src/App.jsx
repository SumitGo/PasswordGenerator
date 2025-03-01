import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

    let [passLength, setPassLength] = useState(8);
    let [numberAllowed, setNumber] = useState(true);
    let [charAllowed, setChar] = useState(false);
    let [password, setPassword] = useState("Password");
    let [reGenerate, setReGenerate] = useState(false);
    let passwordRef = useRef(null);


    const generatePassword = useCallback(() => {
        let passStr = "qazwsxedcrfvtgbyhnujmiklopQAZXSWEDCVFRTGBNHYUJMKILOP";
        const num = "1234567890"
        const characters = "!@#$%^&*()_+=-{}|:\",./?><';\\]["
        let pass = ''
        if (numberAllowed) {
            passStr += num;
        }
        if (charAllowed) {
            passStr += characters;
        }
        for (let i = 0; i < passLength; i++) {
            let rand = Math.floor(Math.random() * passStr.length)
            pass += passStr[rand]
        }
        setPassword(pass);
    }, [passLength, numberAllowed, charAllowed]
    );

    useEffect(generatePassword, [generatePassword, reGenerate]);


    function manageLength(e) {
        setPassLength(Number(e.target.value))
    }

    function manageNum() {
        setNumber((prev) => !numberAllowed)
    }

    function manageChar() {
        setChar((prev) => !charAllowed)
    }

    function manageReGenerate() {
        //regenerate the password with same settings
        setReGenerate((prev) => !reGenerate)
        console.log(reGenerate)
    }

    function manageCopy() {
        //copy Password to the clipboard
        window.navigator.clipboard.writeText(passwordRef.current.value.slice(0,10));
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 10)
    }
    return (
        <main className="mainContainer">
            <h3 className='titleName'>Password Generator</h3>

            <div className='controls'>
                <div className='passwordField'>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        ref={passwordRef}
                        readOnly
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="character">
                    <input type="checkbox" name="characters" id="char" onChange={manageChar} checked={charAllowed} />
                    <label htmlFor="charAllowed">Characters</label>
                </div>

                <div className="numberAllowed">
                    <input type="checkbox" name="number" id="num" onChange={manageNum} checked={numberAllowed} />
                    <label htmlFor="num">Numbers </label>
                </div>

                <div className="pass_length">
                    <input type="range" name="length" id="len" min={8} max={100} onChange={manageLength} value={passLength} />
                    <label htmlFor="len">Length : {passLength}</label>
                </div>

            </div>

            <div className="buttons">
                <div>
                    <button onClick={manageReGenerate}>ReGenerate</button>
                </div>
                <div className="copyPass">
                    <button onClick={manageCopy}>Copy</button>
                </div>
            </div>

        </main>
    );
}

export default App;