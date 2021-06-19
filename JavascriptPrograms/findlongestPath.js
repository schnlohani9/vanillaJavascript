let calculatelongest =( i, j, mat, newTable) => {
	if (i < 0 || i >= 3 || j < 0 || j >= 3)
		return 0;

	if (newTable[i][j] != -1)
		return newTable[i][j];


	let a,b,c,d;
	a = -1;
	b = -1;
	c = -1
	d = -1;

	if (j < 3 - 1 && ((mat[i][j] + 1) == mat[i][j + 1]))
		a = 1 + calculatelongest(i, j + 1, mat, newTable);

	if (j > 0 && (mat[i][j] + 1 == mat[i][j - 1]))
		b = 1 + calculatelongest(i, j - 1, mat, newTable);

	if (i > 0 && (mat[i][j] + 1 == mat[i - 1][j]))
		c = 1 + calculatelongest(i - 1, j, mat, newTable);

	if (i < 3 - 1 && (mat[i][j] + 1 == mat[i + 1][j]))
		d = 1 + calculatelongest(i + 1, j, mat, newTable);

	newTable[i][j] = Math.max(a, Math.max(b, Math.max(c, Math.max(d, 1))));
	return newTable[i][j];
}

let longestPath = (mat) => {
	let result = 1;
	var newTable = [];


	for( var b = 0; b < 3; b++ ) {
	newTable[ b ] = [];
	for( var a = 0; a < 3; a++ ) {
		newTable[ b ][ a ] = -1;
	}
}

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (newTable[i][j] == -1)
				calculatelongest(i, j, mat, newTable);

			result = Math.max(result, newTable[i][j]);
		}
	}

	return result;
}

let mat = [[ 1, 2, 9 ],
			[ 5, 3, 8 ],
			[ 4, 6, 7 ]];

console.log(longestPath(mat));