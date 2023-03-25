const firstName = { A: 'Alpha',
B: 'Beta',
C: 'Cache',
D: 'Data',
E: 'Energy',
F: 'Function',
G: 'Glitch',
H: 'Half-life',
I: 'Ice',
J: 'Java',
K: 'Keystroke',
L: 'Logic',
M: 'Malware',
N: 'Nagware',
O: 'OS',
P: 'Phishing',
Q: 'Quantum',
R: 'RAD',
S: 'Strike',
T: 'Trojan',
U: 'Ultraviolet',
V: 'Vanilla',
W: 'WiFi',
X: 'Xerox',
Y: 'Y',
Z: 'Zero' }

const surname = { A: 'Analogue',
B: 'Bomb',
C: 'Catalyst',
D: 'Discharge',
E: 'Electron',
F: 'Faraday',
G: 'Gig',
H: 'Hacker',
I: 'IP',
J: 'Jabber',
K: 'Killer',
L: 'Lazer',
M: 'Mike',
N: 'n00b',
O: 'Overclock',
P: 'Payload',
Q: 'Quark',
R: 'Roy',
S: 'Spy',
T: 'T-Rex',
U: 'Unit',
V: 'Virus',
W: 'Worm',
X: 'X',
Y: 'Yob',
Z: 'Zombie' }

function aliasGen(name, lastName){
    const allowedSymb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letter1 = name.slice(0, 1).toUpperCase()
    let letter2 = lastName.slice(0, 1).toUpperCase()
    if (!allowedSymb.includes(letter1) || !allowedSymb.includes(letter2)) {
        return "Your name must start with a letter from A - Z."
    } else {
    return firstName[letter1] + ' ' + surname[letter2]
    }
}

console.log(aliasGen("daisy", "0etrovic"));
console.log(aliasGen("Dmitry", "astreyko"));