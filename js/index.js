///const userAge = parseInt(prompt('Enter your age!'));
//const nextAge = userAge + 1;
//const userName = prompt('Enter your name!');
//const greet = 'Hello, next year u will be ' + nextAge + ' years old';

//if(nextAge<20){
   // alert('child');} else if    (nextAge<80){
    //    alert('adult');}else{
      //      alert('old');
      //  }
      /* function sum(a, b){
           const result= a+b;
            return result;
            
        }
        let sumOfNums = sum (10, 20);
       alert(sumOfNums);
        sumOfNums = sum (20, 30);
      alert(sumOfNums);
        function sum3(a, b, c){
            
            return a + b + c;
        }
        let sumOfThree= sum3(16, 33, 12);
        alert(sumOfThree);*/

//const message = 'Vitajemo na nashomu saiti';
//const greetings = 'Hello' + '!';
//alert(greetings);
//alert(message);
   
    
       let result;
    let a=parseFloat(prompt('a'));
    let b=parseFloat(prompt('b'));
    let c=parseFloat(prompt('c'));
    
    function calcDiskr (a, b, c){
        const result=Math.sqrt(b*b-4*a*c);
        return result;
    }
    let d=calcDiskr(a, b, c);
    function quadX(d){
        
        if(d>0){
            const x1=(-b+d)/(2*a);
            const x2=(-b-d)/(2*a);
            
            return result='x1 '+x1+' x2'+x2;
        }
        else if(d==0){
            const x=(-b)/(2*a);
            return result='x ' + x;
        }
        return result ="No answer";
    }
    let answer=quadX (d);
    alert(answer);
 