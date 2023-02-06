function arraySlice(arr: unknown[], beginIndex?: number, endIndex?: number) {
    if (!beginIndex && !endIndex) {
        return arr;
    };

    if (!endIndex) {
        endIndex = arr.length;
    };

    const result: unknown[] = [];

    for (let i = beginIndex || 0; i < endIndex; i++) {
        result.push(arr[i]);
    };

    return result;
}


console.log(arraySlice([4, 53, 31 , 64 ,7 , 2 , 63 , 3 , 4, 5, 6], 4, 9))