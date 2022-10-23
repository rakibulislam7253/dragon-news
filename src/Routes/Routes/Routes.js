import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cetagory from "../../pages/Cetagories/cetagory/Cetagory";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/news/News";
  
export const router=createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[

        {
          path:'/',
          element:<Home></Home>  
        },
        {
            path:'/cetagory/:id',
            element:<Cetagory></Cetagory>
        },
        {
            path:'/news/:id',
            element:<News></News>
        }
    ]
},

])