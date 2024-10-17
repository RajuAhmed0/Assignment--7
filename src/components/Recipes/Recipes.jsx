import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cart,setCart] = useState([]);
    const [currentCart, setCurrentCart] = useState([]);
    const [totalTime,setTotalTime] = useState(0);
    const [totalCalories,setTotalCalories] = useState(0);

    useEffect(()=>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
   //console.log(cart)
// handle want to cook button
   const handleWantToCook = (recipe) => {
       const isExists =  cart.find(c => c.recipe_id === recipe.recipe_id);
       if(!isExists){
            const newRecipe = [...cart,recipe]
            setCart(newRecipe)
            toast.success("Successfully Added")
       }
       else{
        toast.error("Already Exists")
       }  
   }
// handle preparing button
   const handlePreparingBtn = (cart2) => {
       
        const removeCart = cart.filter(item => item.recipe_id !== cart2.recipe_id);
        setCart(removeCart);
        setCurrentCart([...currentCart,cart2]);
        setTotalTime(totalTime + cart2.preparing_time);
        setTotalCalories(totalCalories + cart2.calories);

   }
    return (
        <section className=" mx-auto px-2 ">
            <div className="text-center max-w-[1320px] mx-auto mb-12">
            <h2 className='md:text-[40px] text-3xl font-semibold text-[#150B2B] text-center mb-6'>Our Recipes</h2>
            <p className='lg:w-[823px] md:w-[700px] w-96 md:text-base text-sm  font-normal text-[#150B2B99] md:leading-[30px] text-center mx-auto'>Discover delicious, easy-to-make recipes using fresh ingredients, perfect for any occasion, from weeknight meals to special gatherings.</p>
            </div>
            <div className="md:flex gap-6">
                
                    <div className="md:w-[782px] grid lg:grid-cols-2 grid-cols-1 gap-6 mb-5 ">
                       {
                        recipes.map((recipe,idx) => (
                            <Recipe key={idx} handleWantToCook={handleWantToCook} recipe={recipe}></Recipe>
                        ))
                       }
                    </div>
                <div className="">
                    <Carts totalTime={totalTime} totalCalories={totalCalories} handlePreparingBtn={handlePreparingBtn} currentCart={currentCart} cart={cart}></Carts>
                </div>
            </div>
            <ToastContainer />        
        </section>
    );
};

export default Recipes;