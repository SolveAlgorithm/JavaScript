function solution(my_string) {
    return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
}

function solution(my_string) {
    return my_string.toLowerCase().replace(/[a-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b)
}