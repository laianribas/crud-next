import Cliente from '../core/Cliente'
import { IconEdit, IconDelete } from './Icons'


interface TableProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Table(props: TableProps) {

  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

  function headerRender() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>

    )
  }

  function dataRender() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? actionRender(cliente) : false}
        </tr>
      )
    })
  }

  function actionRender(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (

          <button className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}
            onClick={() => props.clienteSelecionado?.(cliente)}
          >{IconEdit}</button>
        ) : false}

        {props.clienteExcluido ? (
          <button className={`flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1`}
            onClick={() => props.clienteExcluido?.(cliente)}
          >{IconDelete}</button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        {headerRender()}
      </thead>
      <tbody>
        {dataRender()}
      </tbody>
    </table>
  )
}