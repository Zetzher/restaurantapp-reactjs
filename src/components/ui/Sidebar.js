import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
           <div className="p-6">
                <p className="uppercase text-white text-center font-bold text-2xl tracking-wide">RestaurantApp</p>

                <p className="mt-3 text-gray-600">Administra tu restaurant en las siguientes opciones</p>
           </div>

           <nav className="mt-10">
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to ="/" ><h4>Ordenes</h4></NavLink>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to ="/menu" ><h4>Menú</h4></NavLink>
           </nav>
        </div>
    )
}

export default Sidebar;