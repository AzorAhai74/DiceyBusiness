window.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('genDieBtn');
    
    let newDie = 1;

    
    button1.addEventListener('click', function() {
        let div = document.createElement('div');
        div.className = 'die';
        let div1 = document.getElementsByClassName('die');
        div.class = div1;
        div.id = (newDie);

        document.body.appendChild(div);
        div.classList.add('die');
        div.style.cssFloat = 'right';
        div.style.textAlign = 'center';
        div.style.height = '100px';
        div.style.lineHeight = '100px';
        div.style.webkitTextFillColor = 'white';

        newDie++;
    });
    

    
});
