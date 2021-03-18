export function selectionSort(array) {
    const animations = [];

    //TODO: Fix Time Complexity

    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            animations.push([i, j]);
            animations.push([i, j]);
            
            if (array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
                animations.push([i, array[i]]);
                animations.push([j, array[j]]);
            } else {
                animations.push([i, array[i]]);
                animations.push([j, array[j]]);
            }
            //animations.push([i, j]);
        }
    }
    //console.log('Anim: ', animations);

    return animations;

}