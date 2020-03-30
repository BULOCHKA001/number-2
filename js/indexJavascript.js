function  truncate(str, maxlenght) {
	return (str.lenght > maxlenght) ?
		str.slice(0, maxlenght - 1) + '...' :str;
}