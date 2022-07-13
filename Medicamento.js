/*
 * Controle de estoque de medicamentos
 * Fonte: https://documentacao.senior.com.br/gestao-de-pessoas-hcm/6.2.34/sm/fr110rem.htm
 * 
 * Informações do produto:
 * Codigo e nome: identificação do medicamento
 * Concentração: descreve a comprosição de cada medicamento, como cada comprimido contem 500mg de Paracetamol;
 * Uso: externo ou oral;
 * Posologia: o modo de tomar o medicamento conforme bula, como 1 a 2 comprimidos, 3 a 4 vezes ao dia;
 * Prescrição: o modo de tomar o medicamento conforme receita, como de 6 em 6 horas;
 * Quantidade de aplicação: será sugerida na receita, como ampola de 10ml(mililitros);
 * Regra Vacina: informar uma regra para fazer um tratamento específico na peridiocidade e validade deste medicamento;
 * Quantidade de doses: informar a quantidade de doses , de 1 a 3 que deverá ser aplicada para atingir a imunidade;
 * Periodicidade: prazo em que deverá ser aplicada nova dose, poderá ser zero
 * Validade: quantidade de dias da imunidade
 * 
 */

class Medicamento {
    constructor(
        codigo, 
        nome,
        concentracao,
        uso,
        posologia,
        prescricao,
        qtdAplicacao,
        regraVacina,
        qtdDoses,
        periodicidade,
        validade
    )
    {
        this.codigo = codigo
        this.nome = nome
        this.concentracao = concentracao
        this.uso = uso
        this.posologia = posologia
        this.prescricao = prescricao
        this.qtdAplicacao = qtdAplicacao
        this.regraVacina = regraVacina
        this.qtdDoses = qtdDoses
        this.periodicidade = periodicidade
        this.validade = validade
    }
}
module.exports = Medicamento;