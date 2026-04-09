import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
      AOS.init();
    }, []);

    return <RouterProvider router={router}/>
}

export default App
