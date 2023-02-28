let result = 0 || false || 1 || '' || null;


let user = {
  name: 'ivan'
};
console.log(user);
// user = null;

const name = user && user.name;
//const name = user?.name;

console.log(name);
