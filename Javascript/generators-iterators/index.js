(function(){
    function myIterator(start, finish){
        let index = start;
        let count = 0;
    
        return {
            next(){
                let result;
                if(index < finish){
                    result = {value: index, done: false};
                    index += 1;
                    count += 1;
    
                    return result;
                }
    
                return {value: count, done: true};
            }
        }
    }
    
    const it = myIterator(0, 10);
    let result = it.next();
    
    while(!result.done){
        log(result.value);
        result = it.next();
    }
    
    /*
    const arr = [0, 3, 4, 6];
    const it2 = arr[Symbol.iterator]();
    
    log(it2.next());
    log(it2.next());
    log(it2.next());
    log(it2.next());
    log(it2.next());*/

    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');

    function setUserName() {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
      }

      myButton.onclick = function() {
        setUserName();
      }
})();

