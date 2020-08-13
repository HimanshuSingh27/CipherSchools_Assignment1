//Q1 Reverse Words starting with a Particular letter.

function specialReverse(str,ch){

    let arr = str.split(" "); //Convert sentence into array of words
    let len = arr.length;
    for(i=0;i<len;i++)
    {
        if(arr[i].substr(0,1) == ch) //Compare 1st alphabet of each word with given alphabet
        {
            let newarr = arr[i].split('');// Split the word starting with given alphabet
            arr[i] = newarr.reverse().join('');// reverse and place it in arr
        }
        
    }
    return console.log(arr.join(' ')); //Join arr as a sentence and return
    
    
}


specialReverse("word searches are super fun",'s');
specialReverse("first man to walk on the moon",'m');
specialReverse("peter piper picked pickled peppers",'p');



//Q2 Hitting the Jackpot


function testJackpot(arr){
    let str = arr[0]; //Storing 1st element to compare with all
    let flag = false;
for(i=0;i<4;i++)
{
    if(arr[i]== str)
    flag = true;
    else
    flag = false;
}
return console.log(flag);


}

testJackpot(["@","@","@","@"]);
testJackpot(["abc","abc","abc","abc"]);
testJackpot(["&&","&","&&&","&&&&"]);
testJackpot(["SS","SS","SS","Ss"]);




//Q3Remove Duplicates from an Array

function removeDups(arr)
{
    for(i=0;i<arr.length;i++)
    {
        let first = arr[i]; // Store 1st element to compare with all and delete the duplicates
        for(j=i+1;j<arr.length;j++)
        {
            if(first == arr[j]) //One element is encountered twice
            {
                arr.splice(j,1);//Remove 1 element at index j
            }
        }
    }
    return console.log(arr);
}

removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);
removeDups(["John","Taylor","John"]);
