import { activeText } from "../store/textInputStore"

export const keyDownHandler = (text: string, key : string) : [string, boolean] => {
  if (key === "Backspace") {
    return [text.slice(0, -1), false]
  }
  // main logics 
  let rightText : string;
  activeText.subscribe(value => rightText = value)

  if ( rightText[text.length] === key ) {
    return [`${text}${key}`, false]
  }
  else {
    return [text, true]
  }

}