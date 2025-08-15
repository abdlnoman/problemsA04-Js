function totalFine( fare ) {
    if(typeof  fare !== "number" || fare<= 0) {
        return "Invalid";
    }
    let surcharge = fare * 0.2;
    let serviceCharge = 30;
    let total = fare + surcharge +serviceCharge;
    return total;
}

function  onlyCharacter( str ) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let cleaned = str.replace(/\s+/g, "").toUpperCase();
    return cleaned;
}
