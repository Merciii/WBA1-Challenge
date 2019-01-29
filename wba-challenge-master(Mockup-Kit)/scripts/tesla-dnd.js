/* Drag and Drop für die Screens
Script im Kern übernommen von Eric Bidelman
https://www.html5rocks.com/de/tutorials/dnd/basics/
----------------------------------------------------------------------------- */
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over'); // this / e.target is previous target element.
}

function handleDrop(e) {
    // this/e.target is current target element.
    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
  [].forEach.call(sections, function (section) {
        section.classList.remove('over');
    });
}
var dragSrcEl = null;

function handleDragStart(e) {
    // Target (this) element is the source node.
    //this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
if (Modernizr.draganddrop) {
    var sections = document.querySelectorAll('#screen [draggable=true]');
[].forEach.call(sections, function (section) {
        section.addEventListener('dragstart', handleDragStart, false);
        section.addEventListener('dragenter', handleDragEnter, false)
        section.addEventListener('dragover', handleDragOver, false);
        section.addEventListener('dragleave', handleDragLeave, false);
        section.addEventListener('drop', handleDrop, false);
        section.addEventListener('dragend', handleDragEnd, false);
    });
}
else {
    // Fallback to a library solution.
}