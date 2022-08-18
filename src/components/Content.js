import {useState, useEffect} from 'react';
import copy from "copy-to-clipboard";
import { encrypt, decrypt } from "../utils/Edcrypt";

const Content = () => {
    const [password, setPassword] = useState('');
    const [textIn, setTextIn] = useState('');
    const [resText, setResText] = useState('');
    const [textClipButton, setTextClipButton] = useState('Copy to clipboard');
    const [isEncrypt, setIsEncrypt] = useState(true);
    
    useEffect(() => {
        setTextIn("");
    }, [isEncrypt]);

    useEffect(() => {
        if(isEncrypt){
            setResText(encrypt(textIn, password));
        }else{
            setResText(decrypt(textIn, password));
        }
        setTextClipButton('Copy to clipboard');
    }, [textIn, password, isEncrypt]); 

    const handleTypeAlgo = (e) => {
        const {value} = e.target;
        if(value==="encrypt"){
            setIsEncrypt(true);
        }else{
            setIsEncrypt(false);
        }
    }

    const copyToClipboard  = (e) => {
        copy(resText);
        setTextClipButton('Copied!');
    }

    return ( 
        <div className="content">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-10">
        <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
                <h2 className="mb-5">A Simple Encrypt <br /> and Decrypt App</h2>
                <form className="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio1" 
                                    value="encrypt" 
                                    checked={isEncrypt} 
                                    onChange={handleTypeAlgo}/>
                                <label className="form-check-label" for="inlineRadio1">encrypt</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio1" 
                                    value="decrypt" 
                                    onChange={handleTypeAlgo}/>
                                <label className="form-check-label" for="inlineRadio1">decrypt</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                required
                                name="password" 
                                id="password" 
                                placeholder='Password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <textarea 
                                className="form-control" 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="5" 
                                placeholder="Write your message"
                                required
                                value={textIn}
                                onChange={(e)=>setTextIn(e.target.value)}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>Result:</label>
                            <p id="result-paragraph">
                                {resText}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <button
                                type="button"
                                class="btn btn-outline-dark btn-sm"
                                onClick={copyToClipboard}>
                                {textClipButton}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-4 ml-auto">
                <h3 class="mb-4">Edecrypt Web App</h3>
                <p>
                    Web application to encrypt and decrypt your messages. 
                    If you have any questions about the algorithm used. Please.
                </p>
                <p><a href="https://www.linkedin.com/in/fikris73/" 
                    target="_blank" 
                    rel="noopener noreferrer">Contact me</a></p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Content;