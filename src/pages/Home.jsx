import { useEffect } from "react";
import { useContext } from "react";
import classDetail from "../components/ClassDetail";
import { classContext } from "../context/ClassContext";


const Home = () => {
    const {classes, dispatch} = useContext(classContext)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const reponse = await fetch('')
        }
        fetchWorkouts();
    }, [dispatch])

    return ( 
        <div className="Home">
            <h1>home</h1>
            
        </div>
     );
}
 
export default Home;