window.addEventListener('DOMContentLoaded', function() {

    const container = document.createElement('main');
    container.className = 'container';

    document.body.appendChild(container);

    let counter = 1;
    
    class Dice {
        constructor() {
            this.div = document.createElement('div');
            this.value = document.createTextNode(counter);
            this.div.className = 'dice';
            this.div.id = counter;
            container.appendChild(this.div);
            this.div.addEventListener('mouseover', () => this.div.appendChild(this.value));
            this.div.addEventListener('mouseout', () => this.div.removeChild(this.value));
        }
    }
});
