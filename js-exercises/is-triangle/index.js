const SideA = 5;
const SideB = 8;
const SideC = 9;

function solution(SideA,SideB,SideC){
  if (SideA + SideB <= SideC || SideA + SideC <= SideB || SideB + SideC <= SideA) 
        return false; 
    else
        return true; 
}

console.log(solution(SideA,SideB,SideC));