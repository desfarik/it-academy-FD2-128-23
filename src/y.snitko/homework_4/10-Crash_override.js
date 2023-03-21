function aliasGen(firstName, lastName) {
  let firstNameUp = firstName.charAt(0).toUpperCase();
  let lastNameUp = lastName.charAt(0).toUpperCase();
  let arrFakeName = Object.values(fakeName);
  let arrFakeLastName = Object.values(fakeLastName);
  let name = '';
  let surName = '';
  if (isNaN(firstNameUp) && isNaN(lastNameUp)) {
    for (let index = 0; index < arrFakeName.length; index++) {
      const item1 = arrFakeName[index];
      if (item1.charAt(0).toUpperCase() === firstNameUp) {
        name = item1;
      }
    }
    for (let index = 0; index < arrFakeLastName.length; index++) {
      const item2 = arrFakeLastName[index];
      if (item2.charAt(0).toUpperCase() === lastNameUp) {
        surName = item2;
      }
    }
    return name + ' ' + surName;
  } else {
    return 'Your name must start with a letter from A - Z.';
  }
}
const fakeName = {
  A: 'Alpha',
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
  Z: 'Zero',
};

const fakeLastName = {
  A: 'Analogue',
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
  Z: 'Zombie',
};

console.log(aliasGen('John', 'kim'));
console.log(aliasGen('John', '2Kim'));
