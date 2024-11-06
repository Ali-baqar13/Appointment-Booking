import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthContext";
import { toast } from "react-toastify";

//comments are added for understanding........

const customHook = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Start loading as true
  const [error, setError] = useState(null);
  const { token } = useContext(authContext);
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();
        
        if (!res.ok) {
          throw new Error(result.message); // Throw error if response is not ok
        }
        
        setData(result.data); // Set the fetched data
      } catch (err) {
        setError(err.message); // Set error message
        toast.error(err.message); // Show error toast
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call fetchData inside useEffect
  }, [url, token]); // Run effect when url or token changes

  return { data, loading, error }; // Return data, loading, and error states
};

export default customHook;
