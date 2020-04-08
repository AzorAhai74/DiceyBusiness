window.addEventListener('DOMContentLoaded', function() {

    const dieArray = [];
    
    let div = document.createElement('div');
	div.className = 'col shadow-lg p-4 mb-4 bg-light';
	let div1 = document.getElementsByClassName('col shadow-lg p-4 mb-4 bg-light');
	div.class = div1;
	
	document.body.appendChild(div);
	div.style.textAlign = 'center';
	div.style.height = '100px';
	div.style.lineHeight = '100px';
	div.style.borderStyle = 'solid';
	div.style.boxShadow = '10px 10px grey';
    
    
    class Die {
        constructor() {
            
            this.divSquare = document.createElement('div');
            this.className = 'genDie';
            this.divSquare1 = document.getElementsByClassName('genDie');
            this.divSquare.className = 'eachDie';
            this.value = 0;
            this.dieRoll();
            this.dieRemove();
            this.dieEvents();
            this.dieElements();
            this.dieBtnEvents();
            this.dieSumFormula();
            
            div.appendChild(this.divSquare);
            this.divSquare.style.height = '50px';
            this.divSquare.style.width = '50px';
            this.divSquare.style.border = '2px solid black';
            this.divSquare.style.borderRadius = '8px';
            this.divSquare.style.margin = '0px 10px 0px';
            this.divSquare.style.cssFloat = 'left';
            this.divSquare.style.fontSize = '30px';
            this.divSquare.style.verticalAlign = 'middle';
            this.divSquare.style.lineHeight = '1.5';

            
        };

        

        dieEvents() {
            this.divSquare.addEventListener('click', () => this.dieRoll(), this.dieSumFormula());
            this.divSquare.addEventListener('dblclick', () => this.dieRemove(), this.dieSumFormula());
        };

        
        dieElements() {
            this.button1 = document.getElementById('genDieBtn');
            this.button2 = document.getElementById('reRollDie');
            this.button3 = document.getElementById('sumDie');
        };
        

        dieRoll() {
            this.value = Math.floor((Math.random() * 6) + 1);
            this.divSquare.textContent = this.value;
        };

        
        dieRemove() {
            this.divSquare.outerHTML = '';
            dieArray = dieArray.filter(eachDie => eachDie.indexNum != this.indexNum);
        };
            

        dieSumFormula = (e) => {
            let sum = 0;
            dieArray.forEach(die => sum += die.value);
            e.target.textContent = sum;
        };

        dieBtnEvents = () => {
            button1 = () => {
                this.button1.addEventListener('click', () => {
                let dice = new Die();
                dieArray.push(dice);
                dieSumFormula();
                });
            };
            button2 = () => {
                this.button2.addEventListener('click', () => {
                    dieArray.forEach(die => die.dieRoll());
                    dieSumFormula();
                });
            };
            button3 = () => {
                this.button3.addEventListener('click', () => {
                dieArray.forEach(die => die.dieRoll());
                alert('Total Die:' + dieSumFormula());
                });
            };


        };
            
            

    };


    let button1 = document.getElementById('genDieBtn');

    button1.addEventListener('click', () => {
        new Die();
    });

    let button2 = document.getElementById('reRollDie');

    button2.addEventListener('click', () => {
        new Die();
    });

    let button3 = document.getElementById('sumDie');

    button3.addEventListener('click', () => {
        new Die();
    });

   


            
           
});
