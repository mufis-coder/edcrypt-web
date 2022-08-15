import {useState} from 'react';
import { encrypt, decrypt } from "../utils/Edcrypt";

const Content = () => {
    const [password, setPassword] = useState('');
    const [textIn, setTextIn] = useState('');
    const [isEncrypt, setIsEncrypt] = useState(true);

    const handleTypeAlgo = (e) => {
        const {value} = e.target;
        if(value==="encrypt"){
            setIsEncrypt(true);
        }else{
            setIsEncrypt(false);
        }
    }

    return ( 
        <div className="content">
            <form>
                <label className="control-label">
                    encrypt
                    <input type="radio" id="encrypt" value="encrypt" 
                        name="type-algo" checked={isEncrypt} onChange={handleTypeAlgo}/>
                </label>
                
                <label className="control-label">
                    decrypt
                    <input type="radio" id="decrypt" value="decrypt" 
                        name="type-algo" onChange={handleTypeAlgo}/>
                </label>

                <label>Input password:</label>
                <textarea
                    className="password-area"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                ></textarea>

                <label>Input text:</label>
                <textarea
                    className="text-input-area"
                    required
                    value={textIn}
                    onChange={(e)=>setTextIn(e.target.value)}
                ></textarea>
                
                <label>Result:
                    <p>
                        {isEncrypt? encrypt(textIn, password): decrypt(textIn, password)}
                    </p>
                </label>
            </form>
        </div>
     );
}
 
export default Content;