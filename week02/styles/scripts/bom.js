const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteBtn = document.createElement('button');
li.textContent = input.value;
deleteBtn.textContent = '❌';
li.append(deleteBtn);
list.append(li);


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