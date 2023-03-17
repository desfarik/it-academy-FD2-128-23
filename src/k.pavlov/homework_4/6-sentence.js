function sentence(List) {
        let keys = List.reduce((container, obj) => [...container, ...Object.keys(obj)], []);
        return keys.sort((a, b) => a - b);
}
console.log(sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]));
