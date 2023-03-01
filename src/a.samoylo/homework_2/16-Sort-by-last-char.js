function last(x){
      return x.split(' ').map(el => el.split('').reverse()).sort().map(el => el.reverse().join(''))
}