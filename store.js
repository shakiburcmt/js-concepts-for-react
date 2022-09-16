localStorage.setItem('bou', 'Mariam');
localStorage.setItem('wife', 'Mariam');
localStorage.removeItem('bou')
sessionStorage.setItem('bou', 'Mariam');
sessionStorage.setItem('wife', 'Mariam');
sessionStorage.removeItem('bou')

const addToLocalStorage = () => {
    const name = document.getElementById('name');
    const wifeName = name.value;
    const age = document.getElementById('age');
    const wifeAge = age.value;

    // set value into local storage
    if (wifeName && wifeAge) {
        localStorage.setItem(wifeName, wifeAge);
    }
    name.value = '';
    age.value = '';
}