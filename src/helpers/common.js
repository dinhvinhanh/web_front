const removeArrayElement = (array, elem) => {
    let index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}

export default {
    removeArrayElement
};