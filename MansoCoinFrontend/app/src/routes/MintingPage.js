import React, {useState} from "react"
import '../stylesheets/MintingPage.css';
import '../stylesheets/Global.css';
import { mintCoint, checkMint } from '../apiCaller'
function MintingPage(props) {
    const [owner, setOwner] = useState("");

    function handleChange(event){
        const {value, name} = event.target
        setOwner(value)
    }
    async function handleMint(event){
        try {
            console.log(owner)
            await mintCoint(owner)
        } catch (error){
            console.log(error)
        }
    }
    async function handleCheck() {
        try {
            await checkMint()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <div className="App">
                <header className="App-header">
                    <p>
                        This is the place where you mint!
                    </p>

                </header>
                <div className="button-box">
                    <input type='text' name='owner' value={owner} onChange={handleChange}/>
                    <button className="mint-button" name="mint" onClick={handleMint}>Mint</button>
                    <button className="mint-button" name='check' onClick={handleCheck}>Check</button>
                </div>


            </div>
        </main>
    )
}

export default MintingPage