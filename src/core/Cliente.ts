export default class Cliente {
  #id: string
  #nome: string
  #idade: number

  constructor(nome: string, idade: number, id: string = null) {
    this.#nome = nome;
    this.#id = id;
    this.#idade = idade;

  }

  static vazio(){
    return new Cliente('',0)
  }

  get id(){
    return this.#id;
  }

  get idade(){
    return this.#idade;
  }

  get nome(){
    return this.#nome;
  }
}