export function normalizeMemberEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidMemberEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeMemberEmail(email));
}
