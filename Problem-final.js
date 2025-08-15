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


function  bestTeam( player1, player2 ) {
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null || Array.isArray(player1) || Array.isArray(player2)) {
        return "Invalid"
    }


        let total1 = player1.foul + player1.cardY + player1.cardR;
        let total2 = player2.foul + player2.cardY + player2.cardR;

        if (total1 < total2) {
            return player1.name;
        }
        else if (total2 < total1) {
            return player2.name;
        }

        else {
            return "Tie";
        }
    }


    function  isSame(arr1 , arr2 ) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
            return "Invalid";
        }
    
        
        if (arr1.length !== arr2.length) {
            return false;
        }
    
        
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    
        return true;
    }