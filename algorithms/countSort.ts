export function countSort(arr: number[]) {
    const hash: Record<string, number> = {};
    const result: number[] = [];
    for(let i of arr) {
        if (!hash[i]) {
            hash[i] = 1;
        }else {
            hash[i] += 1;
        }
    };
    
    for(let key in hash) {
        for (let i = 0; i < hash[key]; i++) {
          result.push(parseInt(key));
        }
    };

    return result;
};

console.log(countSort([6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3]));