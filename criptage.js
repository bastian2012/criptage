function includes_(_alph, str) {
    let result = true;
    for (const k of str) {
        if (!_alph.includes(k.toLowerCase())) {
            result = false;
        }
    }
    return result;
}
encript = (_alph, str, _salt) => {
    if (!includes_(_alph, str)) {
        throw new Error("valueError")
    } else if (includes_(_alph, str)) {
        let temp = '';
        for (const k of str) {
            if (!_alph.includes(k) && _alph.includes(k.toLowerCase())) {
                temp += `0${_alph.indexOf(k.toLowerCase())}.`;
            } else {
                temp += `${_alph.indexOf(k)}.`;
            }
        }
        console.log(`${_salt}.${temp}${str.length}`);
        return `${_salt}.${temp}${str.length}`;
    }
}
decript = (_alph, str, _salt) => {
    let temp = []
    temp = str.split('.')
    let temp2 = [];
    temp2 = temp.slice(1, (temp.length) - 1);
    if (temp[0] !== _salt) {
        throw new Error("saltError");
    } else if (Number(temp[((temp.at(-1)))]) !== temp2.length) {
        throw new Error("lengthError")
    } else {
        let chennKarakte = '';
        for (const k of temp2) {
            if (k[0] == 0 && k.length > 1) {
                let o = k.slice(1, k.length);
                let t = _alph[(_alph.indexOf(_alph[o]))];
                chennKarakte += t.toUpperCase();
            } else {
                chennKarakte += _alph[_alph.indexOf(_alph[k])]
            }
        }
        console.log(chennKarakte);
    }
}
_salt = "Ux00";
let _alph = 'abcdefghijklmnopqrstuvwxyz';
let str = 'Coding';
let a = encript(_alph, str, _salt)
decript(_alph, 'Ux00.02.14.3.8.13.6.6', _salt);