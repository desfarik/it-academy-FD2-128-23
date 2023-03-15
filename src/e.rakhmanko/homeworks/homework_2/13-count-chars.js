const consonantCount = (str) => {
	let count = 0
	for (const c of str) {
		if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".indexOf(c) >= 0) count++
	}

	return count
}
console.log(consonantCount('hello world'));
console.log(consonantCount('hi'));
console.log(consonantCount('a'));