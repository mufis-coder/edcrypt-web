import { encrypt, decrypt } from "../utils/Edcrypt";

const Content = () => {
    var enText = encrypt();
    return ( 
        <div className="content">
            Encrypt in here {enText}
        </div>
     );
}
 
export default Content;