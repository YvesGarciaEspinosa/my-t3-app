import { trpc } from "../../utils/trpc";
import React, { useState } from 'react';
import {slugify} from "./slugify";

export const Form = () => {
  const [nombre, setNombre] = useState("");
  const [slug, setSlug] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [inventario, setInventario] = useState(0);
  const [precio, setPrecio] = useState(0);
  
const utils = trpc.useContext();
  const createProduct = trpc.producto.createProduct.useMutation({
  onMutate: () => {
      utils.producto.getAll.cancel();
      const optimisticUpdate = utils.producto.getAll.getData();

      if (optimisticUpdate) {
        utils.producto.getAll.setData(optimisticUpdate);
      }
    },
    onSettled: () => {
      utils.producto.getAll.invalidate();
    },
  },
  );
  const newSlug = (value: string) =>{
    const newSlug = slugify(value);
    setSlug(newSlug);
  }

  return (
    <form
      className="flex gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        createProduct.mutate({
          nombre,
          slug,
          descripcion,
          inventario,
          precio,
        });
        setNombre("");
        setSlug("");
        setDescripcion("");
        setInventario(0);
        setPrecio(0);
      }}
    >
      <div>
      <label>Nombre </label>
      <input
        type="text"
        value={nombre}
        minLength={2}
        maxLength={100}
        onChange={(event) => {setNombre(event.target.value); newSlug(event.target.value)}}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      </div>
      <div>
       <label>Descripción </label>
      <input
        type="text"
        value={descripcion}
        minLength={2}
        maxLength={100}
        onChange={(event) => setDescripcion(event.target.value)}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      </div>
      <div>
      <label>Inventario </label>
      <input
        type="number"
        value={inventario}
        minLength={2}
        maxLength={100}
        onChange={(event) => setInventario(parseInt(event.target.value))}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      </div>
      <div>
      <label>Precio </label>
      <input
        type="number"
        value={precio}
        minLength={2}
        maxLength={100}
        onChange={(event) => setPrecio(parseFloat(event.target.value))}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      </div>
      <button
        type="submit"
        className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none"
      >
        Agregar Producto
      </button>
    </form>
  );
};
