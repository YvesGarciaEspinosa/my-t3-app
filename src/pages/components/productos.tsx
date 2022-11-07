import { trpc } from "../../utils/trpc";
import React, { useState } from 'react';

export const Productos = () => {
  const { data: productos, isLoading } = trpc.producto.getAll.useQuery();

  if (isLoading) return <div>Fetching products...</div>;

  return (
    <div className="flex flex-col gap-4">
      <table>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Inventario</th>
              <th>Precio</th>
              <th></th>
            </tr>
      {productos?.map((prod, index) => {
        return (
          <tr key={index}>
            <td>{prod.nombre}</td>
            <td>{prod.descripcion}</td>
            <td>{prod.inventario}</td>
            <td>{prod.precio}</td>
            <td><a className="btn button" href="#">Ver detalles</a> <a className="btn button" href="#">Agregar al carrito</a></td>
          </tr>
        );
      })}
      </table>
    </div>
  );
};