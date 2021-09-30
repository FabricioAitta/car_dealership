import TableClients from "./table-clients";
import TableCars from './table-cars';
import TableStatistic from "./table-statistic";

export default function ContainerRight({ route }) {
    return(
        <>
        <div className="bg-gray-200 w-full">
          <div className="w-full h-screen bg-gray-800 sm:mt-0 overflow-y-auto">
            <div className="flex items-center justify-center">
              <p className="text-gray-100 pt-5">{route}</p>
            </div>
            {(route === 'clientes') &&  <TableClients />}
            {(route === 'automoviles') &&  <TableCars />}
            {(route === 'ventas') &&  <TableStatistic />}

          </div>
        </div>
        </>
    )
}