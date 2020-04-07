window.addEventListener('DOMContentLoaded', function() {

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

    

    const dieArray = [];

    function die() {
        let dieRoll = dieArray;

        createDie(dieRoll);
    };
    
    
    

        class Die {
            constructor() {
        
                this.count = Math.floor((Math.random() * 10) + 1);
                this.divSquare = document.createElement('div');
                this.divSquareText = document.createTextNode(count);
                this.className = 'genDie';
                this.divSquare1 = document.getElementsByClassName('genDie');
                this.divSquare.class = divSquare1;
                this.divSquare.id = count;

                this.divSquare.setAttribute("id", "eachDie");
                this.divSquare.setAttribute("class", "eachDieClass");
                this.divSquare.appendChild(divSquareText);
                this.div.appendChild(divSquare);
                this.divSquare.style.height = '50px';
                this.divSquare.style.width = '50px';
                this.divSquare.style.border = '2px solid black';
                this.divSquare.style.borderRadius = '8px';
                this.divSquare.style.margin = '25px 10px 15px';
                this.divSquare.style.cssFloat = 'left';
                this.divSquare.style.fontSize = '30px';
                this.divSquare.style.verticalAlign = 'middle';
                this.divSquare.style.lineHeight = '1.5';
                this.divSquare.textContent = count;

                dice.forEach(eachDieClass => eachDieClass.addEventListener('click', dieClicked));

                dice.forEach(eachDieClass => eachDieClass.addEventListener('dblclick', dblClicked));

                
            };
        };
            
                let dice = document.querySelectorAll('.eachDieClass');

                
                
                dieClicked(e => {
                    if (e.target.textContent === true) {
                        div.removeChild(div.firstChild);
                        return;
                    }
                    e.target.textContent = Math.floor((Math.random() * 10) + 1);
                });

                dblClicked (() => {
                    div.removeChild(div.firstChild);
                    return;
            
                };
    

    
            function genDie() {
                countMaxLimit = 5;
                die();
                reRollDieListeners(button2);
        

            function stopDieRoll() {
                if (count = countMaxLimit) {
                    button1.disabled = true;
                }
            };

            stopDieRoll();

            document.getElementById('eachDie').addEventListener('click', function() {
                dieClicked();
            });

            document.getElementById('eachDie').addEventListener('dblclick', function() {
                dblClicked();
            });

        

    

            let button1 = document.getElementById('genDieBtn');

            function genDieArrayPush() {
                button1.addEventListener('click', function() {
                    for (let i = 0; i < 5; i++) {
                        dieArray.push(genDie());
                    }
            
                    return dieArray;
                });
            };

            genDieArrayPush();


    
    
            let button2 = document.getElementById('reRollDie');
    

            function reRollDieListeners(button2) {
        
        
                button2.addEventListener('click', function() {
                    div.removeChild(div.firstChild);
                });

                button2.addEventListener('click', function() {
                    die();
            
                });
            };

            let button3 = document.getElementById('sumDie');
    

            button3.addEventListener('click', function() {
                div.removeChild(div.firstChild);
        
                let sumCount = Math.floor((Math.random() * 10) + 1);

                let sumSquare = document.createElement('div');
                let sumSquareText = document.createTextNode(sumCount);
                div.className = 'sumDieTotal';
                let sumSquare1 = document.getElementsByClassName('sumDieTotal');
                sumSquare.class = sumSquare1;
                sumSquare.id = sumCount;
                
                
                sumSquare.setAttribute('id', 'sumDieTotalId');
                sumSquare.appendChild(sumSquareText);
                div.appendChild(sumSquare);
                sumSquare.style.height = '50px';
                sumSquare.style.width = '50px';
                sumSquare.style.border = '2px solid black';
                sumSquare.style.borderRadius = '8px';
                sumSquare.style.margin = '25px 10px 15px';
                sumSquare.style.cssFloat = 'left';
                sumSquare.style.fontSize = '30px';
                sumSquare.style.verticalAlign = 'middle';
                sumSquare.style.lineHeight = '1.5';

                sumSquare.textContent = sumCount;
            
                    let sumAllDie = document.querySelectorAll('.sumDieTotal');
            
                    let num = [];
        
                
        
                    num.forEach.call(sumAllDie, function(e) {
                        num.push(Number(e.textContent));
                    });
                    sum = num.reduce(function(a, sumAllDie){
                        return a += sumAllDie;
                    }, 0);
                    alert('Total Die:' + sum);
        
        
        

    

    

        

        

    
    

    
    
        
    

    
    

    

    


    
    
    

    
    


            
                
    

        

        
    
    

    
    


    
    
    

    

    
    
    

        


    
    
    
    

    

    


    

   
    
    


    
        

        
        
        
        
    
    
    
    

    
    
});
