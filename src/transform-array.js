module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let result = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next") {
                result.push(arr[i]);
            }
            // result.push(arr[i]);
            if (arr[i-1] === '--discard-next') {
                result.splice(result.length-1,1);
            }
            if (arr[i+1] === '--discard-prev') {
                result.splice(result.length-1, 1);
            }
            if (arr[i+1] === '--double-prev') {
                result.push(arr[i]);
            }
            if (arr[i-1] === '--double-next') {
                result.push(arr[i]);
            }
        }
        return result;
    } else {
        throw 'arr is not an Array';
    }
}; 
