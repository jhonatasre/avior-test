function add(param1, param2) {
    if (
        param1 < -1000 ||
        param1 > 1000 ||
        param2 < -1000 ||
        param2 > 1000
    ) {
        return false;
    }

    return (param1 + param2);
}
