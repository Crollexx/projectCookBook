/* eslint-disable react/prop-types */
import {NavLink} from 'react-router-dom'

function Nav({user}) {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            
            {
                user ? 
                <>             
                    <NavLink to='/recipe'>Posts</NavLink>
                    <NavLink to='/auth/logout'>Logout</NavLink>
                </>
                :
                <>
                    <NavLink to='/auth/authorization'>Authorization</NavLink>
                    <NavLink to='/auth/registration'>Regisration</NavLink>
                </>
            }

        </nav>
    );
}

export default Nav;