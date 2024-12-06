import { Turma } from "./Turma.js";
class DataTurma {
  constructor() {
    this.listaTurma = [];
  }
  cadastrarTurma(turma, ano, quantidadeAlunos, instrutor) {
    this.listaTurma.push(new Turma(turma, ano, quantidadeAlunos, instrutor));
  }
  listarTurma() {
    return this.listaTurma;
  }
  listarTurmasPorNome(turma) {
    return [...this.listaTurma].filter((turmaBusca) => turmaBusca === turma);
  }
  listarTurmaPorAno(ano) {
    return [...this.listaTurma].filter((anoBusca) => anoBusca === ano);
  }
  listarTurmasPorInstrutor(instrutor) {
    return [...this.listaTurma].filter(
      (instrutorBusca) => instrutorBusca === instrutor
    );
  }
}
export { DataTurma };
