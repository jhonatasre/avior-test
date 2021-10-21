function centuryFromYear(year) {
    if (year < 1 || year > 2005) {
        return false;
    }

    return Math.floor((year - 1) / 100) + 1;
}
