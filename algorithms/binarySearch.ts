
export function binarySearch(arr: number[], n: number) {
    let low = 0, high = arr.length - 1;


    while(low <= high) {
        var middle = Math.floor((high + low) / 2);
        if (arr[middle] === n) {
            return middle;
        }else if (arr[middle] > n) {
            high = middle - 1;
        }else {
            low = middle + 1;
        }
    }

    return -1;
}


console.log(binarySearch([5, 4, 6, 7, 13, 7, 0 , 2 , 6 , 9], 6));
