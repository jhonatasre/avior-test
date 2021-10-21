function isIPv4Address(inputString) {
    if (inputString.length < 1 || inputString.length > 30) {
        return false;
    }

    let array = inputString.split(".");
    let arrayFiltred = array.filter((i) => {
        return i.match("^[0-9]{1,3}$") && parseInt(i) < 256;
    });

    return arrayFiltred.length == 4;
}
