import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'

import Cliente from '../core/Cliente'
import Repo_cliente from '../core/Repo_cliente'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([Cliente.vazio()])
  const [visible, setVisible] = useState(true)


  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisible(false)
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisible(true)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisible(false)
  }
  return (
    <div className={`
      flex h-screen justify-center
      items-center
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible ? (
          <>
            <div className='flex justify-end'>
              <Button cor="green" className="mb-4" onClick={() => novoCliente()}>Novo Cliente</Button>
            </div>
            <Table clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Form cliente={cliente} cancel={() => setVisible(true)} clienteChanged={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}
