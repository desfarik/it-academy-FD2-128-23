function maxTriSum(numbers){
    const sorted= [...new Set(numbers.sort((a,b)=>b-a))]
     return sorted[0]+sorted[1]+sorted[2]
    }
    console.log(maxTriSum([3,2,6,8,2,3]))