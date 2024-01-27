function enableOptions() {
    var option = document.querySelectorAll('[aria-label="Qırımtatarca"][value="crh-UA"]');
    var select = document.querySelectorAll('[aria-label="Select language"][class="invisible-select"]');
    
    console.log("Extension started");
    
    option.forEach(option => {
        if (option.hasAttribute('disabled')) {
            option.removeAttribute('disabled');
        }
    });
}

enableOptions();

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            enableOptions();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
