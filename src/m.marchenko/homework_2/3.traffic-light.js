function updateLight(current) {
    if (current==='green') {
        return 'yellow';
    }
    if (current==='yellow') {
        return 'red';
    }
    return 'green';
  }

  console.log(updateLight('red'));
  console.log(updateLight('green'));
  console.log(updateLight('yellow'));