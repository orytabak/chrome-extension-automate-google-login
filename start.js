window.onload = () => {
	const username = 'username';
	const password = 'password';

	const callback = (mutationsList, observer) => {
		for(const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				setInputElValue()
			}
		}
	}

	const config = { attributes: false, childList: true, subtree: false };
	const observer = new MutationObserver(callback);
	const node = document.getElementById('initialView');

	// Start observing the target node for configured mutations
	observer.observe(node, config);

	function setInputElValue() {	
		let input = document.querySelector('input[type=email]');
		if(input) {
			observer.disconnect();
			input.value = username;
			input.dispatchEvent(new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                }));
		}
		setTimeout(()=>{
					let btn = Array.from(document.getElementsByTagName('button'))[2];
					btn.click();
					setTimeout(()=>{
						let passInput = document.querySelector('input[type=password]');
						passInput.value = password;
						passInput.dispatchEvent(new Event('input', {
							'bubbles': true,
							'cancelable': true
						}));
						let btn1 = Array.from(document.getElementsByTagName('button'))[1];
						btn1.click();
					}, 2000)
		},1000)

	}
}




