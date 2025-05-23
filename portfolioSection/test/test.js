console.log("merp");

function exercise1(length, width)
{
    let width = 5;
    let length = 10;

    let Area = length * width;
    return Area;
    return 
}

function exercise2()
{
    let x = 3;
    let y = 4;

    let sum = x + y;

    if(x===y)
    {
        return sum*3;
    }
    else
    {
        return sum;
    }
}

function exercise3()
{
    let randomNum1 = Math.floor(Math.random() * 51); // floor = round off
    let randomNum2 = Math.floor(Math.random() * 51);

    if(randomNum1 ===50 || randomNum2 === 50 || (randomNum1+randomNum2) === 50)
    {
        return true;
    }
    else
    {
        return false;
    }

}