import { swap } from './swap';

type PermuteArray = string | number;

export function permuteArray(arr: PermuteArray[], index = 0) {

    if (index === arr.length - 1) {
        console.log(arr);
    }else {
            for (let i = index; i < arr.length; i++) {
              swap(arr, index, i);
              permuteArray(arr, index + 1);
              swap(arr, index, i);
            }
    }
}

permuteArray(["A", "C", "D"]);