function doTraffic(current_state){
    switch(current_state){
        case 'green' :
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
    }
}
alert(doTraffic('red'))