let pronoun = ['the', 'our','you'];
let adj = ['great', 'big','better'];
let noun = ['jogger', 'racoon','pipe'];
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