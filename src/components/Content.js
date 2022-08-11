import {useState} from 'react';
import { encrypt, decrypt } from "../utils/Edcrypt";

const Content = () => {
    const [password, setPassword] = useState('');
    const [textIn, setTextIn] = useState('');

    return ( 
        <div className="content">
            <form>
                <label>Input password:</label>
                <textarea
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                ></textarea>

                <label>Input text:</label>
                <textarea
                    required
                    value={textIn}
                    onChange={(e)=>setTextIn(e.target.value)}
                ></textarea>

                <p>result: {encrypt(textIn, password)}</p>
            </form>
        </div>
     );
}
 
export default Content;