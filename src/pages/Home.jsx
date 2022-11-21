import { useEffect } from "react";
import { useContext } from "react";
import ClassDetail from "../components/ClassDetail";
import { ClassContext } from "../context/ClassContext";


const Home = () => {
    const {classes, dispatch} = useContext(ClassContext)

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await fetch('http://localhost:4000')

            const json = await response.json();
            if(response.ok){
                console.log(response)
                dispatch({type: 'SET_CLASSES', payload: json})
            }else{
                console.log('fetching')
            }
            return json;
        }
        fetchClasses();
    }, [dispatch])

    return ( 
        <div className="Home">
            <h1>home</h1>
            {classes && console.log(classes)}
        </div>
     );
}
 
export default Home;