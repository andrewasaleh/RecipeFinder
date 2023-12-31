// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, where, query, orderBy } from 'firebase/firestore';
// import { db } from '../../firebase';
// import './RecipeComponent.css'; 
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import timeIcon from "../Assets/images/home/alarm.png";
// import servingsIcon from "../Assets/images/home/servings.png";
// import createdByIcon from "../Assets/images/home/created.png";

// const UserRecipes = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         if (!user || !user.uid) {
//           // If the user or user.uid is not available, do nothing
//           return;
//         }
  
//         console.log('User UID:', user.uid);
  
//         const userRecipesQuery = query(
//           collection(db, 'recipes'),
//           where('uid', '==', user.uid),
//           orderBy('timestamp', 'desc')
//         );
  
//         const querySnapshot = await getDocs(userRecipesQuery);
//         const recipesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         console.log('Fetched recipes:', recipesData);
  
//         setRecipes(recipesData);
//       } catch (error) {
//         console.error('Error fetching user recipes: ', error);
//       }
//     };
  
//     fetchRecipes();
//   }, [user]);
  
//   return (
//     <div className="recipe-container">
//       <h1 className="recipe-title">{user ? `${user.displayName}'s Recipes` : 'My Recipes'}</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {recipes && recipes.length > 0 ? (
//             <div className="recipe-list">
//               {recipes.map((recipe) => (
//                 <div key={recipe.id} className="recipe-item">
//                   <img src={recipe.image} alt={recipe.name} className="recipe-image" />
//                   <div className="text-container">
//                     <p className="recipe-description">{recipe.name}</p>
//                     <div className="button-container">
//                       <div className="icon-container">
//                         <img src={timeIcon} alt="Time Icon" className="icon" />
//                         <p className="time-text">{recipe.duration} min</p>
//                       </div>
//                       <div className="icon-container">
//                         <img src={servingsIcon} alt="Servings Icon" className="icon" />
//                         <p className="time-text">{recipe.serving_size} servings</p>
//                       </div>
//                       <div className="icon-container">
//                         <img src={createdByIcon} alt="Created by Icon" className="icon" />
//                         <p className="time-text">{recipe.username}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="no-recipes-message">No recipes created</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserRecipes;
