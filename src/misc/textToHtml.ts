export const textToArray = (text : string) : string[] =>  {
  return text.split(" ").map(word => `${word} `)
}