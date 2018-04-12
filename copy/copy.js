/**
 * Copies text to clipboard
 * @param textToCopy {string}
 */
function copy(textToCopy) {
	const temporaryElementId = 'element-for-copy';

	let temporaryElement = document.getElementById(temporaryElementId);
	if (!temporaryElement) {
		// Create hidden element with text node
		const elementToCopy = document.createElement('span');
		elementToCopy.textContent = textToCopy;
		elementToCopy.id = temporaryElementId;
		elementToCopy.contenteditable = true;
		document.body.appendChild(elementToCopy);
		temporaryElement = elementToCopy;
	} else {
		// Change inner text to new copy text
		temporaryElement.textContent = textToCopy;
	}

	// Create range to select text
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(temporaryElement);
	selection.removeAllRanges();
	selection.addRange(range);

	// Copy to the clipboard
	document.execCommand('copy');

	temporaryElement.remove();
}
