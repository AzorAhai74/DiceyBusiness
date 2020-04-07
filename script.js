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
            this.divSquare.class = divSquare1;
            this.value = 0;
            this.dieRoll();
            this.divSquare.addEventListener('click', () => {
                this.dieRoll();
            })
           
        
            this.div.appendChild(this.divSquare);
            this.divSquare.style.height = '50px';
            this.divSquare.style.width = '50px';
            this.divSquare.style.border = '2px solid black';
            this.divSquare.style.borderRadius = '8px';
            this.divSquare.style.margin = '25px 10px 15px';
            this.divSquare.style.cssFloat = 'left';
            this.divSquare.style.fontSize = '30px';
            this.divSquare.style.verticalAlign = 'middle';
            this.divSquare.style.lineHeight = '1.5';
            

        };

        dieRoll() {
            this.value = Math.floor((Math.random() * 6) + 1);
            this.die.divSquare.textContent = this.value;
        };

        dieRemove() {
            this.div.removeChild(this.div.firstChild);
            return;
        };


    };


        dieSumFormula = () => {
            let sum = 0;
            dieArray.forEach()
        }
            
        
    
                
        let button1 = document.getElementById('genDieBtn');

        button1.addEventListener('click', () => {
            let dice = new Die();
            dieArray.push(dice);
        })
        


    
    
        let button2 = document.getElementById('reRollDie');
    

        

            
            
        
                
            
                    
        
        
        

    

    

        

        

    
    

    
    
        
    

    
    

    

    


    
    
    

    
    


            
                
    

        

        
    
    

    
    


    
    
    

    

    
    
    

        


    
    
    
    

    

    


    

   
    
    


    
        

        
        
        
        
    
    
    
    

    
    
});
