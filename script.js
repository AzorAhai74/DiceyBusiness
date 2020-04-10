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
            this.divSquare.className = 'dieSquares';
            this.divSquare1 = document.getElementsByClassName('dieSquares'); 
            this.divSquare.class = this.divSquare1;
            this.divSquare.id = 'eachDieId';
            this.divSquareValue = 0;
            this.value = 0;
            this.dieRoll();
        
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
            })
            this.divSquare.addEventListener('click', () => {
                this.dieRoll();
            });

            
        };

    

        dieRoll() {
            this.value = Math.floor((Math.random() * 6) + 1);
            this.divSquare.textContent = this.value;
        };


        removeDie() {
            this.divSquare.outerHTML = '';
            dieArray = dieArray.filter(dieSquares => dieSquares.indexNum !== this.indexNum);
        };
        

        
       
    };

    
    


    dieSumFormula = () => {
        let sum = 0;
        dieArray.forEach(dieSquares => sum += dieSquares.value);
        alert('Total Die: ' + sum);
    };
    

    
            
    document.getElementById('genDieBtn').addEventListener('click', addDie);

            
    fixedDie = () => {
        let dice = new Die();
        dieArray.push(dice);
    };

    stopDie = () => {
        let button1 = document.getElementById('genDieBtn');
        button1.disabled = true;
    }

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
        dieArray.forEach(dieSquares => dieSquares.dieRoll());
    });

    let button3 = document.getElementById('sumDie');

    
    button3.addEventListener('click', () => {
        removeDie = () => {
            div.removeChild(div.firstChild);
        };
        dieSumFormula();
    });

    

    

     

   


            
           
});
