const last = x => x.split(' ').sort((a, b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));

last('what time are we climbing up the volcano');
