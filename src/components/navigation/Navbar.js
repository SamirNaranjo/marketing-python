import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const scrollFunction = () => {
    if(document.getElementById('navbar')){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
           
            document.getElementById('navbar').classList.add('shadow-navbar');
            document.getElementById('navbar').classList.add('bg-white');
        }else {
            document.getElementById('navbar').classList.remove('shadow-navbar');
            document.getElementById('navbar').classList.remove('bg-white');
        }
    }

}

window.onscroll = function(){scrollFunction()};

const Navbar = () => {
    return(
        <nav id ='navbar' className= 'w-full py-2 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className=" px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                    {/* Aca va imagen del logo */}
                    <img 
                    src=''
                    width={80}
                    height={70}
                    className=""/>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 delay-75 hover:delay-150">Casos</NavLink>
                    <NavLink to='/services' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 delay-75 hover:delay-150 mx-4">Servicios</NavLink>
                    <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 delay-75 hover:delay-150 mx-4">Nostros</NavLink>
                    <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 delay-75 hover:delay-150 mx-4">Carreras</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 delay-75 hover:delay-150 mx-4">Blog</NavLink>
                    <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 delay-75 hover:delay-150 mx-4">Contacto</NavLink>

                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Create new job
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStatetoProp =  state => ({

})

export default connect(mapStatetoProp, {

}) (Navbar);