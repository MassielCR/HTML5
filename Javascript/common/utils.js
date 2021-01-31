'use strict';

function log(param1, param2){
    if (param1 && param2){
        document.writeln(param1 + ': ' + param2); 
    }
    else if (param1 && typeof(param1) == 'object'){
        log(`${param1.constructor.name}{`);
        for(let p in param1){
            
            log(p, param1[p]);
        }
        log('}');
    }
    else{
        document.writeln(param1);
    }                      
}