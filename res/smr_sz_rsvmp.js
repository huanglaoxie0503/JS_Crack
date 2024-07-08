const {parse} = require("node-html-parser");
const fs = require("fs");

UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188';

let arr380_42Index = 53;
let bigFuncIndex = 204;
let arr7CheckValue = [10, 12];
let index_value_map = {"1": 103, "2": 240, "4": 203, "6": 126, "7": 102, "9": 181, "10": 108, "12": 208, "13": 100, "14": 224, "15": 180, "16": 11, "17": 203, "18": 181, "20": 0, "24": 225, "25": 101, "26": 102, "31": 103, "32": 127};

async function getIndex(url) {
    let html, headers = {};
    html = await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "proxy-connection": "keep-alive",
            "upgrade-insecure-requests": "1",
            "Referer": "https://amr.sz.gov.cn/xyjggs.webui/xyjggs/List.aspx?view=info",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "User-Agent": UA,
            // "Cookie": "wzws_sessionid=gWM5MmJhYYI1ZmRkN2SAMTE2LjcuMjQ4LjKgZlBQuQ=="
        },
        "body": null,
        "method": "GET"
    }).then(response => {
        console.log(response.status)
        headers = Array.from(response.headers);
        return response.text()
    }).then(text => {
        return text
    })
    return {
        html, headers
    }
}

async function getJsCode() {
    return await fetch("https://amr.sz.gov.cn/NeTmcICWlT8z/IAGbtcRcrfLO.d52d974.js", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "proxy-connection": "keep-alive",
            // "Cookie": "wzws_sessionid=gWM5MmJhYYI1ZmRkN2SAMTE2LjcuMjQ4LjKgZlBQuQ==",
            "Referer": "https://amr.sz.gov.cn/xyjggs.webui/xyjggs/List.aspx?view=info",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "User-Agent": UA
        },
        "body": null,
        "method": "GET"
    }).then(response => {
        return response.text();
    }).then(text => {
        return text;
    });
}

async function sendReq(url, cookies) {
    console.log(cookies)
    let res = await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "upgrade-insecure-requests": "1",
            "cookie": cookies.join("; "),
            "Referer": url,
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "User-Agent": UA
        },
        "body": null,
        "method": "GET"
    }).then(response => {
        console.log("第二次请求状态码：", response.status)
        return response;
    });
    let text = await res.text().then(text => {
        console.log(text)
        return text;
    })
}

var _$id = new Array(255).fill(null);
var _$g4 = new Array(255).fill(null);
var _$hR = new Array(255).fill(null);
var _$hn = new Array(255).fill(null);
var _$d7 = new Array(255).fill(null);
var _$jE = new Array(255).fill(-1);
var map_str = 'qrcklmDoExthWJiHAp1sVYKU3RFMQw8IGfPO92bvLNj.7zXBaSnu0TC6gy_4Ze5d{}|~ !#$%()*+,-;=?@[]^';
for (var i = 0; i < map_str.length; i++) {
    var v = map_str.charCodeAt(i);
    _$id[v] = i << 2;
    _$g4[v] = i >> 4;
    _$hR[v] = (i & 15) << 4;
    _$hn[v] = i >> 2;
    _$d7[v] = (i & 3) << 6;
    _$jE[v] = i;
}

function _$bV(_$au) {
    var _$fB, _$fP, _$d1, _$cW, _$k$;
    _$fB = _$au["length"] / 4,
        _$fP = 0,
        _$d1 = 0,
        _$cW = _$au["length"],
        _$k$ = new Array(_$fB);
    while (_$fP < _$cW) {
        _$k$[_$d1++] = _$au[_$fP++] << 24 | _$au[_$fP++] << 16 | _$au[_$fP++] << 8 | _$au[_$fP++];
    }
    return _$k$;
}

function _$eb(_$au, _$fB) {
    var _$fP, _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ, _$a2, _$br, _$eI, _$kx, _$he, _$cU, _$kd, _$gX;
    _$fP = new Array(_$au['length'] - 8),
        _$d1 = 0,
        _$fB = _$bV(_$fB),
        _$au = _$bV(_$au),
        _$br = _$au[0],
        _$eI = _$au[1],
        _$cU = _$au['length'] - 1,
        _$kd = 2654435769;
    for (_$k$ = 2; _$k$ < _$cU;) {
        _$kx = _$au[_$k$],
            _$he = _$au[_$k$ + 1],
            _$gX = 3337565984;
        for (_$ao = 0; _$ao < 32; ++_$ao) {
            _$he = _$he - ((_$kx << 4 ^ _$kx >> 5 & 134217727) + _$kx ^ _$gX + _$fB[_$gX >> 11 & 2097151 & 3]) & 4294967295,
                _$gX = _$gX - _$kd & 4294967295,
                _$kx = _$kx - ((_$he << 4 ^ _$he >> 5 & 134217727) + _$he ^ _$gX + _$fB[_$gX & 3]) & 4294967295;
        }
        _$br = _$kx ^ _$br,
            _$eI = _$he ^ _$eI,
            _$fP[_$d1++] = _$br >> 24 & 255,
            _$fP[_$d1++] = _$br >> 16 & 255,
            _$fP[_$d1++] = _$br >> 8 & 255,
            _$fP[_$d1++] = _$br & 255,
            _$fP[_$d1++] = _$eI >> 24 & 255,
            _$fP[_$d1++] = _$eI >> 16 & 255,
            _$fP[_$d1++] = _$eI >> 8 & 255,
            _$fP[_$d1++] = _$eI & 255,
            _$br = _$au[_$k$++],
            _$eI = _$au[_$k$++];
    }
    _$gJ = _$fP[_$d1 - 1],
        _$fP['splice'](_$d1 - _$gJ, _$gJ);
    return _$fP;
}

function _$dZ(_$au) {
    var _$fB;
    _$fB = [],
        _$fB = _$bV(_$au);
    return _$fB[0] >>> 0;
}

function _$il() {
    // arr37[18]
    value = arr37_18;
    // value = [250,201,26,164,100,185,28,145,89,66,250,206,126,154,141,91,150,140,123,4,120,141,117,119,105,218,85,41,146,137,39,254]
    return value["slice"](0, 16);
}

function _$hI(_$au, _$fB, _$fP) {
    var _$d1, _$cW, _$k$;
    _$fB = _$fB || 0,
        _$fP === undefined ? _$fP = _$au["length"] : 0,
        _$d1 = new Array(Math.ceil(_$au["length"] / 40960)),
        _$cW = _$fP - 40960,
        _$k$ = 0;
    while (_$fB < _$cW) {
        _$d1[_$k$++] = String.fromCharCode['apply'](null, _$au['slice'](_$fB, _$fB += 40960));
    }
    if (_$fB < _$fP) {
        _$d1[_$k$++] = String.fromCharCode['apply'](null, _$au['slice'](_$fB, _$fP));
    } else {
        0;
    }
    return _$d1.join('');
}

function _$dC(_$au) {
    return [_$au >>> 24 & 255, _$au >>> 16 & 255, _$au >>> 8 & 255, _$au & 255];
}

function to_2_uint8(num) {
    return [num >>> 8 & 255, num & 255]
}


function _$fG(_$au, _$fB, _$fP, _$d1) {
    var _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ, _$a2, _$br, _$eI, _$kx, _$he, _$cU, _$kd, _$gX, _$jt, _$dD, _$$W;
    _$cW = _$au[_$fP],
        _$k$ = _$fB[0] ^ _$cW[0],
        _$ao = _$fB[_$fP ? 3 : 1] ^ _$cW[1],
        _$iK = _$fB[2] ^ _$cW[2],
        _$_a = _$fB[_$fP ? 1 : 3] ^ _$cW[3],
        _$eI = _$cW['length'] / 4 - 2,
        _$he = 4,
        _$cU = [0, 0, 0, 0],
        _$kd = _$d1[0],
        _$gX = _$d1[1],
        _$jt = _$d1[2],
        _$dD = _$d1[3],
        _$$W = _$d1[4];
    for (_$kx = 0; _$kx < _$eI; _$kx++) {
        _$gJ = _$kd[_$k$ >>> 24] ^ _$gX[_$ao >> 16 & 255] ^ _$jt[_$iK >> 8 & 255] ^ _$dD[_$_a & 255] ^ _$cW[_$he],
            _$a2 = _$kd[_$ao >>> 24] ^ _$gX[_$iK >> 16 & 255] ^ _$jt[_$_a >> 8 & 255] ^ _$dD[_$k$ & 255] ^ _$cW[_$he + 1],
            _$br = _$kd[_$iK >>> 24] ^ _$gX[_$_a >> 16 & 255] ^ _$jt[_$k$ >> 8 & 255] ^ _$dD[_$ao & 255] ^ _$cW[_$he + 2],
            _$_a = _$kd[_$_a >>> 24] ^ _$gX[_$k$ >> 16 & 255] ^ _$jt[_$ao >> 8 & 255] ^ _$dD[_$iK & 255] ^ _$cW[_$he + 3],
            _$he += 4,
            _$k$ = _$gJ,
            _$ao = _$a2,
            _$iK = _$br;
    }
    for (_$kx = 0; _$kx < 4; _$kx++) {
        _$cU[_$fP ? 3 & -_$kx : _$kx] = _$$W[_$k$ >>> 24] << 24 ^ _$$W[_$ao >> 16 & 255] << 16 ^ _$$W[_$iK >> 8 & 255] << 8 ^ _$$W[_$_a & 255] ^ _$cW[_$he++],
            _$gJ = _$k$,
            _$k$ = _$ao,
            _$ao = _$iK,
            _$iK = _$_a,
            _$_a = _$gJ;
    }
    return _$cU;
}

function _$fA_367(_$au) {
    var random_str = _$au.pop();
    for (var i = 0; i < _$au.length; i++) {
        _$au[i] = _$au[i] ^ random_str
    }
    return _$au.slice(0, 16);
}

function _$dK(_$au, _$fB, _$fP) {
    var _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ, _$a2, _$br, _$eI;
    _$d1 = _$au,
        _$au['length'] % 16 !== 0 ? _$d1 = _$fA_367(_$au) : 0,
        _$cW = _$bV(_$d1),
        _$a2 = _$fB[4],
        _$br = _$cW['length'],
        _$eI = 1,
        _$_a = _$cW['slice'](0),
        _$gJ = [];
    for (_$k$ = _$br; _$k$ < 4 * _$br + 28; _$k$++) {
        _$iK = _$_a[_$k$ - 1],
            _$k$ % _$br === 0 || _$br === 8 && _$k$ % _$br === 4 ? (_$iK = _$a2[_$iK >>> 24] << 24 ^ _$a2[_$iK >> 16 & 255] << 16 ^ _$a2[_$iK >> 8 & 255] << 8 ^ _$a2[_$iK & 255],
                _$k$ % _$br === 0 ? (_$iK = _$iK << 8 ^ _$iK >>> 24 ^ _$eI << 24,
                    _$eI = _$eI << 1 ^ (_$eI >> 7) * 283) : 0) : 0,
            _$_a[_$k$] = _$_a[_$k$ - _$br] ^ _$iK;
    }
    for (_$ao = 0; _$k$; _$ao++,
        _$k$--) {
        _$iK = _$_a[_$ao & 3 ? _$k$ : _$k$ - 4],
            _$k$ <= 4 || _$ao < 4 ? _$gJ[_$ao] = _$iK : _$gJ[_$ao] = _$fP[0][_$a2[_$iK >>> 24]] ^ _$fP[1][_$a2[_$iK >> 16 & 255]] ^ _$fP[2][_$a2[_$iK >> 8 & 255]] ^ _$fP[3][_$a2[_$iK & 255]];
    }
    return [_$_a, _$gJ];
}

function _$kp(_$au, _$fB) {
    return [_$au[0] ^ _$fB[0], _$au[1] ^ _$fB[1], _$au[2] ^ _$fB[2], _$au[3] ^ _$fB[3]];
}

function _$fX(_$au) {
    var _$fB, _$fP, _$d1, _$cW, _$k$, _$ao;
    _$fB = _$au['length'],
        _$fP = 0,
        _$d1 = 0,
        _$cW = _$au['length'] * 4,
        _$ao = new Array(_$cW);
    while (_$fP < _$fB) {
        _$k$ = _$au[_$fP++],
            _$ao[_$d1++] = _$k$ >>> 24 & 255,
            _$ao[_$d1++] = _$k$ >>> 16 & 255,
            _$ao[_$d1++] = _$k$ >>> 8 & 255,
            _$ao[_$d1++] = _$k$ & 255;
    }
    return _$ao;
}

function _$bJ(_$au, _$fB) {
    var _$fP, _$iQ, _$iD, _$aE, _$k$;
    _$fP = _$go(),
        _$iQ = _$fP[0],
        _$iD = _$fP[1],
        !_$iQ[0][0] && !_$iQ[0][1] ? _$_q(_$fB, _$iQ, _$iD) : 0;
    _$aE = _$dK(_$au, _$iQ, _$iD);

    function _$d1(_$au, _$fB) {
        var _$fP, _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ;
        _$fP = _$fb[_$cn[29]](_$au['length'] / 16) + 1,
            _$k$ = [],
            _$ao = 16 - _$au['length'] % 16,
            _$fB ? _$k$ = _$iK = _$cr() : 0,
            _$gJ = _$au['slice'](0),
            _$_a = _$au['length'] + _$ao;
        for (_$d1 = _$au['length']; _$d1 < _$_a;) {
            _$gJ[_$d1++] = _$ao;
        }
        _$gJ = _$bV(_$gJ);
        for (_$d1 = 0; _$d1 < _$fP;) {
            _$_a = _$gJ['slice'](_$d1 << 2, ++_$d1 << 2),
                _$_a = _$iK ? _$kp(_$_a, _$iK) : _$_a,
                _$iK = _$fG(_$aE, _$_a, 0, _$iQ);
            for (_$cW = 0; _$cW < _$iK['length']; _$cW++) {
                _$k$['push'](_$iK[_$cW]);
            }
        }
        return _$fX(_$k$);
    }

    function _$cW(_$au, _$fB) {
        var _$fP, _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ;
        _$iK = [],
            _$au = _$bV(_$au),
            _$fB ? (_$gJ = _$au['slice'](0, 4),
                _$au = _$au['slice'](4)) : 0,
            _$fP = _$au['length'] / 4;
        for (_$d1 = 0; _$d1 < _$fP;) {
            _$ao = _$au['slice'](_$d1 << 2, ++_$d1 << 2),
                _$k$ = _$fG(_$aE, _$ao, 1, _$iD),
                _$gJ ? _$k$ = _$kp(_$k$, _$gJ) : 0;
            for (_$cW = 0; _$cW < _$k$['length']; _$cW++) {
                _$iK['push'](_$k$[_$cW]);
            }
            _$gJ = _$ao;
        }
        _$iK = _$fX(_$iK);
        _$_a = _$iK[_$iK['length'] - 1];
        return _$iK['slice'](0, _$iK['length'] - _$_a);
    }

    _$k$ = {},
        _$k$._$_2 = _$d1,
        _$k$._$eM = _$cW;
    return _$k$;
}

function _$bA(_$au, _$fB, _$fP, _$d1) {
    var _$cW, _$fP, _$d1, _$k$;
    _$cW = arguments.length,
        _$fP = _$cW > 2 ? arguments[2] : 1,
        _$d1 = _$cW > 3 ? arguments[3] : 0,
        _$k$ = _$bJ(_$fB, _$d1);
    return _$k$._$eM(_$au, _$fP);
}

function _$eW(_$au, _$fB) {
    return _$bA(_$i$(_$au), _$fB);
}

function _$_X() {
    var _$iQ, _$iD;
    _$iQ = [[], [], [], [], []],
        _$iD = [[], [], [], [], []],
        _$go = _$au;

    function _$au(_$au) {
        return [_$iQ, _$iD];
    }
}

function _$dY() {
    this._$aS = _$au,
        this._$_1 = _$fB,
        this._$_r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this._$e4 = [1518500249, 1859775393, 2400959708, 3395469782],
        this._$fK = _$fP;

    function _$au(_$au) {
        var _$fB, _$fP;
        if (typeof _$au === 'string') {
            _$au = _$eN(_$au);
        } else {
            0;
        }
        for (_$fB = 0; _$fB < _$au['length']; _$fB++) {
            this._$$Q['push'](_$au[_$fB]);
        }
        _$fP = this._$$Q,
            this._$$Y += _$au['length'];
        while (_$fP['length'] >= 64) {
            this._$fK(_$bV(_$fP['splice'](0, 64)));
        }
        return this;
    }

    function _$fB() {
        var _$au, _$fB, _$fP, _$d1, _$cW, _$k$, _$ao;
        _$fP = this._$$Q,
            _$d1 = this._$j4,
            _$cW = 'length',
            _$fP['push'](128);
        for (_$au = _$fP['length'] + 2 * 4; _$au & 63; _$au++) {
            _$fP['push'](0);
        }
        while (_$fP[_$cW] >= 64) {
            this._$fK(_$bV(_$fP['splice'](0, 64)));
        }
        _$fP = _$bV(_$fP),
            _$fP['push'](_$fb[_$cn[29]](this._$$Y * 8 / 4294967296)),
            _$fP['push'](this._$$Y * 8 | 0),
            this._$fK(_$fP),
            _$cW = _$d1['length'],
            _$k$ = new _$$K(_$cW * 4);
        for (_$au = _$fB = 0; _$au < _$cW;) {
            _$ao = _$d1[_$au++],
                _$k$[_$fB++] = _$ao >>> 24 & 255,
                _$k$[_$fB++] = _$ao >>> 16 & 255,
                _$k$[_$fB++] = _$ao >>> 8 & 255,
                _$k$[_$fB++] = _$ao & 255;
        }
        return _$k$;
    }

    function _$fP(_$au) {
        var _$fB, _$fP, _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ, _$a2, _$br, _$eI;
        _$_a = _$au['slice'](0),
            _$gJ = this._$j4,
            _$eI = _$cn[29],
            _$d1 = _$gJ[0],
            _$cW = _$gJ[1],
            _$k$ = _$gJ[2],
            _$ao = _$gJ[3],
            _$iK = _$gJ[4];
        for (_$fB = 0; _$fB <= _$hK[99]; _$fB++) {
            _$fB >= 16 ? (_$a2 = _$_a[_$fB - 3] ^ _$_a[_$fB - 8] ^ _$_a[_$fB - _$hK[115]] ^ _$_a[_$fB - 16],
                _$_a[_$fB] = _$a2 << 1 | _$a2 >>> _$hK[8]) : 0,
                _$a2 = _$d1 << 5 | _$d1 >>> _$hK[30],
                _$fB <= _$hK[47] ? _$br = _$cW & _$k$ | ~_$cW & _$ao : _$fB <= _$hK[72] ? _$br = _$cW ^ _$k$ ^ _$ao : _$fB <= _$hK[111] ? _$br = _$cW & _$k$ | _$cW & _$ao | _$k$ & _$ao : _$fB <= _$hK[99] ? _$br = _$cW ^ _$k$ ^ _$ao : 0,
                _$fP = _$a2 + _$br + _$iK + _$_a[_$fB] + this._$e4[_$fb[_$eI](_$fB / _$hK[51])] | 0,
                _$iK = _$ao,
                _$ao = _$k$,
                _$k$ = _$cW << _$hK[73] | _$cW >>> 2,
                _$cW = _$d1,
                _$d1 = _$fP;
        }
        _$gJ[0] = _$gJ[0] + _$d1 | 0,
            _$gJ[1] = _$gJ[1] + _$cW | 0,
            _$gJ[2] = _$gJ[2] + _$k$ | 0,
            _$gJ[3] = _$gJ[3] + _$ao | 0,
            _$gJ[4] = _$gJ[4] + _$iK | 0;
    }
}

function _$cF() {
    this._$j4 = this._$_r["slice"](0),
        this._$$Q = [],
        this._$$Y = 0;
}

function _$_q(_$au, _$fB, _$fP) {
    var _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ, _$a2, _$br, _$eI, _$kx, _$he, _$cU;
    _$d1 = _$fB[4],
        _$cW = _$fP[4],
        _$_a = [],
        _$gJ = [];
    for (_$k$ = 0; _$k$ < 256; _$k$++) {
        _$gJ[(_$_a[_$k$] = _$k$ << 1 ^ (_$k$ >> 7) * 283) ^ _$k$] = _$k$;
    }
    for (_$ao = _$iK = 0; !_$d1[_$ao]; _$ao ^= _$a2 || 1,
        _$iK = _$gJ[_$iK] || 1) {
        _$kx = _$iK ^ _$iK << 1 ^ _$iK << 2 ^ _$iK << 3 ^ _$iK << 4,
            _$kx = _$kx >> 8 ^ _$kx & 255 ^ 99,
            _$d1[_$ao] = _$kx,
            _$cW[_$kx] = _$ao,
            _$a2 = _$_a[_$ao];
    }
    for (_$k$ = 0; _$k$ < 256; _$k$++) {
        _$cW[_$d1[_$k$]] = _$k$;
    }
    for (_$ao = 0; _$ao < 256; _$ao++) {
        _$kx = _$d1[_$ao],
            _$eI = _$_a[_$br = _$_a[_$a2 = _$_a[_$ao]]],
            _$cU = _$eI * 16843009 ^ _$br * 65537 ^ _$a2 * 257 ^ _$ao * 16843008,
            _$he = _$_a[_$kx] * 257 ^ _$kx * 16843008;
        for (_$k$ = 0; _$k$ < 4; _$k$++) {
            _$fB[_$k$][_$ao] = _$he = _$he << 24 ^ _$he >>> 8,
                _$fP[_$k$][_$kx] = _$cU = _$cU << 24 ^ _$cU >>> 8;
        }
    }
    for (_$k$ = 0; _$k$ < 5; _$k$++) {
        _$fB[_$k$] = _$fB[_$k$]['slice'](0),
            _$fP[_$k$] = _$fP[_$k$]['slice'](0);
    }
}

function _$hV(_$au) {
    var _$fB, _$fP, _$d1, _$cW, _$k$;
    _$fB = [],
        _$k$ = String.prototype.charCodeAt['call']('?', 0);
    for (_$fP = 0; _$fP < _$au['length'];) {
        _$d1 = _$au[_$fP],
            _$d1 < 128 ? _$cW = _$d1 : _$d1 < 192 ? _$cW = _$k$ : _$d1 < 224 ? (_$cW = (_$d1 & 63) << 6 | _$au[_$fP + 1] & 63,
                _$fP++) : _$d1 < _$hK[33] ? (_$cW = (_$d1 & 15) << 12 | (_$au[_$fP + 1] & 63) << 6 | _$au[_$fP + 2] & 63,
                _$fP += 2) : _$d1 < 248 ? (_$cW = (_$d1 & 7) << 18 | (_$au[_$fP + 1] & 63) << 12 | (_$au[_$fP + 2] & 63) << 6 | _$au[_$fP + 3] & 63,
                _$fP += 3) : _$d1 < 252 ? (_$cW = _$k$,
                _$fP += 4) : _$d1 < 254 ? (_$cW = _$k$,
                _$fP += 5) : _$cW = _$k$,
            _$fP++,
            _$cW > 65535 ? (_$cW -= 65536,
                _$fB['push']((_$cW >> 10) + 55296, _$cW % 1024 + 56320)) : _$fB['push'](_$cW);
    }
    return _$fB;
}

function _$cq(_$au) {
    return _$hI(_$hV(_$au));
}

function _$gX(_$hJ, _$fX) {
    _$fX > 65535 ? _$fX = 65535 : 0,
        _$hF(_$hJ, _$fX);
}

function _$hF(_$hJ, _$fX) {
    typeof _$fX !== "number" || _$fX < 0 ? _$fX = 0 : _$fX > 4294967295 ? _$fX = 4294967295 : 0,
        _$fX <= 127 ? _$hJ['push'](_$fX) : _$fX <= 16383 ? (_$hJ['push'](((_$fX >> 8) & 255) | 128),
            _$hJ['push'](_$fX & 255)) : _$fX <= 2097151 ? (_$hJ['push'](((_$fX >> 16) & 255) | 192),
            _$hJ['push']((_$fX >> 8) & 255),
            _$hJ['push'](_$fX & 255)) : _$fX <= 268435455 ? (_$hJ['push'](((_$fX >> 24) & 255) | 224),
            _$hJ['push']((_$fX >> 16) & 255),
            _$hJ['push']((_$fX >> 8) & 255),
            _$hJ['push'](_$fX & 255)) : (_$hJ['push'](240),
            _$hJ['push']((_$fX >> 24) & 255),
            _$hJ['push']((_$fX >> 16) & 255),
            _$hJ['push']((_$fX >> 8) & 255),
            _$hJ['push'](_$fX & 255));
}

function _$dq(_$_x, _$_q) {
    var _$bH, _$jZ;
    _$bH = _$_q["length"];
    for (_$jZ = 0; _$jZ < _$bH; _$jZ++)
        if (_$_q[_$jZ] === _$_x)
            return true;
}

function _$dh(_$kf, _$aI) {
    typeof _$aI !== 'number' || _$aI < 0 ? _$aI = 0 : _$aI > 255 ? _$aI = 255 : 0,
        _$kf['push'](_$aI);
}

function _$_0(_$kf, _$aI) {
    typeof _$aI !== 'number' || _$aI < 0 ? _$aI = 0 : _$aI > 65535 ? _$aI = 65535 : 0,
        _$kf['push'](_$aI >> 8),
        _$kf['push'](_$aI & 255);
}

function _$aO(_$_x, _$_q) {
    var _$bH, _$jZ;
    for (_$bH = 0; _$bH < _$_q["length"]; _$bH++)
        _$jZ = _$_q[_$bH],
            typeof _$jZ !== "number" || _$jZ < 0 ? _$jZ = 0 : _$jZ > 255 ? _$jZ = 255 : 0,
            _$_x["push"](_$_q[_$bH]);
}

function _$fH() {
    var _$hb, _$aI, _$b8, _$dV, _$dt, _$jM, _$bZ, _$ag, _$gv, _$ge, _$$z, _$j0, _$dg, _$jR, _$eI, _$fT, _$dr, _$fU,
        _$$6, _$a5, _$f6, _$f7, _$dP, _$dD, _$dd, _$jK, _$d6, _$_T;
    _$hb = 0,
        _$aI = 1,
        _$b8 = 0,
        _$dV = 1,
        _$dt = 0,
        _$jM = 1,
        _$bZ = 1001,
        _$ag = 201,
        _$ge = -1,
        _$eI = _$kG(_$bZ),
        _$fT = _$kG(_$ag),
        _$dr = [],
        _$$6 = new Date()['getTime'](),
        _$a5 = '/T7AyTrxoWxGd',
        _$f6 = 0,
        _$dP = 0,
        _$dD = 0,
        _$dd = new Date()['getTime'](),
        _$d6 = {};
    _$kf = {
        _$gb: 1,
        _$jS: 1,
        _$hp: 0,
        _$ao: _$bD,
        _$eO: _$$S,
        _$jJ: _$a1,
        _$hy: _$hy
    };
    return _$kf

    // _$bp
    function _$bD() {
    }

    function _$$S() {
        _$dg = _$bp(),
            _$jR = new _$_a(100);
        // _$$z = _$fB(_$iL()),
        // _$j0 = _$gm()['pathname'];
    }

    function _$a1(_$kf) {
        if (_$dg === _$_T)
            return;
        _$eH(_$dV),
            _$gv ? _$aO(_$kf, _$gv) : 0;
    }

    function _$kG(_$kf) {
        var _$gA, _$aM, _$db, _$eK, _$aI, _$bZ;
        _$gA = _$kf,
            _$aM = 0,
            _$db = 0,
            _$eK = [],
            _$aI = {},
            _$bZ = 0,
            _$aI._$dO = _$ag,
            _$aI._$eq = _$bD,
            _$aI._$fk = _$$S,
            _$aI._$g1 = _$a1,
            _$aI._$eQ = _$gq,
            _$aI._$dQ = _$bH,
            _$aI._$fm = _$_M,
            _$aI._$_f = _$iG,
            _$aI._$fR = _$e8,
            _$aI._$_5 = _$em,
            _$aI._$h5 = _$$w,
            _$aI._$aE = _$_w;
        return _$aI;

        function _$ag() {
            return ((_$db + 1) % _$gA == _$aM);
        }

        function _$bD() {
            return _$db == _$aM;
        }

        function _$$S() {
            var _$kf;
            _$kf = null,
                !this._$eq() ? (_$kf = _$eK[_$aM],
                    _$aM = (_$aM + 1) % _$gA) : 0;
            return _$kf;
        }

        function _$a1() {
            var _$kf;
            _$kf = null,
                !this._$eq() ? (_$db = (_$db - 1 + _$gA) % _$gA,
                    _$kf = _$eK[_$db]) : 0;
            return _$kf;
        }

        function _$gq(_$kf) {
            this._$dO() ? this._$fk() : 0,
                _$eK[_$db] = _$kf,
                _$db = (_$db + 1) % _$gA;
        }

        function _$bH() {
            return (_$db - _$aM + _$gA) % _$gA;
        }

        function _$_M() {
            _$aM = _$db = 0;
        }

        function _$iG() {
            return _$aM;
        }

        function _$e8() {
            return _$db;
        }

        function _$em(_$kf) {
            return (_$kf + 1) % _$gA;
        }

        function _$$w(_$kf) {
            return (_$kf - 1 + _$gA) % _$gA;
        }

        function _$_w(_$kf) {
            return _$eK[_$kf];
        }
    }

    function _$do(_$kf, _$aI, _$bZ) {
        var _$ag;
        for (_$ag = 0; _$ag < _$aI; ++_$ag)
            _$kf[_$ag] = _$bZ;
    }

    function _$gw(_$kf, _$aI) {
        if (_$kf == _$_T || _$aI == _$_T)
            return false;
        else if (_$kf.x == _$aI.x && _$kf.y == _$aI.y)
            return true;
        return false;
    }

    function _$kd(_$kf, _$aI) {
        return Math['sqrt']((_$kf.x - _$aI.x) * (_$kf.x - _$aI.x) + (_$kf.y - _$aI.y) * (_$kf.y - _$aI.y));
    }

    function _$ja(_$kf, _$aI) {
        return Math['abs'](_$kf.x - _$aI.x) + Math['abs'](_$kf.y - _$aI.y);
    }

    function _$cj(_$kf, _$aI) {
        var _$bZ;
        _$bZ = (_$kf.x * _$aI.x + _$kf.y * _$aI.y) / (Math['sqrt']((_$kf.x * _$kf.x) + (_$kf.y * _$kf.y)) * Math['sqrt']((_$aI.x * _$aI.x) + (_$aI.y * _$aI.y))),
            Math['abs'](_$bZ) > 1 ? _$bZ = parseInt(_$bZ) : 0;
        return Math['acos'](_$bZ);
    }

    function _$hH(_$kf, _$aI) {
        var _$bZ, _$ag;
        _$bZ = (_$kf.x * _$aI.x + _$kf.y * _$aI.y) / (Math['sqrt']((_$kf.x * _$kf.x) + (_$kf.y * _$kf.y)) * Math['sqrt']((_$aI.x * _$aI.x) + (_$aI.y * _$aI.y))),
            Math['abs'](_$bZ) > 1 ? _$bZ = parseInt(_$bZ) : 0,
            _$ag = Math['acos'](_$bZ),
            _$kf.y < 0 ? _$ag = 2 * Math.PI - _$ag : 0;
        return _$ag;
    }

    function _$i0(_$kf) {
        var _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1;
        _$aI = [],
            _$bZ = new _$$M(1, 0),
            _$ag = _$kf[0];
        for (_$bD = 1; _$bD < _$kf['length']; _$bD++)
            _$$S = _$kf[_$bD],
                _$a1 = new _$$M(_$$S.x - _$ag.x, _$$S.y - _$ag.y),
                _$aI['push'](_$hH(_$a1, _$bZ)),
                _$ag = _$$S;
        return _$aI;
    }

    function _$jH() {
        var _$kf, _$gA, _$aM, _$db, _$eK, _$fF, _$i9, _$ar;
        _$kf = {},
            _$gA = [],
            _$fF = [],
            _$i9 = [],
            _$ar = [],
            _$kf._$$D = _$aI,
            _$kf._$dk = _$bZ,
            _$kf._$gJ = _$ag,
            _$kf._$gE = _$bD,
            _$kf._$$n = _$$S,
            _$kf._$aJ = _$a1,
            _$kf._$_A = _$gq,
            _$kf._$i7 = _$bH,
            _$kf._$iO = _$_M,
            _$kf._$dx = _$iG,
            _$kf._$_b = _$e8;
        return _$kf;

        function _$aI(_$kf) {
            var _$aI, _$bZ;
            _$aM = 0,
                _$eK = 0,
                _$db = 0,
                _$i9 = [],
                _$ar = [],
                _$gA = [],
                _$fF = [];
            for (_$bZ = _$kf._$_f(); _$bZ != _$kf._$fR(); _$bZ = _$kf._$_5(_$bZ)) {
                if (_$bZ != _$kf._$_f()) {
                    _$gA[_$aM] = _$ja(_$kf._$aE(_$bZ), _$aI),
                        _$aM++,
                        _$ar['push'](_$kf._$aE(_$bZ));
                    if (_$gw(_$kf._$aE(_$bZ), _$aI))
                        continue;
                    _$fF[_$eK] = _$kd(_$kf._$aE(_$bZ), _$aI),
                        _$fF[_$eK] < 200 ? (_$db += _$fF[_$eK],
                            _$eK++) : 0;
                }
                _$aI = _$kf._$aE(_$bZ),
                    _$i9['push'](_$aI);
            }
        }

        function _$bZ() {
            return [_$db, _$eK];
        }

        function _$ag(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD, _$$S;
            _$aI = 6,
                _$bZ = [],
                _$ag = 0,
                _$do(_$bZ, _$aI, 0);
            for (_$bD = 0; _$bD < _$eK; ++_$bD)
                _$$S = _$fF[_$bD],
                    _$$S <= 2 ? _$bZ[0]++ : _$$S <= 10 ? _$bZ[1]++ : _$$S <= 25 ? _$bZ[2]++ : _$$S <= 50 ? _$bZ[3]++ : _$$S <= 80 ? _$bZ[4]++ : _$bZ[5]++;
            for (_$bD = 0; _$bD < _$aI; ++_$bD)
                _$bZ[_$bD] ? _$ag++ : 0;
            return _$ag;
        }

        function _$bD(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH, _$_M, _$iG, _$e8, _$em, _$$w, _$_w, _$ji, _$am;
            _$aI = 10,
                _$bZ = 0,
                _$ag = 0,
                _$bD = {},
                _$$S = 0,
                _$a1 = 0;
            if (_$aM < _$aI)
                return _$bZ;
            _$gq = 0;
            while (_$gq < _$aM - 1) {
                _$bH = [],
                    _$_M = 0,
                    _$iG = 0,
                    _$e8 = 0,
                    _$em = 0,
                    _$$w = [],
                    _$ag = 0,
                    _$bD = {};
                for (; _$gq < _$aM - 1; ++_$gq) {
                    _$iG = _$gA[_$gq + 1],
                        _$e8 = _$gA[_$gq];
                    if (_$e8 == 0 || _$e8 > 200) {
                        _$gq++;
                        break;
                    }
                    if (_$iG == 0) {
                        _$gq += 2;
                        break;
                    }
                    _$em = _$iG - _$e8,
                        _$dq(_$em, _$bH) !== true ? (_$bD[_$em] = 1,
                            _$ag++) : _$bD[_$em]++,
                        _$bH[_$_M] = _$em,
                        _$_M++;
                }
                if (_$_M < 10)
                    continue;
                _$$S = 0,
                    _$bD = {};
                for (_$_w = 0; _$_w < _$_M - 1; _$_w++)
                    _$ji = _$bH[_$_w + 1] - _$bH[_$_w],
                        _$dq(_$ji, _$$w) !== true ? (_$bD[_$ji] = 1,
                            _$$S++) : _$bD[_$ji]++,
                        _$$w[_$_w] = _$ji;
                for (_$am in _$bD)
                    _$bD[_$am] / _$$w['length'] > _$dp[153] ? _$$S = 1 : 0;
                _$ag > _$$S ? _$a1 = _$$S : _$a1 = _$ag,
                    _$bZ = Math['max'](_$a1, _$bZ);
            }
            return _$bZ;
        }

        function _$$S(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH, _$_M, _$iG, _$e8, _$em, _$$w;
            _$aI = true,
                _$bD = 0,
                _$$S = 0,
                _$a1 = false,
                _$gq = 0;
            if (_$i9['length'] > 20)
                while (_$bD < _$ar['length'] - 1) {
                    _$bH = [];
                    for (; _$bD < _$ar['length'] - 1; _$bD++) {
                        _$bZ = _$ar[_$bD],
                            _$ag = _$ar[_$bD + 1];
                        if (_$gw(_$bZ, _$ag)) {
                            _$bD++;
                            break;
                        }
                        _$bZ.x != _$ag.x ? (_$$S = (_$bZ.y - _$ag.y) / (_$bZ.x - _$ag.x),
                            0 <= _$$S && _$$S < 0.01 ? _$$S = 0.01 : -0.01 < _$$S && _$$S < 0 ? _$$S = -0.01 : 0,
                            _$$S < -100 ? _$$S = -100 : _$$S > 100 ? _$$S = 100 : 0) : _$bZ.y - _$ag.y > 0 ? _$$S = 100 : _$$S = -100,
                            _$bH['push'](_$$S);
                    }
                    if (_$bH['length'] > 10) {
                        _$bH["pop"](),
                            _$bH["shift"](),
                            _$_M = 0;
                        for (_$iG = 0; _$iG < _$bH['length']; _$iG++)
                            _$_M += _$bH[_$iG];
                        _$e8 = _$_M / _$bH['length'],
                            _$em = 0,
                            _$$w = 0;
                        for (_$iG = 0; _$iG < _$bH['length']; _$iG++)
                            _$$w = Math['abs'](_$bH[_$iG] - _$e8),
                                _$em += _$$w;
                        _$gq == 0 ? _$gq = _$em / _$bH['length'] : _$gq = (_$em / _$bH['length'] + _$gq) / 2,
                            _$gq > 0.1 ? _$aI = false : 0,
                            _$a1 = true;
                    }
                }
            if (_$a1)
                return [_$aI, _$gq];
            return [0, -1];
        }

        function _$a1(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH, _$_M, _$iG, _$e8, _$em, _$$w;
            _$aI = 15,
                _$bZ = true,
                _$ag = true,
                _$bD = true,
                _$$S = true;
            if (_$i9['length'] > _$aI) {
                _$a1 = 1,
                    _$gq = 0,
                    _$bH = 0;
                for (_$_M = 1; _$_M < _$i9['length'] - 1; _$_M++)
                    _$iG = _$i9[_$_M],
                        _$e8 = _$i9[_$_M + 1],
                        _$em = _$iG.x < _$e8.x,
                        _$bZ != _$em ? (_$a1 += 1,
                            _$gq > 2 ? _$ag = _$bZ : 0,
                            _$gq = 0,
                            _$bZ = _$em) : _$gq += 1,
                        _$$w = _$iG.y < _$e8.y,
                        _$bD != _$$w ? (_$a1 += 1,
                            _$bH > 2 ? _$$S = _$bD : 0,
                            _$bH = 0,
                            _$bD = _$$w) : _$bH += 1,
                        _$gq > 2 && _$ag != _$bZ ? (_$ag = _$bZ,
                            _$a1 -= 1) : 0,
                        _$bH > 2 && _$$S != _$bD ? (_$$S = _$bD,
                            _$a1 -= 1) : 0;
                return [_$a1, _$i9['length'] - 2];
            }
            return [0, 0];
        }

        function _$gq() {
            var _$kf, _$aI, _$bZ, _$bD, _$$S, _$a1;
            _$kf = [],
                _$aI = 0,
                _$bZ = 0;
            if (_$i9['length'] <= 10)
                return [_$aI, _$kf['length']];

            function _$ag(_$kf, _$aI) {
                if (_$aI - _$kf > 0.5)
                    return 1;
                else if (_$kf - _$aI > 0.5)
                    return 2;
                else
                    return 0;
            }

            _$kf = _$i0(_$i9),
                _$bD = _$ag(_$kf[0], _$kf[1]);
            for (_$$S = 2; _$$S < _$kf['length']; _$$S++)
                _$a1 = _$ag(_$kf[_$$S], _$kf[_$$S - 1]),
                    _$bD !== _$a1 ? (_$aI += 1,
                        _$bZ > 5 ? _$aI -= 1 : 0,
                        _$bZ = 0) : _$bZ += 1,
                    _$bD = _$a1;
            return [_$aI, _$kf['length']];
        }

        function _$bH(_$kf, _$aI) {
            var _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH, _$_M, _$iG, _$e8, _$em, _$$w;
            _$bZ = 0.35,
                _$ag = 0,
                _$bD = _$i9,
                _$$S = parseInt(_$bZ * _$bD['length'] + 1),
                _$bH = _$_T,
                _$iG = 0,
                _$e8 = 0,
                _$em = 0;
            if (_$$S < 3)
                return 0;
            for (_$$w = _$bD['length'] - 1; _$$w >= _$bD['length'] - _$$S; --_$$w)
                _$gq = new _$$M(_$bD[_$$w].x - _$bD[_$$w - 1].x, _$bD[_$$w].y - _$bD[_$$w - 1].y),
                    _$bH != _$_T ? (_$_M = _$cj(_$gq, _$bH),
                        _$iG += _$_M,
                        _$e8 = Math['max'](_$e8, _$_M)) : 0,
                    _$bH = _$gq;
            _$em = ((_$iG - _$e8) / (_$$S - 1) * 1000)['toFixed'](0);
            return _$em;
        }

        function _$_M(_$kf, _$aI, _$bZ) {
            var _$ag;
            _$ag = false;
            if (_$aI != _$hb)
                return 0;
            _$kf._$dQ() == 1 ? _$bZ['type'] == 1 && _$gw(_$kf._$aE(_$kf._$_f()), _$bZ) ? _$ag = true : 0 : 0;
            return _$ag;
        }

        function _$iG() {
            var _$kf, _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH;
            _$kf = _$i9[0],
                _$aI = new _$$M(1, 0),
                _$bZ = _$_T,
                _$ag = 0,
                _$bD = 0,
                _$$S = 0;
            for (_$a1 = 1; _$a1 < _$i9['length'] - 1; _$a1++)
                _$gq = _$i9[_$a1],
                    _$ja(_$gq, _$kf) > 0 ? (_$bH = new _$$M(_$gq.x - _$kf.x, _$gq.y - _$kf.y),
                        _$ag = _$hH(_$bH, _$aI),
                        _$bZ !== _$_T && _$ag !== _$bZ ? _$$S += 1 : 0,
                        _$bD += 1,
                        _$bZ = _$ag,
                        _$kf = _$gq) : 0;
            return [_$$S, _$bD];
        }

        function _$e8(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq;
            _$aI = 0,
                _$bZ = 0,
                _$ag = 0,
                _$bD = 0,
                !_$d6._$jm ? _$d6._$jm = new _$$M(_$i9[0].x, _$i9[0].y) : 0,
                _$$S = _$d6._$cY ? _$d6._$cY : _$d6._$jm,
                _$aI = _$i9['length'];
            for (_$a1 = 0; _$a1 < _$aI; _$a1++)
                _$gq = _$i9[_$a1],
                    _$bZ += (_$gq.x - _$d6._$jm.x),
                    _$ag += (_$gq.y - _$d6._$jm.y),
                    _$bD = _$kd(_$gq, _$$S),
                    _$$S = _$gq;
            _$d6._$cY = _$$S;
            return [_$bZ, _$ag, _$bD, _$aI];
        }
    }

    function _$jv() {
        var _$kf, _$gA, _$aM, _$db;
        _$kf = {},
            _$gA = [],
            _$aM = 0,
            _$db = 0,
            _$kf._$$D = _$aI,
            _$kf._$dk = _$bZ,
            _$kf._$at = _$ag,
            _$kf._$a0 = _$bD;
        return _$kf;

        function _$aI(_$kf) {
            var _$aI, _$bZ;
            _$aM = 0,
                _$db = 0;
            for (_$aI = _$kf._$_f(); _$aI != _$kf._$fR(); _$aI = _$kf._$_5(_$aI))
                _$bZ = _$kf._$aE(_$aI),
                    _$bZ['type'] == 5 || _$bZ['type'] == 6 ? (_$gA[_$aM] = _$bZ,
                        _$aM++) : 0,
                    _$bZ['type'] == 5 ? _$db++ : 0;
        }

        function _$bZ() {
            return _$db;
        }

        function _$ag(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH, _$_M, _$iG;
            _$aI = 100,
                _$bZ = 0.8,
                _$ag = null,
                _$bD = 0,
                _$$S = [],
                _$a1 = 0,
                _$bH = 0;
            if (_$aM > 1) {
                for (_$_M = 0; _$_M < _$aM; ++_$_M)
                    _$iG = _$gA[_$_M],
                        _$iG['type'] == 5 ? (_$ag != null ? (_$$S[_$bD] = _$iG['timeStamp'] - _$ag['timeStamp'],
                            _$bD++) : 0,
                            _$ag = _$iG) : 0;
                for (_$_M = 0; _$_M < _$bD; ++_$_M)
                    _$$S[_$_M] < _$aI ? _$a1++ : 0;
            }
            return _$a1;
        }

        function _$bD(_$kf) {
            var _$aI, _$bZ, _$ag, _$bD;
            _$bZ = false;
            for (_$ag = 0; _$ag < _$aM; ++_$ag) {
                if (_$ag) {
                    _$bD = _$gA[_$ag];
                    if (_$aI['type'] == 6 || _$bD['type'] == 5)
                        if (_$aI['keyCode'] == 0 && _$bD['keyCode'] == 0) {
                            _$bZ = true;
                            break;
                        }
                }
                _$aI = _$gA[_$ag];
            }
            return _$bZ;
        }
    }

    function _$bp() {
        var _$kf, _$gA, _$aM, _$db, _$eK;
        _$kf = {},
            _$gA = _$jH(),
            _$aM = _$jv(),
            _$db = 0,
            _$eK = 0,
            _$kf['run'] = _$aI;
        return _$kf;

        function _$aI(_$kf, _$aI, _$bZ) {
            var _$ag, _$bD, _$$S, _$a1;
            _$ag = {};
            if (_$kf == _$b8) {
                for (_$bD in _$gA)
                    _$gA['hasOwnProperty'](_$bD) ? (_$$S = _$gA[_$bD](_$eI, _$aI, _$bZ),
                        _$$S !== _$_T ? (_$ag[_$bD] = _$$S,
                            _$db++) : 0) : 0;
                _$eI._$fm();
            } else {
                for (_$bD in _$aM)
                    _$aM['hasOwnProperty'](_$bD) ? (_$a1 = _$aM[_$bD](_$fT),
                        _$a1 !== _$_T ? (_$ag[_$bD] = _$a1,
                            _$eK++) : 0) : 0;
                _$fT._$fm();
            }
            return _$ag;
        }
    }

    function _$_a(_$kf) {
        var _$aI, _$gA, _$aM, _$db;
        _$aI = {},
            _$gA = 0,
            _$aM = _$kG(_$kf),
            _$db = _$kG(_$kf),
            _$aI._$b1 = _$bZ,
            _$aI._$gQ = _$ag,
            _$aI._$ky = _$bD,
            _$aI._$jG = _$$S;
        return _$aI;

        function _$bZ(_$kf, _$aI, _$bZ) {
            if (_$aI <= 0)
                return;
            _$kf == _$b8 ? (_$aM._$eQ(_$bZ),
                _$gA++) : _$db._$eQ(_$bZ),
                this._$jG();
        }

        function _$ag(_$kf, _$aI) {
            if (_$kf == _$_T)
                return _$aI;
            return _$kf;
        }

        function _$bD(_$kf) {
            return parseInt(_$kf * 1000 + 0.5);
        }

        function _$$S(pp) {
            var _$kf, _$aI, _$bZ, _$ag, _$bD, _$$S, _$a1, _$gq, _$bH, _$_M, _$iG, _$e8, _$em, _$$w, _$_w, _$ji,
                _$am,
                _$cU, _$br, _$$O, _$cK, _$de, _$kn, _$fX, _$bo, _$km, _$_e, _$e1, _$$K, _$gP, _$kl, _$dy, _$_z,
                _$jJ,
                _$_Q, _$ff, _$fd;
            _$kf = 0,
                _$aI = 0,
                _$bZ = 0,
                _$ag = 0,
                _$bD = 0,
                _$$S = 0,
                _$a1 = 0,
                _$gq = 0,
                _$bH = 0,
                _$_M = 0,
                _$iG = 0,
                _$e8 = 0,
                _$em = 0,
                _$$w = _$ge,
                _$_w = 0,
                _$ji = 0,
                _$am = 0,
                _$cU = 0,
                _$br = 0,
                _$$O = 0,
                _$cK = 0,
                _$de = 0,
                _$kn = 0,
                _$fX = 0,
                _$bo = 0,
                _$km = _$ge,
                _$_e = _$aM._$dQ(),
                _$e1 = _$db._$dQ();
            if (_$_e > 0)
                for (_$$K = _$aM._$_f(); _$$K != _$aM._$fR(); _$$K = _$aM._$_5(_$$K))
                    _$gP = _$aM._$aE(_$$K),
                        _$kl = _$gP._$dk,
                        _$bZ += _$kl[0],
                        _$aI += _$kl[1],
                        _$bD = Math['max'](_$gP._$gJ, _$bD),
                        _$$S = Math['max'](_$gP._$gE, _$$S),
                        _$gP._$$n != _$_T ? (_$dy = _$gP._$$n,
                            _$dy[0] !== 0 ? (_$_M += 1,
                                _$em += _$dy[1],
                                _$gq = _$dy[0],
                                _$gq ? _$bH += 1 : 0,
                                _$e8 = 100 * (_$em / _$_M),
                                _$iG = 100 * (_$bH / _$_M)) : 0) : 0,
                        _$_z = _$gP._$_A,
                        _$_w += _$_z[0],
                        _$am += _$_z[1],
                        _$jJ = _$gP._$dx,
                        _$cU += _$jJ[0],
                        _$br += _$jJ[1],
                        _$_Q = _$gP._$_b,
                        _$cK += _$_Q[0],
                        _$de += _$_Q[1],
                        _$kn += _$_Q[2],
                        _$fX += _$_Q[3],
                        _$a1 = Math['max'](_$gP._$i7, _$a1),
                        _$gP._$iO != _$_T ? _$$w == _$ge ? _$$w = _$gP._$iO : _$$w = _$$w && _$gP._$iO : 0;
            _$am > 0 ? _$ji = Math['floor'](_$_w / _$am * 100) : 0,
                _$br > 0 ? _$$O = Math['floor'](_$cU / _$br * 100) : 0,
                _$fX > 10 ? (_$cK = ((_$cK / _$fX) - 20) / 33,
                    _$de = ((_$de / _$fX) - 50) / 22,
                    _$kn = (_$kn - 5089) / 112,
                    _$cK = Math['round'](_$cK * 100),
                    _$de = Math['round'](_$de * 100),
                    _$kn = Math['round'](_$kn * 10)) : _$cK = _$de = _$kn = 0;
            if (_$e1 > 0)
                for (_$$K = _$db._$_f(); _$$K != _$db._$fR(); _$$K = _$db._$_5(_$$K))
                    _$ff = _$db._$aE(_$$K),
                        _$ag += _$ff._$dk,
                        _$bo += _$ff._$at,
                        _$ff._$a0 != _$_T ? _$km === _$ge ? _$km = _$ff._$a0 : _$km = _$km && _$ff._$a0 : 0;
            _$$w == _$ge ? _$$w = false : 0,
                _$km == _$ge ? _$km = false : 0,
                _$$K = 0,
                _$gv = [],
                _$fd = 0,
                _$$w ? _$fd |= 1 : 0,
                _$km ? _$fd |= 2 : 0,
                _$dh(_$gv, _$fd),
                _$_0(_$gv, Math['round'](_$bZ)),
                _$_0(_$gv, _$aI),
                _$_0(_$gv, _$gA),
                _$_0(_$gv, _$bD),
                _$_0(_$gv, _$ji),
                _$_0(_$gv, _$$S),
                _$_0(_$gv, _$e8),
                _$_0(_$gv, _$iG),
                _$_0(_$gv, _$a1),
                _$_0(_$gv, _$ag),
                _$_0(_$gv, _$bo),
                _$dh(_$gv, _$$O),
                _$fO(_$gv, _$cK >>> 0),
                _$fO(_$gv, _$de >>> 0),
                _$fO(_$gv, _$kn >>> 0);
        }
    }

    function _$$l(_$kf, _$aI, _$bZ) {
        this['type'] = _$kf,
            this.x = _$aI['screenX'],
            this.y = _$aI['screenY'],
            this['timeStamp'] = _$bZ,
            this['keyCode'] = _$aI['keyCode'],
            this['data'] = _$aI['data'],
            this['button'] = _$aI['button'];
    }

    function _$$M(_$kf, _$aI) {
        this.x = _$kf,
            this.y = _$aI;
    }

    function _$i1(_$kf) {
        return new Date()['getTime']() - _$dd;
    }

    function _$bK(_$kf) {
        switch (_$kf['type']) {
            case 0:
            case 3:
            case 4:
            case 1:
            case 2:
                return true;
            default:
                return false;
        }
    }

    function _$hy(_$kf, _$aI) {
        var _$bZ;
        _$bZ = new _$$l(_$kf, _$aI, _$i1(_$aI['timeStamp'])),
            _$$z ? _$hM(_$bZ) : 0;
        if (!_$bK(_$bZ))
            (_$jK == _$b8 ? _$eH(_$b8) : 0,
                _$fT._$eQ(_$bZ),
                _$jK = _$dV,
                _$fT._$dO() ? _$eH(_$dV) : 0);
        else {
            switch (_$dD) {
                case 0:
                    _$bZ['type'] == 0 ? _$eI._$eQ(_$bZ) : _$bZ['type'] == 1 ? (_$eH(_$b8, _$hb, _$bZ),
                        _$bZ['button'] == _$dt ? _$dD = 2 : (_$dP = 0,
                            _$dD = 3)) : _$bZ['type'] == _$dp[61] ? (_$f7 = _$bZ,
                        _$dD = 1) : 0;
                    break;
                case 1:
                    _$bZ['type'] == 3 ? (!_$gw(_$f7, _$bZ) ? _$eH(_$b8) : 0,
                        _$dD = 0) : 0;
                    break;
                case 2:
                    _$bZ['type'] == 2 ? _$dD = 0 : _$bZ['type'] == 1 && _$bZ['button'] == _$jM ? (_$dD = 3,
                        _$dP = 0) : 0;
                    break;
                case 3:
                    _$bZ['type'] == 0 ? _$dP++ : _$dP = 0,
                        _$dP >= 2 ? _$dD = 0 : 0;
                    break;
                default:
                    break;
            }
            _$jK = _$b8;
        }
    }

    function _$eH(_$kf, _$aI, _$bZ) {
        var _$ag, _$bD, _$$S;
        _$bD = ["Mouse", 'Keyboard'],
            _$kf == _$b8 ? _$$S = _$eI._$dQ() : _$$S = _$fT._$dQ(),
            _$$S > 0 ? (_$ag = _$dg['run'](_$kf, _$aI, _$bZ),
                _$jR._$b1(_$kf, _$$S, _$ag)) : 0;
    }

    function _$hM(_$kf) {
        var _$aI;
        _$aI = [],
            _$aI['push'](_$kf['type']);
        switch (_$kf['type']) {
            case 0:
            case 3:
            case 4:
                _$aI['push'](_$kf.x),
                    _$aI['push'](_$kf.y);
                break;
            case 1:
            case 2:
                _$aI['push'](_$kf.x),
                    _$aI['push'](_$kf.y),
                    _$aI['push'](_$kf['button']);
                break;
            case 5:
            case 6:
                _$aI['push'](_$kf['keyCode']);
                break;
        }
        _$aI['push'](_$kf['timeStamp']),
            _$dr['push'](_$hL[10][_$ds[20]](_$aI, ' ')),
            _$dr['length'] && _$_g(177) - _$$6 >= _$dp[75] ? _$er() : 0;
    }

    function _$g5() {
        var _$kf, _$aI, _$bZ;
        _$kf = [_$bD, _$$S, _$a1, _$gq],
            _$aI = [_$bi(_$dp[18])];
        for (_$bZ = 0; _$bZ < _$kf['length']; _$bZ++)
            try {
                _$aI[_$bZ] = _$kf[_$bZ]();
            } catch (_$ag) {
                _$aI[_$bZ] = '';
            }
        _$aI = _$hL[10][_$ds[20]](_$aI, _$ds[7]);
        return _$f_(_$dS(_$aI));

        function _$bD() {
            var _$kf;
            if (_$fn[_$a4[42]]) {
                _$kf = _$fn[_$a4[42]][_$c5[83]](new _$fn[_$iB[63]](16));
                return _$hL[10][_$ds[20]](_$kf, '');
            } else
                return '';
        }

        function _$$S() {
            return Math[_$_t[19]]();
        }

        function _$a1() {
            return new _$in()[_$_t[15]]();
        }

        function _$gq() {
            return _$fn[_$_t[27]] && _$fn[_$_t[27]][_$_t[30]] && (_$fn[_$_t[27]][_$_t[30]]());
        }
    }

    function _$er() {
        var _$kf;
        _$kf = [],
            !_$fU ? _$fU = _$g5() : 0,
            _$f6++,
            _$kf['push'](_$fU),
            _$kf['push'](_$f6),
            _$kf['push'](_$j0),
            _$kf = _$kf[_$ds[21]](_$dr),
            _$dr = [],
            _$$6 = _$_g(177),
            _$iz(_$hL[10][_$ds[20]](_$kf, '\n'));
    }

    function _$iz(_$kf) {
        var _$aI;
        _$aI = null,
            _$fn[_$ds[13]] ? _$aI = new _$fn[_$ds[13]]() : _$fn[_$ds[41]] ? _$aI = new _$fn[_$ds[41]](_$c1[13]) : 0,
            _$aI != null ? (_$aI[_$ds[42]](_$c5[95], _$a5, true),
                _$aI[_$_t[22]](_$kf)) : 0;
    }
}

// 首页代码的检验函数

// 解码函数
function _$i$(_$au) {
    var _$fB, _$fP, _$d1, _$cW, _$k$, _$ao, _$iK, _$_a, _$gJ;
    if (!_$au || typeof _$au != "string") {
        return [];
    }
    _$fB = _$au.length,
        _$fP = new Array(Math.floor(_$fB * 3 / 4)),
        _$iK = 0,
        _$_a = 0,
        _$gJ = _$fB - 3;
    for (_$iK = 0; _$iK < _$gJ;) {
        _$d1 = _$au.charCodeAt(_$iK++),
            _$cW = _$au.charCodeAt(_$iK++),
            _$k$ = _$au.charCodeAt(_$iK++),
            _$ao = _$au.charCodeAt(_$iK++),
            _$fP[_$_a++] = _$id[_$d1] | _$g4[_$cW],
            _$fP[_$_a++] = _$hR[_$cW] | _$hn[_$k$],
            _$fP[_$_a++] = _$d7[_$k$] | _$jE[_$ao];
    }
    if (_$iK < _$fB) {
        _$d1 = _$au.charCodeAt(_$iK++),
            _$cW = _$au.charCodeAt(_$iK++),
            _$fP[_$_a++] = _$id[_$d1] | _$g4[_$cW],
            _$iK < _$fB ? (_$k$ = _$au.charCodeAt(_$iK),
                _$fP[_$_a++] = _$hR[_$cW] | _$hn[_$k$]) : 0;
    } else {
        0;
    }
    return _$fP;
}

function _$$V_844(_$b6, _$cN) {
    _$ak = 0, _$jq = _$b6.length - _$b6.length % 8;
    for (_$is = _$ak < _$jq; !!_$is; _$is = _$ak < _$jq) {
        for (_$_I = 0; _$_I < 8; _$_I++, _$ak++) {
            _$b6[_$ak] ^= _$cN[_$_I];
        }
    }
    _$jq = _$b6.length;
    for (_$_I = 0; _$ak < _$jq; _$_I++, _$ak++) {
        _$b6[_$ak] ^= _$cN[_$_I];
    }
    return _$b6;
}

function genKey(res) {
    xor_key = [0, 2, 54, 52, 0, 2, 54, 52];
    length = res[0] << 8 | res[1];
    arr = res.slice(2 + length)
    key = []
    for (let i = 1; i < 9; i++) {
        key.push(xor_key[i - 1] ^ arr[i])
    }
    key = [key[key.length - 1], ...key.slice(0, length - 1)]
    return key;
}

function _$cV() {
    var _$dm, _$bT, _$c8, _$ku;
    _$bT = [];
    for (_$c8 = 0; _$c8 < 256; _$c8++) {
        _$dm = _$c8;
        for (_$ku = 0; _$ku < 8; _$ku++) {
            _$dm = _$dm & 1 ? 0xedb88320 ^ _$dm >>> 1 : _$dm >>> 1;
        }
        _$bT[_$c8] = _$dm;
    }
    return _$bT;
}

function _$bK(_$au, _$fB) {
    typeof _$fB !== 'number' ? _$fB = 0 : 0,
        _$au["push"](_$fB >> 24 & 255),
        _$au["push"](_$fB >> 16 & 255),
        _$au["push"](_$fB >> 8 & 255),
        _$au["push"](_$fB & 255);
}

function _$fO(_$kf, _$aI) {
    typeof _$aI !== 'number' ? _$aI = 0 : 0,
        _$kf['push']((_$aI >> 24) & 255),
        _$kf['push']((_$aI >> 16) & 255),
        _$kf['push']((_$aI >> 8) & 255),
        _$kf['push'](_$aI & 255);
}

function _$dN(_$au, _$fB) {
    var _$fP, _$d1;
    typeof _$fB !== "number" || _$fB < 0 ? _$fB = 0 : 0, _$fP = _$fB / 4294967296, _$d1 = _$fB % 4294967296, _$au['push'](_$fP >> 24 & 255), _$au['push'](_$fP >> 16 & 255), _$au['push'](_$fP >> 8 & 255), _$au['push'](_$fP & 255), _$au['push'](_$d1 >> 24 & 255), _$au['push'](_$d1 >> 16 & 255), _$au['push'](_$d1 >> 8 & 255), _$au['push'](_$d1 & 255);
}

function _$du(_$au) {
    return unescape(encodeURIComponent(_$au));
}

function _$kh() {
    var _$au, _$fB, _$fP, _$d1;
    _$fB = [];
    for (_$fP = 0; _$fP < 256; _$fP++) {
        _$au = _$fP;
        for (_$d1 = 0; _$d1 < 8; _$d1++) {
            _$au = _$au & 1 ? 3988292384 ^ _$au >>> 1 : _$au >>> 1;
        }
        _$fB[_$fP] = _$au;
    }
    return _$fB;
}

_$fA = []
_$fA[27] = {}

function _$gg(_$au) {
    var _$fB, _$fP, _$d1, _$cW;
    typeof _$au === "string" ? _$au = _$eN(_$au) : 0, _$fB = _$fA[27]._$c$ || (_$fA[27]._$c$ = _$kh()), _$fP = 0 ^ -1, _$d1 = _$au.length;
    for (_$cW = 0; _$cW < _$d1;) {
        _$fP = _$fP >>> 8 ^ _$fB[(_$fP ^ _$au[_$cW++]) & 255];
    }
    return (_$fP ^ -1) >>> 0;
}


function _$eN(_$au) {
    var _$fB, _$fP, _$d1;
    _$fP = 0, _$au = _$du(_$au), _$d1 = _$au.length, _$fB = new Array(_$d1), _$d1 -= 3;
    while (_$fP < _$d1) {
        _$fB[_$fP] = String.prototype.charCodeAt.call(_$au, _$fP++);
        _$fB[_$fP] = String.prototype.charCodeAt.call(_$au, _$fP++);
        _$fB[_$fP] = String.prototype.charCodeAt.call(_$au, _$fP++);
        _$fB[_$fP] = String.prototype.charCodeAt.call(_$au, _$fP++);
    }
    _$d1 += 3;
    while (_$fP < _$d1) {
        _$fB[_$fP] = String.prototype.charCodeAt.call(_$au, _$fP++);
    }
    return _$fB;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_100_Math_random() {
    var randmArr100 = [];
    for (var i = 0; i < 100; i++) {
        randmArr100.push(Math.random())
    }
    var sum = 0; // 和
    var s = 0;
    for (var i = 0; i < randmArr100.length; i++) {
        sum += randmArr100[i] // 求和
    }
    ave = sum / randmArr100.length; // 平均值
    for (var j = 0; j < randmArr100.length; j++) {
        s += Math.pow((ave - randmArr100[j]), 2); //实现数组的交错求和
    }
    return [Math.round(ave * 100), Math.round(Math.sqrt((s / randmArr100.length)) * 100)]// 开平方
}

function get_id0_arr(rc) {
    // _$fB = _$i$(rc);
    // _$fP = _$dZ(_$fB["slice"](0, 4));
    // _$fB = _$fB["slice"](4);
    // _$fB = _$eb(_$fB, _$il());
    // _$fB = _$hI(_$fB);
    // _$fB = JSON.parse(_$fB);
    // // 五组取值顺序为
    // arr1 = _$fB.pfb0[2]
    // arr2 = _$fB.pfc0[2]
    // arr3 = _$fB.pfd0[2]
    // arr4 = _$fB.pfe0[2]
    // arr5 = _$fB.pfb2_0[2]
    // return [arr1, arr2, arr3, arr4, arr5, _$fB['fa0-13'][2]];
    // 暂时写死
    return [
        [65, 228, 138, 90, 186, 103, 131, 25, 191, 240, 171, 81, 74, 193, 111, 216, 64, 66, 218, 248],
        [20, 116, 90, 166, 222, 177, 205, 255, 19, 15, 222, 198, 193, 111, 240, 28, 177, 70, 64, 91],
        [25, 214, 16, 206, 189, 3, 250, 25, 114, 89, 223, 34, 36, 246, 215, 56, 242, 253, 238, 199],
        [131, 132, 185, 175, 191, 126, 10, 199, 107, 208, 62, 166, 216, 2, 12, 199, 213, 110, 161, 81],
        [154, 44, 240, 111, 101, 152, 114, 44, 229, 201, 11, 0, 218, 36, 103, 53, 142, 198, 221, 242],
        [0]
    ]
}

function get_id4_arr() {
    _$_7 = [];
    _$_C = 1
    _$eA = 456
    _$kA = 5
    _$h6 = 0;
    _$$h = 0;
    _$fD = 0;
    _$jA = 14;
    _$em = 203;
    _$fM = 35691;
    _$bC = 125585;
    _$fC = 0;
    _$bm = 18;
    // _$_C记录键盘按下的次数
    _$gX(_$_7, _$_C);
    // _$eA为鼠标移动事件的次数
    _$gX(_$_7, _$eA);
    // _$kA 为点击事件的次数
    _$gX(_$_7, _$kA);
    // 暂时不知 真实调试下为0
    _$gX(_$_7, _$h6);
    // 暂时不知 真实调试下为0
    _$gX(_$_7, _$$h);
    // 暂时不知 真实调试下为0
    _$gX(_$_7, _$fD);
    // _$jA用到id4加密完成后这个次数会+1
    _$gX(_$_7, _$jA);
    // _$em为滚动事件的次数
    _$gX(_$_7, _$em);
    // 鼠标抬起mouseup用时除以"mouseup"次数_$kh
    _$gX(_$_7, _$fM);
    // _$bC为 键盘按下事件的用时除以次数_$_C
    _$gX(_$_7, _$bC);
    // 暂时不知 真实调试下为0
    _$gX(_$_7, _$fC);
    // 冒泡事件 计算出来的一个事随机10-50应该可以
    // _$bm = parseInt(Math.sqrt(Math.pow(_$_7["clientX"] - _$aw, 2) + Math.pow(_$_7["clientY"] - _$_B, 2)));
    _$gX(_$_7, _$bm);
    return _$_7;
}

function get_id1_arr() {
    _$bp = _$fH();
    _$bp._$eO();
    for (var i = 0; i < getRandomInt(20, 40); i++) {
        _t = getRandomInt(1000, 2000) + Math.random();
        _x = getRandomInt(100, 800);
        _y = getRandomInt(100, 500);
        _t += getRandomInt(10, 80) + Math.random();
        _$kf = {
            isTrusted: true,
            clientX: _x,
            clientY: _y,
            screenX: _x,
            screenY: _y,
            x: _x,
            y: _y,
            type: "mousemove",
            button: 0,
            buttons: 0,
            timeStamp: _t
        }
        _$bp._$hy(0, _$kf);
    }
    _x = getRandomInt(100, 800);
    _y = getRandomInt(100, 500);
    _t += getRandomInt(10, 80) + Math.random();
    _$kf = {
        isTrusted: true,
        clientX: _x,
        clientY: _y,
        screenX: _x,
        screenY: _y,
        x: _x,
        y: _y,
        type: "mousedown",
        button: 0,
        buttons: 1,
        timeStamp: _t
    }
    track_arr = [];
    _$bp._$hy(1, _$kf);
    _$bp._$jJ(track_arr);
//     console.log(track_arr);
    return track_arr;
}

// ================================================================= 下面是加密最终数组部分


_$h4 = {}
_$h4[19] = {}

// 这个字符串5代也是一样的
_$kv = "qrcklmDoExthWJiHAp1sVYKU3RFMQw8IGfPO92bvLNj.7zXBaSnu0TC6gy_4Ze5d{}|~ !#$%()*+,-;=?@[]^".split("")

function RS_func_62(_$49) {
    return [_$49 >>> 24 & 0xFF, _$49 >>> 16 & 0xFF, _$49 >>> 8 & 0xFF, _$49 & 0xFF];
}

function RS_func_42() {
    return Math["ceil"](new Date()["getTime"]() / 1000);
}

function _$a$(_$dm) {
    return unescape(encodeURIComponent(_$dm));
}

var _$jQ;
_$iw()

function _$aq(_$dm) {
    return Math.floor(Math.random() * _$dm);
}

function _$a6() {
    return [_$aq(0xffffffff), _$aq(0xffffffff), _$aq(0xffffffff), _$aq(0xffffffff)];
}

function _$cV() {
    var _$dm, _$bT, _$c8, _$ku;
    _$bT = [];
    for (_$c8 = 0; _$c8 < 256; _$c8++) {
        _$dm = _$c8;
        for (_$ku = 0; _$ku < 8; _$ku++) {
            _$dm = _$dm & 1 ? 0xedb88320 ^ _$dm >>> 1 : _$dm >>> 1;
        }
        _$bT[_$c8] = _$dm;
    }
    return _$bT;
}

function RS_func_226(_$49) {
    var RS_var_662 = _$49.length / 4, RS_var_663 = 0, RS_var_664 = 0, RS_var_665 = _$49.length;
    var RS_var_666 = new Array(RS_var_662);

    while (RS_var_663 < RS_var_665) {
        RS_var_666[RS_var_664++] = _$49[RS_var_663++] << 24 | _$49[RS_var_663++] << 16 | _$49[RS_var_663++] << 8 | _$49[RS_var_663++];
    }

    return RS_var_666;
}

function _$eL(_$dm) {
    var _$bT, _$c8, _$ku, _$cH;
    typeof _$dm === "string" ? _$dm = _$b_(_$dm) : 0, _$bT = _$h4[19]._$hv || (_$h4[19]._$hv = _$cV()), _$c8 = 0 ^ -1, _$ku = _$dm.length;
    for (_$cH = 0; _$cH < _$ku;) {
        _$c8 = _$c8 >>> 8 ^ _$bT[(_$c8 ^ _$dm[_$cH++]) & 255];
    }
    return (_$c8 ^ -1) >>> 0;
}

function _$cv(_$bT) {
    let _$dm = [];
    typeof _$bT !== "number" ? _$bT = 0 : 0, _$dm.push(_$bT >> 24 & 255), _$dm.push(_$bT >> 16 & 255), _$dm.push(_$bT >> 8 & 255), _$dm.push(_$bT & 255);
    return _$dm;
}

function _$gm(_$dm) {
    var _$bT, _$c8, _$ku, _$cH, _$dQ, _$gR;
    _$bT = _$dm.length;
    _$c8 = 0;
    _$ku = 0;
    _$cH = _$dm.length * 4;
    _$gR = new Array(_$cH);
    while (_$c8 < _$bT) {
        _$dQ = _$dm[_$c8++], _$gR[_$ku++] = _$dQ >>> 24 & 255, _$gR[_$ku++] = _$dQ >>> 16 & 255, _$gR[_$ku++] = _$dQ >>> 8 & 255, _$gR[_$ku++] = _$dQ & 255;
    }
    return _$gR;
}

function _$gZ(_$dm, _$bT) {
    return [_$dm[0] ^ _$bT[0], _$dm[1] ^ _$bT[1], _$dm[2] ^ _$bT[2], _$dm[3] ^ _$bT[3]];
}

function RS_func_60(_$49) {
    var RS_var_286 = _$49["slice"](0);

    if (RS_var_286.length < 5) {
        return;
    }

    var RS_var_287 = RS_var_286.pop();
    var RS_var_288 = 0, RS_var_289 = RS_var_286.length;

    while (RS_var_288 < RS_var_289) {
        RS_var_286[RS_var_288++] ^= RS_var_287;
    }

    var RS_var_290 = RS_var_286.length - 4;
    var RS_var_291 = RS_func_42() - RS_func_226(RS_var_286["slice"](RS_var_290))[0];
    RS_var_286 = RS_var_286["slice"](0, RS_var_290);

    var RS_var_292 = Math.floor(Math.log(RS_var_291 / 1.164 + 1));
    // var RS_var_292 = Math.floor(Math.log(RS_var_291 / 11.678 + 1));
    // var RS_var_292 = 0;

    var RS_var_293 = RS_var_286.length;
    // var RS_var_294 = [0, RS_var_64._$cz][RS_var_83];
    var RS_var_294 = [0, 0][1];
    RS_var_288 = 0;

    while (RS_var_288 < RS_var_293) {
        RS_var_286[RS_var_288] = RS_var_292 | RS_var_286[RS_var_288++] ^ RS_var_294;
    }

    RS_func_172(8, RS_var_292);
    return RS_var_286;
}


function _$an(_$dm, _$bT, _$c8, _$ku) {
    var _$cH, _$dQ, _$gR, _$iv, _$jK, _$$y, _$kC, _$dA, _$j4, _$hD, _$cW, _$bq, _$$e, _$_S, _$bA, _$bu, _$br;
    _$cH = _$dm[_$c8], _$dQ = _$bT[0] ^ _$cH[0], _$gR = _$bT[_$c8 ? 3 : 1] ^ _$cH[1], _$iv = _$bT[2] ^ _$cH[2], _$jK = _$bT[_$c8 ? 1 : 3] ^ _$cH[3], _$j4 = _$cH.length / 4 - 2, _$cW = 4, _$bq = [0, 0, 0, 0], _$$e = _$ku[0], _$_S = _$ku[1], _$bA = _$ku[2], _$bu = _$ku[3], _$br = _$ku[4];
    for (_$hD = 0; _$hD < _$j4; _$hD++) {
        _$$y = _$$e[_$dQ >>> 24] ^ _$_S[_$gR >> 16 & 255] ^ _$bA[_$iv >> 8 & 255] ^ _$bu[_$jK & 255] ^ _$cH[_$cW], _$kC = _$$e[_$gR >>> 24] ^ _$_S[_$iv >> 16 & 255] ^ _$bA[_$jK >> 8 & 255] ^ _$bu[_$dQ & 255] ^ _$cH[_$cW + 1], _$dA = _$$e[_$iv >>> 24] ^ _$_S[_$jK >> 16 & 255] ^ _$bA[_$dQ >> 8 & 255] ^ _$bu[_$gR & 255] ^ _$cH[_$cW + 2], _$jK = _$$e[_$jK >>> 24] ^ _$_S[_$dQ >> 16 & 255] ^ _$bA[_$gR >> 8 & 255] ^ _$bu[_$iv & 255] ^ _$cH[_$cW + 3], _$cW += 4, _$dQ = _$$y, _$gR = _$kC, _$iv = _$dA;
    }
    for (_$hD = 0; _$hD < 4; _$hD++) {
        _$bq[_$c8 ? 3 & -_$hD : _$hD] = _$br[_$dQ >>> 24] << 24 ^ _$br[_$gR >> 16 & 255] << 16 ^ _$br[_$iv >> 8 & 255] << 8 ^ _$br[_$jK & 255] ^ _$cH[_$cW++], _$$y = _$dQ, _$dQ = _$gR, _$gR = _$iv, _$iv = _$jK, _$jK = _$$y;
    }
    return _$bq;
}

function _$ae(_$dm) {
    var _$bT, _$c8, _$ku, _$cH, _$dQ;
    _$bT = _$dm.length / 4, _$c8 = 0, _$ku = 0, _$cH = _$dm.length, _$dQ = new Array(_$bT);
    while (_$c8 < _$cH) {
        _$dQ[_$ku++] = _$dm[_$c8++] << 24 | _$dm[_$c8++] << 16 | _$dm[_$c8++] << 8 | _$dm[_$c8++];
    }
    return _$dQ;
}

function RS_func_172(_$49, _$7k) {
    // 里面的两个值都是检测东西得到的
    var RS_var_110 = 0, RS_var_111 = 0;
    RS_var_110 |= _$49;
    if (_$7k) RS_var_111 |= _$49;
}

function _$dU(_$dm, _$bT, _$c8) {
    var _$ku, _$cH, _$dQ, _$gR, _$iv, _$jK, _$$y, _$kC, _$dA, _$j4;
    _$ku = _$dm, _$dm.length % 16 !== 0 ? _$ku = RS_func_60(_$dm) : 0, _$cH = _$ae(_$ku), _$kC = _$bT[4], _$dA = _$cH.length, _$j4 = 1, _$jK = _$cH.slice(0), _$$y = [];
    for (_$dQ = _$dA; _$dQ < 4 * _$dA + 28; _$dQ++) {
        _$iv = _$jK[_$dQ - 1];
        _$dQ % _$dA === 0 || _$dA === 8 && _$dQ % _$dA === 4 ?
            (_$iv = _$kC[_$iv >>> 24] << 24 ^ _$kC[_$iv >> 16 & 255] << 16 ^ _$kC[_$iv >> 8 & 255] << 8 ^ _$kC[_$iv & 255], _$dQ % _$dA === 0 ? (_$iv = _$iv << 8 ^ _$iv >>> 24 ^ _$j4 << 24, _$j4 = _$j4 << 1 ^ (_$j4 >> 7) * 283) : 0) : 0, _$jK[_$dQ] = _$jK[_$dQ - _$dA] ^ _$iv;
    }
    for (_$gR = 0; _$dQ; _$gR++, _$dQ--) {
        _$iv = _$jK[_$gR & 3 ? _$dQ : _$dQ - 4], _$dQ <= 4 || _$gR < 4 ? _$$y[_$gR] = _$iv : _$$y[_$gR] = _$c8[0][_$kC[_$iv >>> 24]] ^ _$c8[1][_$kC[_$iv >> 16 & 255]] ^ _$c8[2][_$kC[_$iv >> 8 & 255]] ^ _$c8[3][_$kC[_$iv & 255]];
    }
    return [_$jK, _$$y];
}

function _$dp(_$dm, _$bT, _$c8) {
    var _$ku, _$cH, _$dQ, _$gR, _$iv, _$jK, _$$y, _$kC, _$dA, _$j4, _$hD, _$cW, _$bq;
    _$ku = _$bT[4], _$cH = _$c8[4], _$jK = [], _$$y = [];
    for (_$dQ = 0; _$dQ < 256; _$dQ++) {
        _$$y[(_$jK[_$dQ] = _$dQ << 1 ^ (_$dQ >> 7) * 283) ^ _$dQ] = _$dQ;
    }
    for (_$gR = _$iv = 0; !_$ku[_$gR]; _$gR ^= _$kC || 1, _$iv = _$$y[_$iv] || 1) {
        _$hD = _$iv ^ _$iv << 1 ^ _$iv << 2 ^ _$iv << 3 ^ _$iv << 4, _$hD = _$hD >> 8 ^ _$hD & 255 ^ 99, _$ku[_$gR] = _$hD, _$cH[_$hD] = _$gR, _$kC = _$jK[_$gR];
    }
    for (_$dQ = 0; _$dQ < 256; _$dQ++) {
        _$cH[_$ku[_$dQ]] = _$dQ;
    }
    for (_$gR = 0; _$gR < 256; _$gR++) {
        _$hD = _$ku[_$gR], _$j4 = _$jK[_$dA = _$jK[_$kC = _$jK[_$gR]]], _$bq = _$j4 * 0x1010101 ^ _$dA * 65537 ^ _$kC * 257 ^ _$gR * 0x1010100, _$cW = _$jK[_$hD] * 257 ^ _$hD * 0x1010100;
        for (_$dQ = 0; _$dQ < 4; _$dQ++) {
            _$bT[_$dQ][_$gR] = _$cW = _$cW << 24 ^ _$cW >>> 8, _$c8[_$dQ][_$hD] = _$bq = _$bq << 24 ^ _$bq >>> 8;
        }
    }
    for (_$dQ = 0; _$dQ < 5; _$dQ++) {
        _$bT[_$dQ] = _$bT[_$dQ].slice(0), _$c8[_$dQ] = _$c8[_$dQ].slice(0);
    }
}

function _$iw() {
    var _$ki, _$$O;
    _$ki = [[], [], [], [], []], _$$O = [[], [], [], [], []], _$jQ = _$dm;

    function _$dm(_$dm) {
        return [_$ki, _$$O];
    }
}

function _$fp(_$dm, _$bT) {
    typeof _$bT !== "number" || _$bT < 0 ? _$bT = 0 : _$bT > 0xffffffff ? _$bT = 0xffffffff : 0;
    _$bT <= 127 ?
        _$dm.push(_$bT) : _$bT <= 16383 ?
            (_$dm.push(_$bT >> 8 & 255 | 128), _$dm.push(_$bT & 255)) : _$bT <= 0x1fffff ? (_$dm.push(_$bT >> 16 & 255 | _$km[46]), _$dm.push(_$bT >> 8 & 255), _$dm.push(_$bT & 255)) : _$bT <= _$km[115] ? (_$dm.push(_$bT >> 24 & 255 | _$km[36]), _$dm.push(_$bT >> 16 & 255), _$dm.push(_$bT >> 8 & 255), _$dm.push(_$bT & 255)) : (_$dm.push(_$km[7]), _$dm.push(_$bT >> 24 & 255), _$dm.push(_$bT >> 16 & 255), _$dm.push(_$bT >> 8 & 255), _$dm.push(_$bT & 255));
}

function _$cS(_$dm, _$bT) {
    var _$c8, _$ku;
    for (_$c8 = 0; _$c8 < _$bT.length; _$c8++) {
        _$ku = _$bT[_$c8], typeof _$ku !== "number" || _$ku < 0 ? _$ku = 0 : _$ku > 255 ? _$ku = 255 : 0, _$dm.push(_$bT[_$c8]);
    }
}

function _$hJ(_$dm, _$bT) {
    _$fp(_$dm, _$bT.length);
    _$cS(_$dm, _$bT);
}

function RS_func_59(_$49) {
    var RS_var_284 = Math["ceil"](Math["random"]() * 256);
    _$49 = _$49["concat"](RS_func_62(RS_func_42()));

    for (var RS_var_285 = 0; RS_var_285 < _$49.length; RS_var_285++) {
        _$49[RS_var_285] ^= RS_var_284;
    }

    _$49[RS_var_285] = RS_var_284;
    return _$49;
}

var _$eZ, _$c8;

function _$aM() {
    var _$ki, _$$O;
    // _$eZ;
    _$$O = _$dm(), _$eZ = {}, _$kj(_$$O, {
        _$_0: 0,
        _$aS: 0
    }, _$eZ), _$ki = _$bT(_$eZ);

    // _$h4[39] = _$c8, _$h4[37] = _$ku;
    function _$dm() {
        var _$aB, _$dm, _$c8, _$ku, _$cH;
        _$aB = [];
        for (_$dm = 1; _$dm < 255; _$dm++) {
            _$aB.push({
                _$$v: 1,
                _$fo: _$dm
            });
        }
        _$aB.push({
            _$$v: 6,
            _$fo: 255
        }), _$aB.push({
            _$$v: 45,
            _$fo: 0
        });

        function _$bT(_$dm) {
            var _$bT;
            for (_$bT = 0; _$bT < _$aB.length; _$bT++) {
                if (_$dm._$$v <= _$aB[_$bT]._$$v) {
                    _$aB.splice(_$bT, 0, _$dm);
                    return;
                }
            }
            _$aB.push(_$dm);
        }

        while (_$aB.length > 1) {
            _$c8 = _$aB.slice(0, 2);
            _$ku = _$c8[0];
            _$cH = _$c8[1];
            _$aB = _$aB.slice(2);
            _$bT({
                _$$v: _$ku._$$v + _$cH._$$v,
                _$i2: _$ku,
                _$f1: _$cH
            });
        }
        return _$aB[0];
    }

    function _$kj(_$dm, _$bT, _$c8) {
        if (_$dm._$fo == null) {
            _$kj(_$dm._$i2, {
                _$_0: _$bT._$_0 << 1,
                _$aS: _$bT._$aS + 1
            }, _$c8);
            _$kj(_$dm._$f1, {
                _$_0: (_$bT._$_0 << 1) + 1,
                _$aS: _$bT._$aS + 1
            }, _$c8);
        } else {
            _$c8[_$dm._$fo] = _$bT;
        }
    }

    function _$bT(_$dm) {
        var _$bT;
        for (_$bT in _$dm) {
            if (_$dm[_$bT]._$aS >= 8) return _$dm[_$bT]._$_0 >> _$dm[_$bT]._$aS - 8;
        }
    }

    function _$g1(_$dm, _$bT) {
        var _$c8, _$ku, _$cH, _$dQ, _$gR, _$iv;
        _$c8 = [], _$ku = _$dm.length, _$cH = 0, _$dQ = 0;
        for (_$gR = 0; _$gR < _$ku; _$gR++) {
            _$iv = _$bT[_$dm[_$gR]], _$cH = _$cH << _$iv._$aS | _$iv._$_0, _$dQ += _$iv._$aS;
            while (_$dQ >= 8) {
                _$c8.push(_$cH >> _$dQ - 8), _$cH &= ~(255 << _$dQ - 8), _$dQ -= 8;
            }
        }
        if (_$dQ > 0) {
            _$c8.push(_$cH << 8 - _$dQ | _$ki >> _$dQ);
        } else {
            0;
        }
        return _$c8;
    }

    function _$$s(_$dm, _$bT) {
        var _$c8, _$ku, _$cH, _$dQ, _$gR, _$iv;
        _$c8 = [], _$ku = _$dm, _$cH = _$bT.length, _$dQ = 0, _$gR = 0;
        for (_$iv = 0; _$iv < _$cH; _$iv++) {
            _$dQ = _$bT[_$iv], _$gR = 1 << _$km[23];
            while (_$gR > 0) {
                _$dQ & _$gR ? _$ku = _$ku._$f1 : _$ku = _$ku._$i2, _$gR >>= 1, _$ku._$fo != null ? (_$c8.push(_$ku._$fo), _$ku = _$dm) : 0;
            }
        }
        return _$c8;
    }

    _$c8 = function _$c8(_$dm) {
        return _$g1(_$dm, _$eZ);
    }

    function _$ku(_$dm) {
        return _$$s(_$$O, _$dm);
    }
}

_$aM()

function _$dY(_$dm, _$bT) {
    var _$c8, _$ki, _$$O, _$eZ, _$dQ;
    _$c8 = _$jQ();
    _$ki = _$c8[0];
    _$$O = _$c8[1];
    !_$ki[0][0] && !_$ki[0][1] ? _$dp(_$bT, _$ki, _$$O) : 0;
    _$eZ = _$dU(_$dm, _$ki, _$$O);

    function _$ku(_$dm, _$bT) {
        var _$c8, _$ku, _$cH, _$dQ, _$gR, _$iv, _$jK, _$$y;
        _$c8 = Math.floor(_$dm.length / 16) + 1;
        _$dQ = [];
        _$gR = 16 - _$dm.length % 16;
        _$bT ? _$dQ = _$iv = _$a6() : 0;
        _$$y = _$dm.slice(0);
        _$jK = _$dm.length + _$gR;
        for (_$ku = _$dm.length; _$ku < _$jK;) {
            _$$y[_$ku++] = _$gR;
        }
        _$$y = _$ae(_$$y);
        for (_$ku = 0; _$ku < _$c8;) {
            _$jK = _$$y.slice(_$ku << 2, ++_$ku << 2);
            _$jK = _$iv ? _$gZ(_$jK, _$iv) : _$jK;
            _$iv = _$an(_$eZ, _$jK, 0, _$ki);
            for (_$cH = 0; _$cH < _$iv.length; _$cH++) {
                _$dQ.push(_$iv[_$cH]);
            }
        }
        return _$gm(_$dQ);
    }

    function _$cH(_$dm, _$bT) {
        var _$c8, _$ku, _$cH, _$dQ, _$gR, _$iv, _$jK, _$$y;
        _$iv = [], _$dm = _$ae(_$dm), _$bT ? (_$$y = _$dm.slice(0, 4), _$dm = _$dm.slice(4)) : 0, _$c8 = _$dm.length / 4;
        for (_$ku = 0; _$ku < _$c8;) {
            _$gR = _$dm.slice(_$ku << 2, ++_$ku << 2), _$dQ = _$an(_$eZ, _$gR, 1, _$$O), _$$y ? _$dQ = _$gZ(_$dQ, _$$y) : 0;
            for (_$cH = 0; _$cH < _$dQ.length; _$cH++) {
                _$iv.push(_$dQ[_$cH]);
            }
            _$$y = _$gR;
        }
        _$iv = _$gm(_$iv), _$jK = _$iv[_$iv.length - 1];
        return _$iv.slice(0, _$iv.length - _$jK);
    }

    _$dQ = {}, _$dQ._$bj = _$ku, _$dQ._$h$ = _$cH;
    return _$dQ;
}

function _$jT(_$au, _$fB, _$fP) {
    var _$d1;
    for (_$d1 = 0; _$d1 < _$fP; _$d1++) {
        _$au[_$d1] ^= _$fB[_$d1];
    }
}

function _$bL(_$dm, _$bT, _$c8, _$ku) {
    var _$cH, _$c8, _$ku, _$dQ;
    typeof _$dm === "string" ? _$dm = _$b_(_$dm) : 0;
    _$cH = arguments.length;
    _$c8 = _$cH > 2 ? arguments[2] : 1;
    _$ku = _$cH > 3 ? arguments[3] : 0;
    _$dQ = _$dY(_$bT, _$ku);
    return _$dQ._$bj(_$dm, _$c8);
}

// 最后转成string
function _$aH(_$dm, _$bT) {
    var _$hT;
    var _$c8, _$ku, _$cH, _$dQ, _$gR, _$iv;
    typeof _$dm === "string" ? _$dm = _$b_(_$dm) : 0,
        _$bT = _$bT || _$kv,
        _$ku = 0, _$cH = 0,
        _$dQ = _$dm.length,
        _$c8 = new Array(Math.ceil(_$dQ * 4 / 3)),
        _$dQ = _$dm.length - 2;
    while (_$ku < _$dQ) {
        _$gR = _$dm[_$ku++], _$c8[_$cH++] = _$bT[_$gR >> 2],
            _$iv = _$dm[_$ku++],
            _$c8[_$cH++] = _$bT[(_$gR & 3) << 4 | _$iv >> 4],
            _$gR = _$dm[_$ku++], _$c8[_$cH++] = _$bT[(_$iv & 15) << 2 | _$gR >> 6], _$c8[_$cH++] = _$bT[_$gR & 63];
    }
    if (_$ku < _$dm.length) {
        _$gR = _$dm[_$ku], _$c8[_$cH++] = _$bT[_$gR >> 2], _$iv = _$dm[++_$ku], _$c8[_$cH++] = _$bT[(_$gR & 3) << 4 | _$iv >> 4], _$iv !== _$hT ? _$c8[_$cH++] = _$bT[(_$iv & 15) << 2] : 0;
    } else {
        0;
    }
    var res = _$c8.join('');
    // console.log('-'.repeat(50))
    // console.log(res, res.length)
    return res;
}

function _$bM(_$cr, _$aP) {
    typeof _$aP !== "number" ? _$aP = 0 : 0,
        _$cr["push"]((_$aP >> 24) & 255),
        _$cr["push"]((_$aP >> 16) & 255),
        _$cr["push"]((_$aP >> 8) & 255),
        _$cr["push"](_$aP & 255);
}

function _$hN(_$cr, _$aP) {
    _$cr["push"](_$aP >> 8),
        _$cr["push"](_$aP & 255);
}


function _$bN(_$cr) {
    return unescape(encodeURIComponent(_$cr));
}

function _$$S(_$cr) {
    var _$aP, _$eB, _$dN;
    _$eB = 0,
        _$cr = _$bN(_$cr),
        _$dN = _$cr["length"],
        _$aP = new Array(_$dN),
        _$dN -= 3;
    while (_$eB < _$dN)
        _$aP[_$eB] = String.prototype.charCodeAt["call"](_$cr, _$eB++),
            _$aP[_$eB] = String.prototype.charCodeAt["call"](_$cr, _$eB++),
            _$aP[_$eB] = String.prototype.charCodeAt["call"](_$cr, _$eB++),
            _$aP[_$eB] = String.prototype.charCodeAt["call"](_$cr, _$eB++);
    _$dN += 3;
    while (_$eB < _$dN)
        _$aP[_$eB] = String.prototype.charCodeAt["call"](_$cr, _$eB++);
    return _$aP;
}


// function getCookie(cd, vars_arr, arr380_42, bigFunc, captchaId = null, pCode = null) {
function getCookie(cd, vars_arr, arr380_42, bigFunc, captchaData = null, checkyzmPath = null) {
    // captchaData 校验链接 eg: captchaId=f5df9111688f4c389ca04dad351fbb92&pCode=abce
    // checkyzmPath /zhixing/checkyzm?

    // 从HTML和js文件中获取几个后续要用的值
    function _$$V() {
        // arr37[16];
        // arr37_16 = [75,44,109,75,245,83,96,38,218,185,153,243,117,12,177,126];
        dt = Math["ceil"]((new Date())["getTime"]() / 1000)
        arr4 = _$dC(dt);
        random_str = parseInt(Math.random() * 256);
        fina_arr = arr37_16.concat(arr4);
        for (var i = 0; i < fina_arr.length; i++) {
            fina_arr[i] = fina_arr[i] ^ random_str
        }
        fina_arr.push(random_str);
        return fina_arr
    }

    function get_arr37(cd) {
        res = _$i$(cd)
        anotherKey = genKey(res)
        res = _$$V_844(res.slice(2 + (res[0] << 8 | res[1])), anotherKey)
        let arr37 = []
        index = 1
        for (let i = 0; i < res[0]; i++) {
            length = res[index++] << 8 | res[index++]
            arr37.push(res.slice(index, index + length));
            index += length;
        }
        // console.log(arr37);
        return arr37;
    }


    function get_id2_arr() {
        // index_value_map = {
        //     '0': 203,
        //     '1': 102,
        //     '2': 224,
        //     '3': 108,
        //     '4': 180,
        //     '5': 102,
        //     '6': 181,
        //     '7': 181,
        //     '8': 126,
        //     '10': 225,
        //     '11': 208,
        //     '13': 203,
        //     '14': 240,
        //     '15': 100,
        //     '16': 127,
        //     '18': 103,
        //     '22': 0,
        //     '25': 11,
        //     '28': 103,
        //     '32': 101
        // }
        _29_vname = String.fromCharCode(...arr_37_29)
        _30_vname = String.fromCharCode(...arr_37_30)
        _31_vname = String.fromCharCode(...arr_37_31)
        _32_vname = String.fromCharCode(...arr_37_32)
        // 变量名大数组
        // _$hJ变量名大数组即$_ts.cp[1]
        // let _$hJ = []
        _29_vname_index = vars_arr.indexOf(_29_vname)
        _30_vname_index = vars_arr.indexOf(_30_vname)
        _31_vname_index = vars_arr.indexOf(_31_vname)
        _32_vname_index = vars_arr.indexOf(_32_vname)
        // // index 是arr37的29 30 31 32的值转为对应ASCII字符在变量名大数组中的索引
        // _29_vname_index = 11
        // _30_vname_index = 10
        // _31_vname_index = 8
        // _32_vname_index = 5

        id2_arr = [
            index_value_map[_29_vname_index],
            index_value_map[_30_vname_index],
            index_value_map[_31_vname_index],
            index_value_map[_32_vname_index]
        ]
        return id2_arr;
    }

    function check_alg(func_arr56, bigFunc) {
        // '34' 来源37数组中33索引的数组转换而来
        // '49' 来源37数组中34索引的数组转换而来
        // _$gG->56数组中34的值
        // arr37_33 = [51, 52];
        // arr37_34 = [52, 57];
        let _$gG = func_arr56[String.fromCharCode(...arr37_33)]
        let _$$V = bigFunc;
        r1 = _$gG.toString();
        r2 = _$eN(r1)
        r3 = _$gg(r2);
        rt = r3;
        // _$$V来源380数组中205
        r1 = _$$V.toString().length;
        r2 = r1 / 100;
        r3 = parseInt(r2);
        // r4 = r3 * '49';
        r4 = r3 * String.fromCharCode(...arr37_34);
        r5 = _$$V.toString().substr(r4, r3)
        r6 = _$eN(r5);
        r7 = _$gg(r6);

        r8 = rt ^ r7
        r9 = r8 & 65535
        return r9;
    }


    // function encrypt(arr_another_id2, arr_ids, captchaId = null, pCode = null) {
    function encrypt(arr_another_id2, arr_ids) {
        // captchaData 校验链接 eg: captchaId=f5df9111688f4c389ca04dad351fbb92&pCode=abce
        // checkyzmPath /zhixing/checkyzm?

        let encrypt1Arr = _$c8(arr_ids);
        let arr16_21 = RS_func_59(arr37_16); // 处理完还是21位，时间相关
        let flag2_arr = [2, arr_another_id2.length, ...arr_another_id2];
        _$hJ(flag2_arr, arr37_2);
        let encrypt_flag2 = flag2_arr
        _$jT(encrypt1Arr, arr37_2, 16);
        let arr17_21 = RS_func_59(arr37_17);
        let encrypt2Arr = _$bL(encrypt1Arr, arr17_21, 0); // 对
        _$hJ(encrypt_flag2, encrypt2Arr); // 对 44, 80 -> 125
        let encrypt3Arr = encrypt_flag2;
        let crc32_res = _$cv(_$eL(encrypt3Arr)); // 对
        _$cS(crc32_res, encrypt3Arr) // 对，其实就是把crc32的值放到数组前面
        encrypt3Arr = crc32_res;
        let res = _$bL(encrypt3Arr, arr16_21)
        let cookie = _$aH(res);
        return cookie;
    }

    function _$jq(_$cr, _$aP) {
        var _$eB, _$dN;
        _$eB = _$aP / 4294967296,
            _$dN = _$aP % 4294967296,
            _$cr['push']((_$eB >> 24) & 255),
            _$cr['push']((_$eB >> 16) & 255),
            _$cr['push']((_$eB >> 8) & 255),
            _$cr['push'](_$eB & 255),
            _$cr['push']((_$dN >> 24) & 255),
            _$cr['push']((_$dN >> 16) & 255),
            _$cr['push']((_$dN >> 8) & 255),
            _$cr['push'](_$dN & 255);
    }

    function _$fA(_$cr, _$aP, _$eB) {
        _$cr[_$aP] = (_$eB >> 24) & 255,
            _$cr[_$aP + 1] = (_$eB >> 16) & 255,
            _$cr[_$aP + 2] = (_$eB >> 8) & 255,
            _$cr[_$aP + 3] = _$eB & 255;
    }

    function _$e3(_$cr, _$aP, _$eB) {
        var _$dN;
        for (_$dN = 0; _$dN < _$eB; _$dN++)
            _$cr[_$dN] ^= _$aP[_$dN];
    }

    function _$im(_$cr) {
        var _$aP, _$eB, _$dN, _$_l;
        typeof _$cr === "string" ? _$cr = _$$S(_$cr) : 0,
            _$aP = _$cV();
        _$eB = 0 ^ -1,
            _$dN = _$cr["length"];
        for (_$_l = 0; _$_l < _$dN;)
            _$eB = (_$eB >>> 8) ^ _$aP[(_$eB ^ _$cr[_$_l++]) & 255];
        return (_$eB ^ -1) >>> 0;
    }

// ================================================================= 上面是要调用的js代码部分

// 初始化一些全局数组
    var _$go;
    _$_X();
// cd = "qWVerfAloP0lcGAmhAqrr10ocGAlhAEtrqW2qc0qhAltDkVmWGGlE10qlaAmhA3rckaqhAAzrAL3Hr9zqn0qcfGzraLlrc0mWG9wtOaqhAqzqAL3hAAtrqVzDalEHqqzqc0rcfGzrqLlrsAcqAVzqALlqOVmWGLlmsaRmnZhHqqUhaaZqc0chAWtq10rWG7lDkaqhAqzqAL3hp0trqVZqc0chAWtDc0qWGawDuaqhAAzrAL3Hqqzqn0qlSGZqc0DhAQtDc0lrc1Fqs3SrAVSJRLO1PqpCv9kfN763EZjjKBJ5eZGsrnQZe0PZAT2WJOJCyqqrkAoraDMhqroUva2pHG4MK2iVkYT_07uHsTOpUoSFCGepcVeKBpCMD9NFUxzePeXQD2.tCdBMCaNF6x.MMRzwK2NKvLzeoR7FYGJrGdcpVmDFvmnwFmTpur.RVSPCkGypumb3DhGFk70svTLWIl_YsyrM2RH.Vxb1Oy.w2MWRTmd39fp8H7gYsq6FKlTCCfkRlmjHlvgA2wzplpJJZW4FkgZJmqTuTzXUDQdYli03KxOHkECW4pNQuyOUbzOgv2jY6YGI0K03KxOHkECW4pNQuyfUOxn_oRUU6R5ICc03KxOHkECW4pNQugZWTRCjTN9FbRrYbj0FUW5pOJBQdxUKYTsYlYNLKzJWCm0QkH4QOQeMkSXKFf.FTJ9HbfNZkW41TJmA2O4Ws9SM9fShdffROaaJOVBZoq4p2x.JovZsUJwR0zlhdffROaaJOVBZoq4tCw23sPBWOE.M6AoqRLcWqVlWqQAZvw0wsZ0Jkc7WuQuWuZeiFLkrbwv3sg0jaWkJkWTraX.WuGCJkq5WFguqqlSJug6bfJhtKfWZ2h_xwjZvHpnk1zeqrK._2Q9uc2_8G1wrqDIrGQcr1IenEcvRhaR22yk3WT5vgfQ936fr6PEQorXCZZj9LaP5AQx.k3THsqCHuPFqOqmku3SitL4Js00WsEr7VmrMoJdADdIM0SXImY9VBYi8vTt39pJTo2PFbQC3kIB1kwG36TJRw06FmEmraQq.GWrJAVDWqi1JoLNRDR9hIzXQP29wDLz56YNtKwbMc6g3vANRCN6hIfjMP2btCpG5ceOwv3.Roh7hCJjFcz9Q8LBRDpStCJzePe9Fb3.3C4XhCpjRvZ.RixbhDrjQnzvebE73C29tCITM1SOFvW.RdYzwc2P3CVzdKNbtKxetCMnMcSzFUQ.F8NuhDTSRczL5Ka7MDzXtCO0R1S7F6A.Fi27hDeCtCTG_cejwKE.MUodRcSBwbfNhIrPwbANFCyOzbeB3P2jRvDCMb2ftKN6JMRXQDANFOJGzbyaJP2jwCFCMbzutKNLRMRXM6WNFby7zbyaw12jwDPCMvrG3PzL3dqBMCRetCfbd1eBFKQ.FD6dhCeS3nz68hRu8K3NwCRnzvJvFc26wCnCQ6rCtUw6wMRuRDWNw6wTgPeaFCE.wCOyh6rNMcz6QBgBQKSOt6RTgPenRc2TFP6L3b0NwCNS34RSRKENwKxnzvm03n2TRviCQDZNwbY.h8228c2CQD3z_UpbtURS3c6N8vWNQKRTh8yP8P2SMblz4bNb3n2uFoHLRbyStUJdwMR6wDWNQUp2zvYuwP2SwoFCwUfftUrLRdaBwCNO3sVz4KyCtUxjRP6z3v3NQvw0h8xfM12ewCLzgbeutUT.wobC86JNtUejMMRyhoe7wnzG_bG7wK2XwoKCFvr9tUJG84Ru3CpTtCx7eGWqrAm3EChJqapFEKWCqRyQxDJoraJ8B2agrAQ0WaD3Ju9mrkQoqt7"
    let arr37 = get_arr37(cd);
    let arr37_ts = parseInt(String.fromCharCode.apply(null, arr37[21]));
    let arr37_18 = arr37[18];
    let arr37_17 = arr37[17];
    let arr37_16 = arr37[16];
    let arr37_33 = arr37[33];
    let arr37_34 = arr37[34];
    let arr37_2 = arr37[2];

    id7_check_num = check_alg(arr380_42, bigFunc);

    rc = "nvt18lr476kfSqi49v33qeb9a2q1nWH53njYqUiG_HzlUOYY3wxZYnHYWvQn6bz06PU1sb2Od0ViK6ePpt9DTtdakfNDyvNXkuQoXcRwSLuowxKNzcoYhkphvx49xUkepbusw1c55cgob3iOXiVuADiESdWVSYcgP4OpUCo8wE1cZJEo9k.CkmRwUMqg6Aj9BcErt5BbovgvamZdYaqqyjdtMR5DzGhNYLD2KWuS9uDQr3XBvZECmnZk16G1_kLgKjzIabL6pIR0WZemnTCkB.1cNqsibUMmCljlbLE238__gM50r23548KuYjjsCE_D9YkhfamWoGMJ_dlyGYToamUGjbOGJcQxAgN85ciP4e4nD0nHYTv6FSp5iABpHqa7nrK6Th0YfDztPwpHduUtK6XNFujnuzSbjz0Brs26K5J55A5xsxNsRmHV6fTV_e3qsidviP5naxHGxw4uTQqj_5DCrrqRFfxh2zitx1UU6vEOtG_plrtpIzr.uToB82dI3RYdkueusGdaYenJAl.HRAoOHy7TkMD3tlY7vgAdLkvOVTK.HQJ8ZuVy.EdR4nCbLOM886yMoh.FCDsSoXWje_lcSKUK19KeXFnBxkBdWKQkuTh7RvGAldcLrSpF7VZnxngbslzwHRUvrBVUGKFb31dIFXhgTt3rfSURqHxKsPqyTH0tNYynz9Q7DwVoPXJDcBaLeDccOQrIZIUazRrC.y_J6skOp0EsYNEMAremJIHpxUqq4Mx2ENrhSNeD5e7DcJ.CCAkGzMQyrt.c";
    [id0_0, id0_1, id0_2, id0_3, id0_4, id13_arr] = get_id0_arr(rc);
    // YWTU = "CWRSbxU4A7PNNIvfoABdMlD_WNrw3QqwEEoClZHSaNl";
    YWTU = String.fromCharCode(...arr37[22])
    id6_YWTU = _$eW(YWTU, _$$V());
    YVTX = "Wu9";
    id6_YVTX = parseInt(_$cq(_$i$(YVTX)), 10) + 1
    arr_37_29 = arr37[29];
    arr_37_30 = arr37[30];
    arr_37_31 = arr37[31];
    arr_37_32 = arr37[32];
    arr_37_10 = arr37[10];
    arr_37_17 = arr37[17];
    arr_37_19 = arr37[19];
    total_arr = [];
// id:3

    function strToASCII(str){
        let data = [];
        for (let i = 0; i< str.length; i++){
            data.push(str.charCodeAt(i))
        }
        return data
    }

    UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
    random_100 = get_100_Math_random();
    arr3 = [1, 0, 33, 128].concat(_$cv(_$eL(strToASCII(UA)))).concat([5, 87, 105, 110, 51, 50]).concat([0, 0, 0, 1]).concat(random_100).concat([0, 0]);
    arr3 = arr3.concat([1, 0, 0, 0, 0, 0, 0, 0])
    total_arr = total_arr.concat([3]).concat([arr3.length]).concat(arr3);
//     console.log(total_arr, total_arr.length);
// id:10
    arr10 = [1, 1];
    now_ts = Math["ceil"]((new Date())["getTime"]() / 1000);
    now_timestamp = (new Date())["getTime"]();
    before_ts = now_ts - Math.round(Math.random() * 20);
    before_timestamp = now_timestamp - Math.round(Math.random() * 20) * 1000;
    js_ts = arr37_ts + now_ts - before_ts;
    _$bK(arr10, js_ts);
    arr37_19 = parseInt(String.fromCharCode(...arr37[19]));
    _$bK(arr10, arr37_19);
    new_ts = Math["ceil"]((new Date())["getTime"]() / 1000);
    new_ts = (new_ts & 4294967295) >>> 0;
    random_val = parseInt(Math.random() * 1048575) * 4294967296
    new_ts = random_val + new_ts;
    _$dN(arr10, new_ts);
    arr37_24 = parseInt(String.fromCharCode(...arr37[24]));
    // arr10.push(arr37_24);
    total_arr = total_arr.concat([10]).concat([arr10.length]).concat(arr10);
//     console.log(total_arr, total_arr.length);
// id:7
    arr7 = [];
    arr7 = arr7.concat(_$dC(0x1000000)); // 环境检测结果
    arr7 = arr7.concat(_$dC(0)) // 环境检测结果
    arr7 = arr7.concat(arr7CheckValue) // 对380数组中的常数数组检测的结果，写死也能过，每个站点都不一样
    arr7 = arr7.concat(to_2_uint8(id7_check_num)) // 需要html页的js代码和对应的js文件的代码，暂时写死
// arr7 = arr7.concat([17, 170]);
    total_arr = total_arr.concat([7]).concat([arr7.length]).concat(arr7)
//     console.log(total_arr, total_arr.length)
// id:0
    arr0 = [47];
    // arr0 = arr0.concat(id0_0).concat(id0_1).concat(id0_2).concat(id0_3).concat(id0_4)
    arr0 = arr0.concat([112,29,86,36,186,116,33,81,186,60,199,2,4,255,96,203,77,137,17,148,162,220,102,148,102,222,231,248,102,200,153,202,177,151,241,76,87,145,25,204,249,21,55,2,97,190,91,231,22,210,37,219,145,249,8,232,25,102,211,96,131,132,185,175,191,126,10,199,107,208,62,166,216,2,12,199,213,110,161,81,97,183,161,211,253,232,223,57,205,218,212,50,156,199,239,131,98,20,124,64])
    total_arr = total_arr.concat([0]).concat([arr0.length]).concat(arr0);
    // 未检测的时候会传一个0
    // arr0 = [0];
    // total_arr = total_arr.concat([0]).concat([arr0.length]).concat(arr0)
//     console.log(total_arr, total_arr.length);
// id:6
    arr6 = [1, 0, 0, 0, 0, 0];
    arr6 = arr6.concat(id6_YWTU)
    _$_0(arr6, id6_YVTX)
    total_arr = total_arr.concat([6]).concat([arr6.length]).concat(arr6);
//     console.log(total_arr, total_arr.length);
// id:4
//     arr4 = get_id4_arr();
//     total_arr = total_arr.concat([4]).concat([arr4.length]).concat(arr4);
    // console.log(total_arr, total_arr.length);
// id:1
//     arr1 = get_id1_arr();
//     total_arr = total_arr.concat([1]).concat([arr1.length]).concat(arr1);
    // console.log(total_arr, total_arr.length);
// id:2
    arr2 = get_id2_arr();
    total_arr = total_arr.concat([2]).concat([arr2.length]).concat(arr2);
//     console.log(total_arr, total_arr.length);
// id:9
    arr9 = [0];
    total_arr = total_arr.concat([9]).concat([arr9.length]).concat(arr9);
//     console.log(total_arr, total_arr.length);
// id13
    arr13 = id13_arr;
    total_arr = total_arr.concat([13]).concat([arr13.length]).concat(arr13);
//     console.log(total_arr, total_arr.length);

// ID 数组加密用到的另一个小数组
    another_id2 = [] // 因为后面算法中会为这个小数组前面添加一个2和一个length
    another_id2 = another_id2.concat(_$dC(arr37_ts))
    another_id2 = another_id2.concat(_$dC(before_ts))
    another_id2 = another_id2.concat([0]) // arr443_85 是一个空字符串，放入0

    // var [cookie, suffix] = encrypt(another_id2, total_arr, captchaId, pCode)
    let cookie = encrypt(another_id2, total_arr, captchaData, checkyzmPath)
//     console.log("cookie length: ", cookie.length)

    return {
        "cookie": cookie,
    }
}

function get_param_from_index(indexCode, jsFileCode) {
    window = {$_ts: {}}
    document = {
        createElement(tagName, options) {
            return {
                getElementsByTagName() {
                    return []
                }
            }
        },
        getElementsByTagName(qualifiedName) {
            return []
        }
    }

    window.document = document;
    window.eval = eval;
    location = {}
    window.location = location;
    window.top = window;
    window.clearInterval = function () {
    };
    window.setTimeout = function () {
    }
    window.setInterval = function () {
    }
    window.escape = escape;
    window.Number = Number;
    window.decodeURIComponent = decodeURIComponent;
    window.isFinite = isFinite;
    window.Math = Math;
    window.RegExp = RegExp;
    window.DOMParser = function () {
    }
    window.addEventListener = function () {
    };
    window.JSON = JSON;

    // 对应HTML的js代码
    // let indexCode = ''

    eval(indexCode)

    // 对应JS文件的代码
    // let jsFileCode = ''
    let evalJsRegexp = /_\$.{2}=_\$.{2}\.call\(_\$.{2},(_\$.{2})\);/gm;
    let evalJsRepStr = `window.evalJs = $1;return;`;
    jsFileCode = jsFileCode.replace(evalJsRegexp, evalJsRepStr);
    eval(jsFileCode);

    let arr380Regexp = /(_\$.{2})(.push\((?:_\$[\w\$]+,? ?){250,}\);)/gm;
    let arr380RepStr = `window.arr380=$1;window.arr380$2;window.bigFunc=window.arr380[${bigFuncIndex}]();return;`;
    window.evalJs = window.evalJs.replace(arr380Regexp, arr380RepStr);

    // window.arr380里是对应的380数组
    // window.bigFunc 是计算函数校验值的用到的大函数
    eval("window.arr380=[];" + window.evalJs);
    return {
        // id7_check_num: _$dC(check_num),
        cd: window.$_ts.cd,
        vars_arr: window.$_ts.cp[1],
        arr380_42: window.arr380[arr380_42Index],
        bigFunc: window.bigFunc
    }
}


// 验证
async function indexTest() {
    let indexURL = "https://amr.sz.gov.cn/xyjggs.webui/xyjggs/List.aspx?view=info";
    let {html, headers} = await getIndex(indexURL);
    let jsFileCode = await getJsCode();
    let indexCode = parse(html).querySelector("script").innerText;

    let {cd, vars_arr, arr380_42, bigFunc} = get_param_from_index(indexCode, jsFileCode);

    var {cookie} = getCookie(cd, vars_arr, arr380_42, bigFunc);
    var cookies = [];
    headers.forEach(e => {
        if (e[0] === "set-cookie") {
            cookies.push(e[1].split(';')[0]);
        }
    })
    var key = "EKyd12pLzdcZP";
    cookies.push(key + "=" + "0" + cookie);
    console.log(cookies.join(";"))
    sendReq(indexURL, cookies)
}

// indexTest()

let jsFileCode = fs.readFileSync("res/IAGbtcRcrfLO.d52d974.js", {encoding: "utf8"})
// let jsFileCode = fs.readFileSync("IAGbtcRcrfLO.d52d974.js", {encoding: "utf8"})


function initEnv(html) {
    // let indexURL = "https://amr.sz.gov.cn/xyjggs.webui/xyjggs/List.aspx?view=info";
    // let {html, headers} = await getIndex(indexURL);
    // let jsFileCode = await getJsCode();
    let indexCode = parse(html).querySelector("script").innerText;

    let {cd, vars_arr, arr380_42, bigFunc} = get_param_from_index(indexCode, jsFileCode);

    return function () {
        let {cookie} = getCookie(cd, vars_arr, arr380_42, bigFunc);
        return cookie
    }
}

//
// async function test() {
//     let indexURL = "https://amr.sz.gov.cn/xyjggs.webui/xyjggs/List.aspx?view=info";
//     let {html} = await getIndex(indexURL);
//     let genCookie = initEnv(html)
//     return genCookie()
// }
//
// let genCookie = test()
let htmlCache = ""
let genFunc = () => {
    return ""
}

function calCookie(html) {
    if (html) {
        htmlCache = html;
        genFunc = initEnv(htmlCache);
    }
    return {
        "cookie": genFunc()
    }
}

module.exports = {
    calCookie,
}