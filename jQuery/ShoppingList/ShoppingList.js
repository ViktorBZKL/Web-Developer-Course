$('input').on('keypress', function(e) {
    if(e.which == 13) {
        var ul = document.getElementById('ul');
        var li = document.createElement('li');
        var text = document.getElementById('input').value;
        var liText = document.createTextNode(text);
        
        li.appendChild(liText);
        li.innerHTML += `<span><i class="material-icons">backspace</i></span>`;
        ul.appendChild(li);
        document.getElementById('input').value = '';
}});

$('ul').on('click', 'li', function() {
	$(this).toggleClass('strike');
});

$('ul').on('click', 'i', function() {
	$(this).parents('li').fadeOut(1000);
});
