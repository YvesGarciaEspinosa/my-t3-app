import { trpc } from "../../utils/trpc";
import React, { useState } from 'react';

export const Productos = () => {
  const { data: productos, isLoading } = trpc.producto.getAll.useQuery();

  if (isLoading) return <div>Fetching products...</div>;

  return (
    <div className="flex flex-col gap-4">
      {productos?.map((prod, index) => {
        return (
          <div key={index}>
            <p>{prod.nombre}</p>
            <span>-{prod.descripcion}</span>
            <span>-{prod.inventario}</span>
            <span>-{prod.precio}</span>
          </div>
        );
      })}
    </div>
  );
};