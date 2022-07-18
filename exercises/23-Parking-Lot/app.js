

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here

var getParkingLotState = (arr) => {

  let disponibles = 0;
  let ocupados = 0;
  let totales = 0;
  var state = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        totales++;
        ocupados++;
      }
      else if (arr[i][j] == 2) {
        totales++;
        disponibles++;
      }
    }
  }

  state.availableSlots = disponibles;
  state.totalSlots = totales;
  state.occupiedSlots = ocupados;

  return state;

}
console.log(getParkingLotState(parking_state));