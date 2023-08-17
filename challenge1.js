const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%',
}

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want
 
const taxAsDecimal = tax['913'].slice(0, 2) / 100
/**
 * 12% of the salary
 **/
const taxAmount = salary * taxAsDecimal

/**
 * Amount after tax deducation
 **/
const startingAfterTax = salary - taxAmount

/**
 * Type of the apartment that the user is renting
  **/
const type = lodging + size
/**
 * Remaining amount after all deductions
 * */
const balance = startingAfterTax - rent['large-apartment'] - parseFloat(expenses.food) - parseFloat(expenses.transport)   
console.log( balance.toFixed(2))