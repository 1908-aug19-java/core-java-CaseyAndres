//problem 1: longest String
function longString(args)
{
        let maxSize;
    let i;
for (i = 0; i < args.length; i++) {
     if (args[i].length>maxSize.length)
         maxSize=args[i];
}
    return maxSize;//come back to this one.
}

//problem 2: reverse string
function revString(inputString){
    return inputString.reverse();
}
//problem 3: count Vowels
function countVowels(inputString)
    {
        let str = inputString;
        let brokenStr = inputString.split();
        let i;
        let ret;
        for(i=0; i<brokenStr.length; i++)
        {if(isVowel(inputString.charAt(i)))
            ret++;
        }
return ret;
    }
function isVowel(check)
{
    return x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
}
//problem 4: Email validation
//Valid email is any string that contains @ not at the first position and has .something.
function isEmail(string)
{
return string.includes("@")&&string.charAt(1)!=="@" && string.includes(".");
}
//problem 5: 
removeChar(string, index)
{
 return string.slice(0,index-1)+string.slice(index+1);
}
//problem 6:
bubbleSort(numArray)
{
    let x;
    let y;
for (x = 0; x < numArray.length-1; x++) {
  for(y=0; y<numArray.length-x-1; y++)
  {
    if (numArray[j] > numArray[j+1]) 
    { 
        let temp = arr[j]; 
        arr[j] = arr[j+1]; 
        arr[j+1] = temp; 
    } 
  }
}
return numArray;
}
//problem 7:
isEven(someNum)
{
    return someNum%2===0;
}
//Problem 8:
isPalindrome(someStr)
{
    return someStr===someStr.reverse;
}
