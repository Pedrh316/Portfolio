let chk = document.querySelector('#dark-mode__chk');
let body = document.querySelector('body');

chk.addEventListener("click", setDarkmode);

setBodyClass();
correctChk();

function setDarkmode() {
    let visualMode = localStorage.getItem('visualmode');

    if (visualMode === 'darkmode' && visualMode !== null) {
        localStorage.setItem('visualmode', 'lightmode')
    } else {
        localStorage.setItem('visualmode', 'darkmode');
    }

    setBodyClass();
}

function setBodyClass() {
    body.className = localStorage.getItem('visualmode') ?? 'lightmode';
}

function correctChk() {
    localStorage.getItem('visualmode') === 'darkmode' ? chk.checked = true : chk.checked = false;
}
