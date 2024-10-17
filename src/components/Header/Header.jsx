import React from 'react';
import { CgProfile } from 'react-icons/cg';


const Navber = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <h1 className="md:text-[32px] text-xl  font-bold text-[#150B2B]">Recipe Calories</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-12">
                    <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>Home</p>
                    <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>Recipes</p>
                    <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>About</p>
                    <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>Search</p>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-4">
                    <div className="form-control ">

                        <input type="text" placeholder="Search" className="input input-bordered rounded-3xl py-3 px-6 md:w-[260px] w-32 " />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-[#0BE58A]">

                            <CgProfile className='text-center text-[32px] text-[#150B2B]' />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>Home</p>
                            <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>Recipes</p>
                            <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>About</p>
                            <p className='text-base font-normal text-[#150B2BB2] hover:text-[#0BE58A]'>Search</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;