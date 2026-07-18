export function calculateFinancialHealth(
  income: number,
  expenses: number,
  savings: number
) {
  let score = 0;

  // Positive balance
  if (income > expenses) score += 30;

  // Savings ratio
  if (income > 0) {
    const savingsRate = (savings / income) * 100;

    if (savingsRate >= 20) score += 20;
    else if (savingsRate >= 10) score += 10;
  }

  // Expense ratio
  if (income > 0) {
    const expenseRate = (expenses / income) * 100;

    if (expenseRate <= 50) score += 30;
    else if (expenseRate <= 80) score += 20;
    else score += 10;
  }

  // Financial stability
  if (income > 0 && expenses < income) {
    score += 20;
  }

  score = Math.min(score, 100);

  let status = "Poor";

  if (score >= 80) status = "Excellent";
  else if (score >= 60) status = "Good";
  else if (score >= 40) status = "Average";

  return {
    score,
    status,
  };
}