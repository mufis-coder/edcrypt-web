const encrypt = (texIn, password) => {
    var lenPass= password.length, lenTextIn = texIn.length;
    var iPass = 0;
    var resText = "";

    for (var i=0; i<lenPass; i++) {
		iPass = parseInt(iPass) + parseInt(password.charAt(i).charCodeAt(0));
	}

    for(var i=0; i<lenTextIn; i++) {
        if (texIn.charAt(i) === ' '|| texIn.charAt(i) === '\0' || texIn.charAt(i).charCodeAt(0)>123 ||
                (texIn.charAt(i).charCodeAt(0)<97 && texIn.charAt(i).charCodeAt(0)<65) || 
                (texIn.charAt(i).charCodeAt(0)<97 && texIn.charAt(i).charCodeAt(0)>91)) {
			resText = resText.concat(texIn.charAt(i));
		} else if(texIn.charAt(i).charCodeAt(0)>=65 && texIn.charAt(i).charCodeAt(0)<=90){
            var tempNum = ((((iPass%(i+1)) + (lenTextIn+1))*lenPass));
			var tempChar= (tempNum + texIn.charAt(i).charCodeAt(0))%26 + 65;
			resText = resText.concat(String.fromCharCode(tempChar));
        } else{

            resText = resText.concat(texIn.charAt(i));
        }
    }

    return (resText);
}

const decrypt = () => {
    return ('str');
}

module.exports = {encrypt, decrypt};