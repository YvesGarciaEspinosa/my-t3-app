import { trpc } from "../../utils/trpc";
import React, { useState } from 'react';
import exp from "constants";

export const Form = () => {
  const [nombre, setNombre] = useState("");
  const [slug, setSlug] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [inventario, setInventario] = useState(0);
  const [precio, setPrecio] = useState(0);
  const createProduct = trpc.producto.createProduct.useMutation();

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
      <input
        type="text"
        value={nombre}
        minLength={2}
        maxLength={100}
        onChange={(event) => setNombre(event.target.value)}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      <input
        type="text"
        value={descripcion}
        minLength={2}
        maxLength={100}
        onChange={(event) => setDescripcion(event.target.value)}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      <input
        type="number"
        value={inventario}
        minLength={2}
        maxLength={100}
        onChange={(event) => setInventario(parseInt(event.target.value))}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      <input
        type="number"
        value={precio}
        minLength={2}
        maxLength={100}
        onChange={(event) => setPrecio(parseFloat(event.target.value))}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none"
      >
        Agregar Producto
      </button>
    </form>
  );
};
