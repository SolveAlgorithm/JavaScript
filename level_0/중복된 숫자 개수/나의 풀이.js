function solution(array, n) {
    return array.reduce((acc , cur) => {return cur === n ? acc+1 : acc},0);
}