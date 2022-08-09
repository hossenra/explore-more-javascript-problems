// fixed: per item wood requirements
// 1. chair-- 3 cft
// 2. table -- 10 cft
// 3. bed -- 50 cft
// 4. vary: quantity

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedeWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedeWood;

// console.log(chairQuantity, tableQuantity, bedQuantity);

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}

const totalWood = woodCalculator(1, 1, 1);
console.log("total wood required: ", totalWood);