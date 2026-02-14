const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayChapter(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(chaptersArray);
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    list.append(li);
    deleteBtn.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.')
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(chaptersArray);
}

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = input.value;
        deleteBtn.setAttribute('aria-label', 'Close');
        deleteBtn.id = 'close-button';
        deleteBtn.textContent = '❌';
        li.append(deleteBtn);
        list.append(li);
        input.value = '';
        deleteBtn.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
            input.value = '';
            input.focus();
        });
    }
    
});