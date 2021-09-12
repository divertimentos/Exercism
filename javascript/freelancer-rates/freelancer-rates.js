// @ts-check
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function monthRate(ratePerHour, discount) {
  return Math.ceil(
    dayRate(ratePerHour) * 22 - dayRate(ratePerHour * 22) * discount
  );
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {number} discount to apply, example 20% written as 0.2
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount) {
  throw new Error("Implement the daysInBudget function");
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  throw new Error("Implement the applyDiscount function");
}
