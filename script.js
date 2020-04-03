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

    

    const dieArray = [
        {die: 1},
        {die: 2},
        {die: 3},
        {die: 4},
        {die: 5}
    ];

    
    
    
    

    function createDie() {
        
        let count = Math.floor((Math.random() * 10) + 1);
        
        let divSquare = document.createElement('div');
        let divSquareText = document.createTextNode(count);
        div.className = 'genDie';
        let divSquare1 = document.getElementsByClassName('genDie');
        divSquare.class = divSquare1;
        divSquare.id = count;

            
        divSquare.setAttribute("id", "eachDie");
        divSquare.setAttribute("class", "eachDieClass");
        divSquare.appendChild(divSquareText);
        div.appendChild(divSquare);
        divSquare.style.height = '50px';
        divSquare.style.width = '50px';
        divSquare.style.border = '2px solid black';
        divSquare.style.borderRadius = '8px';
        divSquare.style.margin = '25px 10px 15px';
        divSquare.style.cssFloat = 'left';
        divSquare.style.fontSize = '30px';
        divSquare.style.verticalAlign = 'middle';
        divSquare.style.lineHeight = '1.5';
        
        
        

        
        let dice = document.querySelectorAll('.eachDieClass');

        dice.forEach(function(eachDieClass) {
            eachDieClass.addEventListener('click', dieClicked);
        });

        dice.forEach(function(eachDieClass) {
            eachDieClass.addEventListener('dblclick', dblClicked)
        });
        
        

    };

    
     
    
    function dieClicked(e) {
        if (e.target.textContent === true) {
            div.removeChild(div.firstChild);
            return;
        }
        e.target.textContent = Math.floor((Math.random() * 10) + 1);
    };

    function dblClicked() {
        div.removeChild(div.firstChild);
        return;
        
    };
    

    
    
    


    function genDie() {
        createDie();
        countMaxLimit = 5;
        reRollDieListeners(button2);
        

        
        function stopDieRoll() {
            if (count = countMaxLimit) {
            document.getElementById('genDieBtn').disabled = 'disabled';
            }
        };

        stopDieRoll();

        document.getElementById('eachDie').addEventListener('click', function() {
            dieClicked();
        });

        document.getElementById('eachDie').addEventListener('dblclick', function() {
            dblClicked();
        });
        
    };
    


    document.getElementById('genDieBtn').addEventListener('click', function() {
        for (let i = 0; i < 5; i++) {
            dieArray.push(genDie());
        }
        return dieArray;
        
    });

    
    let button2 = document.getElementById('reRollDie');
    

    function reRollDieListeners(button2) {
        button2.addEventListener('click', function() {
            
        createDie();
        
        });

    };

    document.getElementById('sumDie').addEventListener('click', function() {
        let sum = dieArray.reduce(function(a, b) {
            return a + b + dieArray.die;
        }, 0);
        alert('Total Die:' + sum);
    });
    
    

    
    
        
    

    
    

    

    


    
    
    

    
    


            
                
    

        

        
    
    

    
    


    
    
    

    

    
    
    

        


    
    
    
    

    

    


    

   
    
    


    
        

        
        
        
        
    
    
    
    

    
    
});
