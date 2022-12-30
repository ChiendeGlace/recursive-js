const merge = (leftSide, rightSide) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
        const leftEl = leftSide[leftIndex];
        const rightEl = rightSide[rightIndex];
        if (leftEl > rightEl) {
            output.push(rightEl)
            rightIndex++
        } else {
            output.push(leftEl)
            leftIndex++
        }
    }
    return [...output, ...leftSide.slice(leftIndex), ...rightSide.slice(rightIndex)]
}


const mergeSort = (arr) => {
    if (arr.length == 0) return 'Empty array';
    if (arr.length == 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, mid);
    const rightSide = arr.slice(mid, arr.length);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
};
