const element = document.querySelectorAll('[aria-label="Qırımtatarca"][value="crh-UA"]');

while(true) {
    element.forEach(element => {
        if (element.hasAttribute('disabled')) {
            element.removeAttribute('disabled');
        }
    });
}
