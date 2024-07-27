function sortString(s) {
    let array  = s.split("")
    return array.sort().join(" ");
}
let str = "zxlaymnop";
console.log(sortString(str))