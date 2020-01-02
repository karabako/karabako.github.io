
const base = {
  "メタモン": [48, 48, 48, 48, 48, 48],
  "ギャラドス": [95, 125, 79, 60, 100, 81]
}
function statCalc(base) {
  const stat, level = 100;
  for (i = 0; i < 32; i++) {
    //hp
    stat[i][0] = ((base[0] * 2 + i) * level / 100) + level + 10;
    //ABCDS
    for (j = 1; j < 6; j++) {
      stat[i][j] = (((base[j] * 2 + i) * level / 100) + 5);
    }
  }
  return stat;
}
  
  