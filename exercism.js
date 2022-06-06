//? 01 _ You must print the message Hello World! and then the endline as shown below.

export function hello() {
  return "Hello, World!";
}

//? 02 _ Lucian's Luscious Lasagna

// Define the expected oven time in minutes
export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

//Calculate the remaining oven time in minutes
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

//Calculate the preparation time in minutes
export function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}
//Calculate the total working time in minutes
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

//? 03 _ Annalyn's Infiltration
// Check if the 'Fast Attack' action is possible
export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake === true) {
    return false;
  }
  return true;
}

// Check if the 'Spy' action is possible
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake || knightIsAwake || prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}
//Check if the 'Signal Prisoner' action is possible
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  }
  return false;
}

//Check if the 'Free Prisoner' action is possible
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (
    (!knightIsAwake && !archerIsAwake && prisonerIsAwake) ||
    (!archerIsAwake && petDogIsPresent)
  ) {
    return true;
  }
  return false;
}
