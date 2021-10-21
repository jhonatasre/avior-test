function checkPalindrome(inputString) {
    if (inputString.length < 1 || inputString.length > Math.pow(10, 5)) {
        return false;
    }

    return inputString === inputString.split("").reverse().join("");
}
