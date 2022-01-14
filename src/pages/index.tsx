import Head from 'next/head'
import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'

import Cliente from '../core/Cliente'

export default function Home() {

  const [visible, setVisible] = useState(true)

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 24, '2'),
    new Cliente('Carlos', 14, '3'),
    new Cliente('Pedro', 44, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
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
              <Button cor="green" className="mb-4" onClick={() => setVisible(false)}>Novo Cliente</Button>
            </div>
            <Table clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Form cliente={clientes[0]} cancel={() => setVisible(true)} clienteChanged={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}
