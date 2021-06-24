function calculateArea(length,edge)
{
	return length * edge;
}
// Your code Below this line:

let squareArea1 = calculateArea(4,4);
let squareArea2 = calculateArea(2,2);
let squareArea3 = calculateArea(5,5);
const squareArray = [squareArea1, squareArea2, squareArea3];
    



for (i = 0; i < 3; i++)
    {
        calculateArea();
        console.log(squareArray[i]);
    }




