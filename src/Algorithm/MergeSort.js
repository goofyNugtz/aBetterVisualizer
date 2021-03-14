
const mergeSort = (array) => {
    //console.log("Parameter Array: "array);
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    //console.log(mid);
    const firstHalf = mergeSort(array.slice(0, mid));
    const secondHalf = mergeSort(array.slice(mid));

    const sortedArray = [];

    let i = 0, j = 0;
    while (i < firstHalf.length && j < secondHalf.length){
        if (firstHalf[i] < secondHalf[j]){
            sortedArray.push(firstHalf[i++]);
            //console.log("First Half push: ", sortedArray);
            //console.log("I is incremented");
        } else {
            sortedArray.push(secondHalf[j++]);
            //console.log("Push from Second: ", sortedArray);
            //console.log("J is incremented");
        }
    }

    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    

    return sortedArray;
}

export default mergeSort;