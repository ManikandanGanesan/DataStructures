import { Injectable } from '@nestjs/common';

@Injectable()
export class ArraysService {

    left_rotation(params) {
        let arr = params.inputArr;
        let result = [];
        let n = arr.length;

        let k = params.k;
        for(let i = 0; i < k; i++){
            arr[n + i] = arr[i];
        }
        for(let i = 0; i < arr.length; i++) {
            if(i >= k)
               result.push(arr[i]);
        }
        //console.log('Array Output: ', result);
        return result;
    }
}
