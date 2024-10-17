import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = recipe;
    return (
        <section className="w-[379px] ">
            <div className="xl:w-[379px] lg:w-[300px] md:w-[330px] rounded-2xl border border-[#28282833] bg-white xl:p-6 p-3">
                <img src={recipe_image} alt='' className="rounded-xl w-full h-[200px]" />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4 text-[#282828]">{recipe_name}</h2>
                    <p className='text-[#878787] text-base font-normal leading-[30px] firaF'>{short_description}</p>
                    <hr className="border-[#2828281A] mt-4 mb-6" />

                    <div className=' mt-2 mb-2'>
                        <h2 className='text-lg font-medium text-[#282828]'>Ingredients: {ingredients.length}</h2>
                        {
                            ingredients.slice(0, 3).map((ingredient, idx) => {
                                return <li className=' text-[#878787] mt-4 text-lg font-normal firaF' key={idx}>{ingredient}</li>
                            })
                        }
                    </div>
                    <hr />

                    {/* time */}
                    <div className='flex justify-between my-6 items-center'>
                        <p className='flex gap-2 justify-center items-center text-[#282828B9]'><CiClock2 /> {preparing_time} minutes</p>
                        <p className='flex gap-2 justify-center items-center text-[#282828B9]'><AiOutlineFire /> {calories} Calories</p>
                    </div>


                    <div className="card-actions">
                        <button onClick={() => handleWantToCook(recipe)} className=" bg-[#0BE58A] text-[#150B2B] text-lg font-medium py-[13px] px-6 rounded-[50px]">Want To Cook</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Recipe;