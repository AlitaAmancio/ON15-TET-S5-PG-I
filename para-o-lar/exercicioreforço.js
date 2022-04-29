let rna = []
class sequenciaDna {
    constructor(sequencia) {
        this.sequencia = sequencia;

    }


    DNAparaRNA(DNA) {

        let dna = DNA.split("")

        dna.forEach(letra => {
            if (letra == "G") {
                letra = "C"
                rna.push(letra)
            } else if (letra == "C") {
                letra = "G"
                rna.push(letra)
            } else if (letra == "T") {
                letra = "A"
                rna.push(letra)
            } else if (letra == "A") {
                letra = "U"
                rna.push(letra)
            }

        }); let rnastring = rna.join("")
        console.log(rnastring)


    }

}

const filamentoDna = new sequenciaDna ("ATGCCGAAATTTGCG");
filamentoDna.DNAparaRNA(filamentoDna.sequencia)