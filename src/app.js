let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com','.net','.us','io']


function generarDominios(pronoun , adj, noun, extensions) {
  const dominios = [];
  
  for (let a of pronoun) {
      for (let b of adj) {
          for (let c of noun) {
              for (let d of extensions) {
                  dominios.push(`${a}${b}${c}${d}`);
              }
          }
      }
  }
  
  return dominios;
}

const dominiosGenerados = generarDominios(pronoun, adj, noun, extensions);

for (let dominio of dominiosGenerados) {
  console.log(dominio);
}