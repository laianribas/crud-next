import Cliente from './Cliente'

export default interface Repo_cliente {
  salvar(cliente: Cliente): Promise<Cliente>
  excluir(cliente: Cliente): Promise<void>
  obterTodos(): Promise<Cliente[]>
}