
import PropTypes from 'prop-types';


const Carts = ({ cart, handlePreparingBtn, currentCart, totalTime, totalCalories }) => {
    console.log(currentCart);
    return (
        <div className="xl:w-[514px] lg:w-[400px] md:w-[400px] w-[380px] border border-gray-300 rounded-2xl  md:p-6 p-3">
            <div>
                <h2 className="text-2xl font-semibold text-center md:mt-8 mt-3">Want to cook: {cart.lengp}</h2>
                <hr className="w-[350px] border-t border-[#2828281A] mx-auto mt-4 mb-6" />

                <div className="overflow-x-auto mt-4 mb-8">
                    <div className="div ">

                        <div>
                            <div className="flex justify-between w-[289px] text-[#878787] text-base font-medium ml-8 mb-8">
                                <p>Name</p>
                                <div className='flex gap-[52px]'>
                                    <p>Time</p>
                                    <p>Calories</p>
                                </div>
                            </div>
                        </div>
                        <div className=' space-y-2'>

                            {
                                cart.map((c, idx) => (

                                    <div key={idx} className="flex items-center py-2 gap-[23px] bg-[#28282813] rounded-lg mb-2 md:text-base text-xs font-normal firaF ">
                                        <p>{idx + 1}</p>
                                        <p>{c.recipe_name}</p>
                                        <p>{c.preparing_time} minutes</p>
                                        <p>{c.calories} Calories</p>
                                        <div className=''>
                                            <button onClick={() => handlePreparingBtn(c)} className=" md:px-4 px-2 md:py-2 py-1 bg-green-500 rounded-full lg:mt-2 lg:mb-2 mt-6 text-white">preparing</button>
                                        </div>


                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>


            <div className=" mt-10">
                <h2 className="text-2xl font-semibold text-center text-[#282828]">Currently cooking: {currentCart.lengp}</h2>
                <hr className="w-[350px] border-t border-[#2828281A] mx-auto mt-4 mb-6" />


                <div className="overflow-x-auto mt-4">
                    <div className="div">

                    <div className="flex justify-between  text-[#878787] text-base font-medium ml-8 mb-8">
                                <p>Name</p>
                                <div className='flex gap-[82px]'>
                                    <p>Time</p>
                                    <p>Calories</p>
                                </div>
                            </div>
                        
                        <div>

                            {
                                currentCart.map((c, idx) => {
                                    return (
                                        <div key={idx} className="flex items-center py-2 justify-between bg-[#28282813] rounded-lg mb-2 md:text-base text-xs font-normal firaF ">
                                            <p>{idx + 1}</p>
                                            <div className='ml-2 '>{c.recipe_name}</div>
                                            <div>{c.preparing_time} minutes</div>
                                            <div>{c.calories} Calories</div>

                                        </div>
                                    )
                                })
                            }

                            <div className='flex justify-between'> 
                                <h2 className='md:text-base text-sm font-bold'>Total Times = {totalTime} minutes</h2>
                                <h2 className='md:text-base text-sm font-bold'>Total Calories = {totalCalories} Calories</h2>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

Carts.propTypes = {
    cart: PropTypes.array,
    handlePreparingBtn: PropTypes.func,
    currentCart: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
};

export default Carts;