function  onlyCharacter( str ) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let cleaned = str.replace(/\s+/g, "").toUpperCase();
    return cleaned;
}


