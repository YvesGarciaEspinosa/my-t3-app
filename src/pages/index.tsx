import { trpc } from "../utils/trpc";
import {Form} from "./components/form";
import {Productos} from "./components/productos";


const Home = () => {
  return(
    <main className="flex flex-col items-center">
      <h1 className="text-3xl pt-4">Productos</h1>
      <div className="pt-10">
        <div>
          <div className="pt-6">
            <Form />
          </div>
          <div className="pt-10">
            <Productos />
          </div>
        </div>
      </div>
    </main>
  )
};
export default Home;
