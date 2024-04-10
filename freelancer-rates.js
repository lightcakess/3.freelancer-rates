export const billableDays = 22

export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let fullMonths = Math.floor(numDays/billableDays)
  
  let fullPriceDays = numDays % billableDays

  let paidWithDiscount = dayRate(ratePerHour) * fullMonths * billableDays * ( 1 - discount )
  
  let paidWithoutDiscount = fullPriceDays * dayRate(ratePerHour)
  
  return Math.ceil( paidWithDiscount + paidWithoutDiscount )
}

dayRate(89);

daysInBudget(20000, 89);

priceWithMonthlyDiscount(89, 230, 0.42);