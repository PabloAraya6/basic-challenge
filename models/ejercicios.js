
// EJERCICIO 1
const isWhite = async (i, j) => {
    let total = i + j
    return (total % 2 == 0) ? false : true
}

// EJERCICIO 2
const areAnagram = async (s1, s2) => {
    if (s1.length !== s2.length) return false

    s1 = Array.from(s1).sort()
    s2 = Array.from(s2).sort()

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) return false
    }

    return true;
}

// EJERCICIO 3
// function ApplesByFences(fences) {
//     if (fences == 0) return 1
//     return fences + ApplesByFences(Math.pow(2, fences--))
// }

function ApplesByFences(fences) {
    var result = 1;
    while (fences != 0) {
        result += Math.pow(2, fences)
        fences--
    }
    return result;
}

module.exports = {
    isWhite,
    areAnagram,
    ApplesByFences
}
