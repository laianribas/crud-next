import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import { db } from '../backend/firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import Cliente from '../core/Cliente'
import Repo_cliente from '../core/Repo_cliente'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([Cliente.vazio()])
  const [visible, setVisible] = useState(true)
  const clienteCollectionRef = collection(db, 'clientes')

  useEffect(() => {
    const getCliente = async () => {
      const data = await getDocs(clienteCollectionRef)
      setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getCliente()
  }, [])

  async function clienteSelecionado(cliente: Cliente) {

    const clienteDoc = doc(db, "clientes", cliente.id)
    await updateDoc(clienteDoc, { id: cliente.id, idade: Number(cliente.idade), nome: cliente.nome })
    setCliente(cliente)
    setVisible(false)
  }
  async function clienteExcluido(cliente: Cliente) {
    const clienteDoc = doc(db, 'clientes', cliente.id)
    await deleteDoc(clienteDoc)
    location.reload();
  }

  async function salvarCliente(cliente: Cliente) {
    await addDoc(clienteCollectionRef, { nome: cliente.nome, idade: cliente.idade })
    setVisible(true)
    location.reload();
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
