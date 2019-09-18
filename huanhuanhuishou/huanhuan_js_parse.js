String.prototype.str_split = function (len) {
    var strlen = this.length;
    var str = this.toString();
    if (typeof len == "undefined" || len == 0 || len == 1) {
        return this.split("");
    }
    var count = Math.ceil(strlen / len);
    var reArray = [];
    for (var i = 0; i < count; i++) {
        reArray[i] = str.slice(i * len, i * len + len);
    }
    return reArray;
};

String.prototype.str_replace = function (findstrs, replacestrs) {
    var len = findstrs.length;
    var str = this.toString();
    for (var i = 0; i < len; i++) {
        var temp = findstrs[i];
        if (temp == "+" || temp == "=" || temp == "/")
            eval("var re = /\\" + temp + "/g;");
        else
            eval("var re = /" + temp + "/g;");
        str = str.replace(re, replacestrs[i]);
    }
    return str;
};

function Base64() {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    };
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function decode(str, key) {
    var strArr = str.str_replace(["O0O0O", "o000o", "oo00o"], ["=", "+", "/"]);
    strArr = strArr.str_split(2);
    var len = strArr.length;
    var keyArr = key.str_split();
    for (var k in keyArr) {
        if (k <= len && typeof (strArr[k]) != "undefined" && strArr[k][1] == keyArr[k]) {
            strArr[k] = strArr[k][0];
        }
    }
    strArr = strArr.join("");
    var Base = new Base64();
    var str = Base.decode(strArr);
    str = decodeURIComponent(str);
    return str;
}

function encode(str, key) {
    var Base = new Base64();
    var str = Base.encode(str);
    var strArr = str.str_split("");
    var len = strArr.length;
    var keyArr = key.str_split(0);
    for (var k in keyArr) {
        if (k < len) {
            strArr[k] += keyArr[k];
        }
    }
    strArr = strArr.join("");
    strArr = strArr.str_replace(["=", "+", "/"], ["O0O0O", "o000o", "oo00o"]);
    return strArr;
}



function get_data(code, res) {
   var str = decode(res, code).str_replace(["+","x2b","x2B"],[" ","+","+"]);
   return str;
}