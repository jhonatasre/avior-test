function isLucky(n) {
    let nStr = n.toString();
    let lengthN = nStr.length;
    let group1 = nStr.substring(0, lengthN / 2);
    let group2 = nStr.substring(group1.length, lengthN);
    let sumGroup1 = group1.split('').reduce((t, i) => t + parseInt(i), 0);
    let sumGroup2 = group2.split('').reduce((t, i) => t + parseInt(i), 0);

    if (n < 10 || n > Math.pow(10, 6)) {
        return false;
    }

    return sumGroup1 == sumGroup2;
}
