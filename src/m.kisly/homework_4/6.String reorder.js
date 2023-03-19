function sentence(List) {
    let sort = List.sort((a, b)  => Object.keys(a) - Object.keys(b));
    
    return sort.map((values) => Object.values(values)).join(' ');
}

console.log(sentence([
    { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
    { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]));