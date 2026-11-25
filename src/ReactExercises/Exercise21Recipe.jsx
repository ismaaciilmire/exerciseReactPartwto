import React, { useState } from 'react'

const Exercise21Recipe = () => {

  const [selectedCategory,setSelectedCategory] = useState('all')
  const categories= ['all','breakfast','lunch','dinner','dessert'] 
  const recipes = [
    {
      id: 1,
      title: 'Pancakes',
      category: 'breakfast',
      time: '20 min',
      difficulty: 'easy',
      image: '🥞',
      ingredients: ['flour', 'eggs', 'milk', 'butter']
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      category: 'dinner',
      time: '30 min',
      difficulty: 'medium',
      image: '🍝',
      ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
    },
    {
      id: 3,
      title: 'Caesar Salad',
      category: 'lunch',
      time: '15 min',
      difficulty: 'easy',
      image: '🥗',
      ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken']
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      category: 'lunch',
      time: '45 min',
      difficulty: 'medium',
      image: '🍰',
      ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
    }
  ];

  const filteredRecipe = selectedCategory == ('all') ? recipes : recipes.filter(recipe => recipe.category === selectedCategory)

  const getDefficulty =(difficulty)=>{

    switch(difficulty){
      case "easy":
        return 'text-green-600 bg-green-100';
        case "medium":
          return 'text-yellow-600 bg-yellow-100';
          case "hard":
            return 'text-red-600 bg-red-100';

            default:
              return 'text-gray-600';
    }

  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4'>
      <div className='max-w-4xl  mx-auto text-center mb-12'>
        {/* header */}
        <div>
         <h1 className='text-3xl text-gray-800 font-bold'>my recipe collections</h1>
        <p className='text-gray-500 '> find your favorate recipes and start cooking !</p>
        </div>
      
      </div>
        {/* categogies */}

        <div className='flex justify-center gap-4 mb-8 flex-wrap'>
          {
            categories.map((category)=>(
              <button 
              onClick={()=>setSelectedCategory(category)}
              className={`px-4 py-2 capitalize rounded-full cursor-pointer ${selectedCategory === category ? 'bg-orange-600 text-white ': ' bg-white text-gray-600 hover:bg-orange-100'}`}>{category}</button>
            ))
          }
        </div>

        {/* recipe grid */}
        <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
          {
            filteredRecipe.map(recipe=>(
              <div className='bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden '>
                {/* recipe header */}
                 <div className='p-4' >
                  <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold text-gray-800'>{recipe.title}</h1>
                    <span className='text-4xl'> {recipe.image}</span>
                  </div>
                  {/* recipe detials */}
                  <div className='flex gap-4 mb-4'>
                    <span className='text-gray-500 text-sm flex items-center'>⏱️{recipe.time}</span>
                    <span className={`text-sm rounded-full px-2 py-1 flex ${getDefficulty(recipe.difficulty)}`}>{recipe.difficulty}</span>
                  </div>
                  {/* ingredients */}
                  <div >
                    <h1 className='text-sm font-medium text-gray-700 mb-4'>ingredients:</h1>
                     <div className='flex flex-wrap gap-4'>
                    {recipe.ingredients.map((ingredient,index)=>(
                      <span key={index} className='bg-gray-100 rounded-full px-2 py-1   text-gray-600 text-sm'>{ingredient}</span>
                    )
                      
                    )}
                    </div>
                  </div>
                 </div>

              </div>
              
            ))
          }
        </div>
        {/* recipe emty */}
        {
          filteredRecipe.length === 0 && (
            <div
            className='text-center p-12'>
              <p className='text-gray-500'>
                 recipe no found in this catogery
                
              </p>

            </div>
          )
        }
        

    </div>
  )
}

export default Exercise21Recipe