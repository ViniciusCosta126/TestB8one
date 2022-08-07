export function formatNumber(value_format:number){
 let novo_valor = value_format.toFixed(2).toString()
 novo_valor = novo_valor.replace('.',',')
 return novo_valor
}