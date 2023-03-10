function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
    default:
      return 'Error';
      break;
  }
}

updateLight('green');
updateLight('yellow');