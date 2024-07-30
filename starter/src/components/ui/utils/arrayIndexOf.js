export default function arrayIndexOf(one, ofTarget) {
	if (Array.isArray(ofTarget)) {
		return ofTarget.indexOf(one) >= 0;
	}
	return one === ofTarget;
}