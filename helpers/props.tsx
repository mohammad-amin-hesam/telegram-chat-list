export function trunc(s, n) {
	if (s) {
		return s.length > n ? s.substr(0, n - 1) + "..." : s;
	} else {
		return "";
	}
}

export function uniq_id() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
