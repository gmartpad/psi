function formatPhoneNumber(input: string): string {
  return input.replace(/[+\s-]/g, '')
}

export default formatPhoneNumber
