console.log("Q1 Convert Minutes into seconds Solutions");
//Q1 Convert Minutes into seconds
function convert(minutes)
{
    return minutes*60;
}

console.log(convert(5));

convertm = minutes=>minutes*60;
console.log(convertm(3));

console.log("Q2 Divides Evenly Solutions");

//Q2 Divides Evenly
dividesEvenly = (a,b)=> //Arrow Function
{
    if(a%b == 0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));
