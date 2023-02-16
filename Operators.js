// The Addition Operator (+) adds numbers:

let var1 = 5;
let var2 = 4;
let var3 = var1 + var2;
document.getElementById("operators").innerHTML =
  "the value of z: " + var3 + ".";

//The Multiplication Operator (*) multiplies numbers:

let var4 = var1 * var2;
document.getElementById("operators").innerHTML = "var1 * var2 = " + var4 + ".";

/* There are different types of JavaScript operators:

            Arithmetic Operators
            Assignment Operators
            Comparison Operators
            Logical Operators
            Conditional Operators
            Type Operators

*/
// Arithmetic Operators

/*
    Operators                               Description

    1. +                                    Addition

    2. -                                    Subtraction

    3. *                                    Multipliction

    4. **                                   Exponentiation

    5. /                                    Division

    6. %                                    Modulus (Division Remainder)

    7. ++                                   Increment

    8. --                                   Decrement

 */

// JS Assignment Operator
/*          
Operator	Example	    Same As
 =	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x**= y	    x = x ** y

*/

// yow Know = Operator As well

// += Operator rewrite the variable

var3 += " hello! the ans is: " + var3;
document.getElementById("operators").innerHTML = var3;
    // Output is 9 hello! the ans is: 9

// -= 