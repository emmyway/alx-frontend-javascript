export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income, // short for income: income,
    gdp, // short for gdp: gdp,
    capita, // short for capita: capita,
  };

  return budget;
}
