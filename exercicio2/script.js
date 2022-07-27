const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
console.log("antes minha string tinha", minhaString.length, "caracteres.")

const nS = minhaString.trim()
console.log (`${nS.replace("________" , "sticioso")}`)
console.log(`Minha string depois de remover os espaços tem ${nS.length} caracterios.`)


