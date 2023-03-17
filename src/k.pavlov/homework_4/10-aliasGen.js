function aliasGen() {
    let firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
    let surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}
    return Object.values(firstName)
}

console.log(aliasGen())