
function getFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
  }
  

function isPalindrome(str){
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

function getCircumfrence(radius){
    const circumference = 2 * Math.PI * radius;
    return `The circumference is ${circumference}`;
}

function getArea(radius){
    const area = Math.PI * radius * radius;
    return `The area is ${area}`;
}