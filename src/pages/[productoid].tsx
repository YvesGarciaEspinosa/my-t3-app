import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

function SingleItemPage(){
  const router = useRouter();

  const productoId = router.query.productoId as string


  const {data, isLoading} = trpc.
  if(isLoading){
    return <p>Cargando producto...</p>
  }

  if(!data){
    return <Error statusCode={404} />
  }
  return
  <div>
      <h1>{data?.nombre}</h1>
      <p>Descripción{data?.descripcion}</p>
      <p>Inventario: {data?.inventario}</p>
      <p>Precio: {data?.precio}</p>
      <a className="btn button">Editar producto</a>
      <a className="btn button">Agregar al carrito</a>
  </div>
}

export default SingleItemPage;