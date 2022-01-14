import { useState } from "react";
import Input from "./Input";
import Cliente from "../core/Cliente"
import Button from "./Button";

interface FormProps {
  cliente: Cliente
  clienteChanged?: (cliente: Cliente) => void
  cancel?: () => void
}

export default function Form(props: FormProps) {
  const id = props.cliente?.id
  const [name, setName] = useState(props.cliente?.nome ?? '')
  const [age, setAge] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Input value={id} text="Codigo" readOnly />
      ) : false}
      <Input type="text" value={name} text="Nome" changedValue={setName} className="mb-5" />
      <Input type="number" value={age} text="Idade" changedValue={setAge} className="mb-5" />

      <div className='flex justify-end mt-3'>
        <Button cor="blue" className="mr-2" onClick={() => props.clienteChanged?.(
          new Cliente(name, age, id)
        )}>
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button cor="gray" onClick={props.cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}