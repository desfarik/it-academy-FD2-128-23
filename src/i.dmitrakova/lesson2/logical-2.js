let user = {
  name: 'ivan',
  isAdmin: false,
  description: '',
};
// user = null;

const isAdmin = user.isAdmin || true;
const description = user.description ?? 'default description';

console.log(description);
