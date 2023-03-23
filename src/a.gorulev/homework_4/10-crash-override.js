function aliasGen(firstname, surname){
  let firstFakeName = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    E: "Energy",
    F: "Function",
    G: "Glitch",
    H: "Half-life",
    I: "Ice",
    J: "Java",
    K: "Keystroke",
    L: "Logic",
    M: "Malware",
    N: "Nagware",
    O: "OS",
    P: "Phishing",
    Q: "Quantum",
    R: "RAD",
    S: "Strike",
    T: "Trojan",
    U: "Ultraviolet",
    V: "Vanilla",
    W: "WiFi",
    X: "Xerox",
    Y: "Y",
    Z: "Zero"
  };
  let surFakeName = {
    A: "Analogue",
    B: "Bomb",
    C: "Catalyst",
    D: "Discharge",
    E: "Electron",
    F: "Faraday",
    G: "Gig",
    H: "Hacker",
    I: "IP",
    J: "Jabber",
    K: "Killer",
    L: "Lazer",
    M: "Mike",
    N: "n00b",
    O: "Overclock",
    P: "Payload",
    Q: "Quark",
    R: "Roy",
    S: "Spy",
    T: "T-Rex",
    U: "Unit",
    V: "Virus",
    W: "Worm",
    X: "X",
    Y: "Yob",
    Z: "Zombie"
  };
  let firstLetterOfFirstName = firstname.charAt(0).toUpperCase();
  let firstLetterOfSurName = surname.charAt(0).toUpperCase();
  let name, sur;
  let firstValues = Object.values(firstFakeName);
  let surValues = Object.values(surFakeName);
  if (isNaN(Number(firstLetterOfFirstName)) && isNaN(Number(firstLetterOfSurName))) {
      for (let i = 0; i < firstValues.length; i++) {
        if (firstValues[i].charAt(0).toUpperCase() === firstLetterOfFirstName)
          name = firstValues[i];
      }
      for (let i = 0; i < surValues.length; i++) {
        if (surValues[i].charAt(0).toUpperCase() === firstLetterOfSurName)
          sur = surValues[i];
      }
      return `${name} ${sur}`;
    } else return "Your name must start with a letter from A - Z.";
  }
  
  console.log(aliasGen("Mike", "Millington")); 