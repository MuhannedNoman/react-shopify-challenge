import React,{useState,useEffect} from "react";
import Home from "../Home/Home";

function Featch(){
    const [loading,setLoading]=useState(false);
    const [data, setData] = useState([]);
    const [q, setQuery] = useState('pirates');
    
    useEffect(() => {
    
     
      setData(null);
    
      fetch(`http://www.omdbapi.com/?s=${q}&apikey=3eae97bc`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
          if (response.Response === 'False') {
           }
          else {
              setData(response.Search);
          }
    
          setLoading(true);
      })
      
    
    }, []);
   
    
    return(<>
      {loading?
      
        <Home data={data} isloading={loading}/>
        
        
        :""
      
    }
    </>)
}
export default Featch;