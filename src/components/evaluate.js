export const evaluateMatch = (player, goal) => {
    for (let pCoord in player) {
        for (let gCoord in goal) {
            if (player[pCoord].x === goal[gCoord].x && goal[gCoord].y === player[pCoord].y) {
                console.log(player[pCoord].x, goal[gCoord].x);
                console.log(pCoord, gCoord);
                break;
            }
            if (gCoord === "c") {
                return false;
            }
        }
    }
    return true;
}