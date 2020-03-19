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

        function stopDie() {
            if (count = countMaxLimit) {
            document.getElementById('genDieBtn').disabled = 'disabled';
            }
        };

        stopDie();

        function replaceDie() {
            divSquare.removeChild(divSquareText);
            reRollDie();
        };

        document.getElementById('reRollDie').addEventListener('click', function() {
            replaceDie();
            replaceDie();
        });

    };

    

    document.getElementById('genDieBtn').addEventListener('click', function() {
        createDie();
        createDie();
        createDie();
        createDie();
        createDie();
       
    });

    function reRollDie() {

        let reCount = Math.floor((Math.random() * 10) + 1);
        

        let reRollId = document.getElementById('eachDie');
        let reRollText = document.createTextNode(reCount);
        reRollId.id = reCount;
        

        reRollId.appendChild(reRollText);

        
        
    };

    

    

        


    

    
    
    

    

    


    

   
    
    


    
        

        
        
        
        
    
    
    
    

    
    
});
