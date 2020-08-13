//Q1 Count instances of a character in aString

function charCount(str1,str2)
{
    count = 0; // Counts number of String 1(str1) in String 2 (str2)
    for(i = 0; i < str2.length;i++)
    {
        if(str2[i] == str1)
        count++;
    }
    return count;
}

console.log(charCount('a','edabit'));
console.log(charCount('c','Chamber of secrets'));
 console.log(charCount('b','big fat bubble'));


//Q2 Add up the numbers from a single number

addUp = number => {
    sum=0;
    for(i=1;i<=number;i++)
    sum += i;
    return sum;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));


//Q3 Replace vowel with Another character

function replaceVowel(str)
{
    let len =str.length;
    let newstr = str;
    while(len>0){ //Search for vowels in the string and replace it accordingly
    
    newstr = newstr.replace('a','1');
    newstr = newstr.replace('e','2');
    newstr = newstr.replace('i','3');
    newstr = newstr.replace('o','4');
    newstr = newstr.replace('u','5');
    len--;
}
    console.log(newstr);
    
}

replaceVowel("karachi");
replaceVowel("chembur");
replaceVowel("khandbari");
