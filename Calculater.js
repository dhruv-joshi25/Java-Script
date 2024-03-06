number1=10;
number2=30;

choice = 3;

console.log(`
1. For Addition.
2. For Substraction
3. For Multiplication
4. For Division
5. For Mode
`);


switch (choice) {
    case 1:
        console.log(`Addition of ${number1} + ${number2} is : `,number1+number2);
        break;
    case 2:
        console.log(`Substraction of ${number1} - ${number2} is : `,number1-number2);
        break;
    case 3:
        console.log(`Multiplication of ${number1} * ${number2} is : `,number1*number2);
        break;
    case 4:
        console.log(`Division of ${number1} / ${number2} is : `,number1/number2);
        break;
    case 5:
        console.log(`Mode of ${number1} % ${number2} is : `,number1%number2);
        break;
                        
    default:
        break;
}