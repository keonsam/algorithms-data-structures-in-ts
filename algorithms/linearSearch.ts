export function linearSearch(arr: unknown[], n: unknown) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            return true;
        };
    };

    return false;
}