'use strict';

function log(param1, param2){
    let textNode;

    if (param1 && param2){
        textNode = document.createTextNode(param1 + ': ' + param2); 
    }
    else if (param1 && typeof(param1) == 'object'){
        log(`${param1.constructor.name}{`);
        for(let p in param1){
            
            log(p, param1[p]);
        }
        log('}');
    }
    else{
        textNode = document.createTextNode(param1); 
    }    
    
    let p = document.createElement('p');
    p.appendChild(textNode);

    document.body.appendChild(p);
}