import periodTable from "../config/elements"

const breakify = (str: string) => {
    let result: string[] = []

    for(let i = 0; i < str.length; i++){
      const oneChar = str[i].toUpperCase()
      const twoChars = `${oneChar}${str[i + 1]}`

      if (periodTable.includes(twoChars)){
        result = [str.slice(0, i), twoChars, str.slice(i + 2)]
        break
      }

      if (periodTable.includes(oneChar)){
        result = [str.slice(0, i), oneChar, str.slice(i + 1)]
        break
      }
    }
    return result
  }

  export {breakify}