window.addEventListener('DOMContentLoaded', function() {

    let dieArray = [];

    
    
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
            this.divSquare.className = 'dieSquares';
            this.divSquare1 = document.getElementsByClassName('dieSquares'); 
            this.divSquare.class = this.divSquare1;
            this.divSquare.id = 'eachDieId';
            this.value = 0;
            this.dieRoll();
            this.genRandomBackColor();
            
            div.appendChild(this.divSquare);
            this.divSquare.classList.add('dieSquares');
            this.divSquare.style.height = '50px';
            this.divSquare.style.width = '50px';
            this.divSquare.style.border = '2px solid black';
            this.divSquare.style.borderRadius = '8px';
            this.divSquare.style.margin = '0px 10px 0px';
            this.divSquare.style.cssFloat = 'left';
            this.divSquare.style.fontSize = '30px';
            this.divSquare.style.verticalAlign = 'middle';
            this.divSquare.style.lineHeight = '1.5';
            this.indexNum = dieArray.length;
            this.divSquare.addEventListener('dblclick', () => {
                this.removeDie();
                
            });
            this.divSquare.addEventListener('click', () => {
                this.dieRoll();
            });
            this.divSquare.addEventListener('mouseover', () => {
                this.genRandomBackColor();
            });
        };


        genRandomBackColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            this.divSquare.style.backgroundColor = 
        };

        dieRoll() {
            this.value = Math.floor((Math.random() * 6) + 1);
            if (this.value === 1) {
                this.divSquare.textContent = '\u2680';
            }
            else if (this.value === 2) {
                this.divSquare.textContent = '\u2681';
            }   
            else if (this.value === 3) {
                this.divSquare.textContent = '\u2682';
            }
            else if (this.value === 4) {
                this.divSquare.textContent = '\u2683';
            }
            else if (this.value === 5) {
                this.divSquare.textContent = '\u2684';
            }
            else if (this.value === 6) {
                this.divSquare.textContent = '\u2685';
            }
            return this.value;
        };
            



        removeDie() {
            this.divSquare.outerHTML = '';
            dieArray = dieArray.filter(dieSquares => dieSquares.indexNum !== this.indexNum);
        };

        
        
        

    };

    
    dieSumFormula = sum => {
        dieArray.forEach(dieSquares => sum += dieSquares.value);
        return sum = 0;
    };
    

    
    document.getElementById('genDieBtn').addEventListener('click', addDie);

            
    fixedDie = () => {
        let dice = new Die();
        if (dieArray.length < 5);
        dieArray.push(dice);
    };

    stopDie = () => {
        let button1 = document.getElementById('genDieBtn');
        if (dieArray.length < 9) 
        button1.disabled = true;
        };

    function addDie() {
        fixedDie();
        fixedDie();
        fixedDie();
        fixedDie();
        fixedDie();
        stopDie();
    };

    
    let button2 = document.getElementById('reRollDie');

    button2.addEventListener('click', () => {
        if (dieArray.length < 5) {
            fixedDie();
        } else
        dieArray.forEach(dieSquares => dieSquares.dieRoll());
        dieSumFormula();
    });

    document.getElementById('sumDie').addEventListener('click', addSumDie);

    sumAddDie = () => {
        let sumDice = new Die();
        dieArray.push(sumDice);
    };

    function addSumDie() {
        let sum = 0;
        dieArray.forEach(dieSquares => sum += dieSquares.value);
        alert('Total Die: ' + sum);
    };



    

    

     
});
