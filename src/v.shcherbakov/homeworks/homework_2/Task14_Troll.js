function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    return str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
}

console.log(disemvowel('No offense but,\\nYour writing is among the worst I\'ve ever read"), "N ffns bt,\\nYr wrtng s mng th wrst \'v vr red'))
