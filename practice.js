const v = 6




function test(){
    const b = 2

    if (true) {
        const c = 3//easy way to spot block scopes are to search for a curly bracket
        console.log(b,c,v)
    }//if you take the same variable out we cant access c
   console.log (b,v)//error will be not defined

}
test()
console.log(b)
//function scope stays inside a function 
//while a block scope stays inside a block 
// it is better to keep your variables in function and block scope
// Than block scope,more you keep variables locked the better
//There also a module scope which works in side module
// also variables defined by the variable var are only function scope           
