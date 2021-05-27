const codonAminoAcid = {
  ucu: "Sérine",
  ucc: "Sérine",
  uca: "Sérine",
  ucg: "Sérine",
  agu: "Sérine",
  agc: "Sérine",
  ccu: "Proline",
  ccc: "Proline",
  cca: "Proline",
  ccg: "Proline",
  uua: "Leucine",
  uug: "Leucine",
  uuu: "Phénylalanine",
  uuc: "Phénylalanine",
  cgu: "Arginine",
  cgc: "Arginine",
  cga: "Arginine",
  cgg: "Arginine",
  aga: "Arginine",
  agg: "Arginine",
  uau: "Tyrosine",
  uac: "Tyrosine"
}
let myFunction6 = () => {
  let arn = prompt("Quel code d'ARN veux-tu traduire?")
  let translateArn = (arn) => {
    return arn.toLowerCase().match(/[a-z]{1,3}/g).map( (codon) => { return codonAminoAcid[codon]}).join("-")
  }
  console.log(translateArn(arn))
}