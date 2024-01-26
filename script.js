const option = document.querySelectorAll('[aria-label="Qırımtatarca"][value="crh-UA"]');
const select = document.querySelectorAll('[aria-label="Select language"][class="invisible-select"]');

select.forEach(select => {
    select.addEventListener('click', () => {
        option.forEach(option => {
            if (option.hasAttribute('disabled')) {
                option.removeAttribute('disabled');
            }
        });
    });
});
