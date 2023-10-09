import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Recipies from './components/Recipies';
import Search from './components/Search';
import { useState } from 'react';
import Cuisine from './components/Cuisine';
import RecipieDetails from './components/RecipieDetails';

function App() {
  const [content,setcontent]=useState("")
  const [selectedcuisine,setselectedcuisine]=useState("")
  const [imageurl,setimageurl]=useState("");

  let getcontentfromrootlayout=(data)=>{
        setcontent(data)
  }

  let getcontentfromlandingpage=(cuisine)=>{
    setselectedcuisine(cuisine)
  }

  let getcontentfromrecipe=(url)=>{
     setimageurl(url)
  }

  let getcontentfromsearch=(url)=>{
    setimageurl(url)
  }

  let getcontentfromcuisine=(url)=>{
    setimageurl(url)
  }

  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<RootLayout getcontentfromrootlayout={getcontentfromrootlayout}/>,
        children:[
          {
            path:'/LandingPage',
            element:<LandingPage getcontentfromlandingpage={getcontentfromlandingpage}/>
          },
          {
            path:'/Login',
            element:<Login/>
          },
          {
            path:'/Register',
            element:<Register/>
  
          },
          {
            path:'/Recipies',
            element:<Recipies getcontentfromrecipe={getcontentfromrecipe}/>
          },
          {
            path:'/Search',
            element:<Search content={content} getcontentfromsearch={getcontentfromsearch}/>
          },
          {
            path:'/Cuisine',
            element:<Cuisine selectedcuisine={selectedcuisine} getcontentfromcuisine={getcontentfromcuisine}/>
          },
          {
            path:'/RecipeDetails',
            element:<RecipieDetails imageurl={imageurl}   />
          }
          
        ]
      }
    ])
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;