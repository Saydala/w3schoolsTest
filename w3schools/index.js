
document.getElementById('btn-next').onclick = next;
document.getElementById('btn-previous').onclick = previous;

function next() {
    document.getElementById('inner-content').hidden = true;
}

function previous() {
    document.getElementById('inner-content').hidden = false;
}

$(selector).append(content);