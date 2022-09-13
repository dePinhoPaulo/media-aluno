let no = document.getElementById("nome");
let inpra = document.getElementById("ra");
let inpp1 = document.getElementById("p1");
let inpp2 = document.getElementById("p2");
let inpp3 = document.getElementById("p3");
let inpp4 = document.getElementById("p4");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("carregando...")
    let ra = inpra.value;
    let p1 = inpp1.value;
    let p2 = inpp2.value;
    let p3 = inpp3.value;
    let p4 = inpp4.value;
    let nome = no.value;

    let total = (parseInt(p1)+parseInt(p2)+parseInt(p3)+parseInt(p4))/4 ;

    resultado.innerHTML = "Aluno: "+nome+" | "+" Ra: "+ra+" | "+" Nota: "+total+" - "+res(total);
    
}

function res (tot){
	if (tot>=6){
		return "Aprovado"
	}
	else if(tot<6){
		return "Reprovado"
	}
}

