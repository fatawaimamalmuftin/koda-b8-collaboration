exports.rankineToKelvin = (value) => {
    if (typeof value === "number") {
        return value * 5/9;
    } else {
        throw (new Error ("Input must be number"))
    }
}