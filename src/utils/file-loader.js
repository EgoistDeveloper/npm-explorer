export default function load (source, callback) {

	const req = new XMLHttpRequest();
	req.overrideMimeType('application/octet-stream; charset=binary');
	req.open("GET", source, true);
	req.responseType = "arraybuffer";

	req.onload = function () {
		callback(null, req.response); // not oReq.responseText
	};
	req.onerror = function () {
		callback("Unable to download " + source);
	};

	req.send(null);

}