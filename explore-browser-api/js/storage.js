document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    localStorage.setItem('Name', nameField.value);
    nameField.value = '';
})
document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('Name');
})
document.getElementById('btn-add-age').addEventListener('click', function(){
    const nameField = document.getElementById('age-field');
    localStorage.setItem('Age', nameField.value);
    nameField.value = '';
})
document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('Age');
})

document.getElementById('btn-clear-ls').addEventListener('click', function(){
    localStorage.clear();
})
