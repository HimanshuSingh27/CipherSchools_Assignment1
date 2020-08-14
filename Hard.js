
console.log("Q1 Get Real Type solutions")

//Q1 Get Real Type

function realType(data)
{
    let arr = Object.prototype.toString.call(data); //It returns [object string]
    let type = arr.split(" ");
    let typeStr="";
    for(i=0;i<type[1].length;i++)
    {
        if(type[1].charAt(i) !== "]") //For getting only string
        typeStr+= type[1].charAt(i);
    }
    return typeStr;
}

console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));


console.log("Q2 Numbers in String solutions")

//Q2 Numbers in String

function numinStr(arrStr){
    let finalArray=[];
   for(i=0;i<arrStr.length;i++)
   {
    arr1 =  arrStr[i].split("") //Make 2nd array containing each string as array element
   
        for(j = 0; j< arr1.length;j++)
            {
                if(arr1[j] =="1"||arr1[j] =="2"||arr1[j] =="3"||arr1[j] =="4"||arr1[j] =="5"||arr1[j] =="6"||arr1[j] =="7"||arr1[j] =="8"||arr1[j] =="9"||arr1[j] =="0")
                {
                    finalArray.push(arr1.join("")); //Push the string having numbers in finalArray
                    break;
                }
                

            }
   }
   return console.log(finalArray);
}

numinStr(["1a","a","2b","b"]);
numinStr(["abc","abc10"]);
numinStr(["abc","ab10c","ab10c","bcd"]);
numinStr(["this is a test","test1"]);