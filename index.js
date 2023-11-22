const allowPaste = function(e) {
    e.stopImmediatePropagation();
    return true;
}

document.addEventListener('copy', allowPaste, true);
document.addEventListener('paste', allowPaste, true)
document.addEventListener('onpaste', allowPaste, true);

