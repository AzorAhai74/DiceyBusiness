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

    

    const die = [];




    

    function createDie() {
        let count = Math.floor((Math.random() * 10) + 1);
        let countMaxLimit = 5;
        
        
        let divSquare = document.createElement('div');
        let divSquareText = document.createTextNode(count);
        div.className = 'genDie';
        let divSquare1 = document.getElementsByClassName('genDie');
        divSquare.class = divSquare1;
        divSquare.id = count;

            
        divSquare.setAttribute("id", "eachDie");
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
        reRollDieListeners(button2);
        

        
        function stopDieRoll() {
            if (count = countMaxLimit) {
            document.getElementById('genDieBtn').disabled = 'disabled';
            }
        };

        stopDieRoll();

        

        function eachDieListener() {
            div.removeChild(div.firstChild);
            let eachCount = Math.floor((Math.random() * 10) + 1);
            
            let eachDivSquare = document.createElement('div');
            let eachDivSquareText = document.createTextNode(eachCount);
            div.className = 'eachGenDie';
            let eachDivSquare1 = document.getElementsByClassName('eachGenDie');
            eachDivSquare.class = eachDivSquare1;
            eachDivSquare.id = eachCount;

            
            eachDivSquare.setAttribute("id", "eachNewDie");
            eachDivSquare.appendChild(eachDivSquareText);
            div.appendChild(eachDivSquare);
            eachDivSquare.style.height = '50px';
            eachDivSquare.style.width = '50px';
            eachDivSquare.style.border = '2px solid black';
            eachDivSquare.style.borderRadius = '8px';
            eachDivSquare.style.margin = '25px 10px 15px';
            eachDivSquare.style.cssFloat = 'left';
            eachDivSquare.style.fontSize = '30px';
            eachDivSquare.style.verticalAlign = 'middle';
            eachDivSquare.style.lineHeight = '1.5';
        
        };

        document.getElementById('eachDie').addEventListener('click', function() {
            for (let i = 0; i < 5;i++) {
                die.push(eachDieListener())
            }
            return die;
        })

            
       
        
       
    };
    


    document.getElementById('genDieBtn').addEventListener('click', function() {
        for (let i = 0; i < 5; i++) {
            die.push(createDie());
        }
        return die;
    });

    
    

    let button2 = document.getElementById('reRollDie');
    

    function reRollDieListeners(button2) {
        
        button2.addEventListener('click', function() {
            div.removeChild(div.firstChild);
        });


        button2.addEventListener('click', function() {
            let reCount = Math.floor((Math.random() * 10) + 1);
            
        
            let newDivSquare = document.createElement('div');
            let newDivSquareText = document.createTextNode(reCount);
            div.className = 'newGenDie';
            let newDivSquare1 = document.getElementsByClassName('newGenDie');
            newDivSquare.class = newDivSquare1;
            newDivSquare.id = reCount;
            

            
            newDivSquare.setAttribute("id", "newEachDie");
            newDivSquare.appendChild(newDivSquareText);
            div.appendChild(newDivSquare);
            newDivSquare.style.height = '50px';
            newDivSquare.style.width = '50px';
            newDivSquare.style.border = '2px solid black';
            newDivSquare.style.borderRadius = '8px';
            newDivSquare.style.margin = '25px 10px 15px';
            newDivSquare.style.cssFloat = 'left';
            newDivSquare.style.fontSize = '30px';
            newDivSquare.style.verticalAlign = 'middle';
            newDivSquare.style.lineHeight = '1.5';
            
            
            
            
        
            
        });

        
        

        
    };

    


    
    
    

    
    


            
                
    

        

        
    
    

    
    


    
    
    

    

    
    
    

        


    
    
    
    

    

    


    

   
    
    


    
        

        
        
        
        
    
    
    
    

    
    
});
