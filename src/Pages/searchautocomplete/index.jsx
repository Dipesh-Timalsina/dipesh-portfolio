import { useEffect } from "react";
import { useState } from "react";




export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    async function fetchListOfUsers() {
        try {
            const response = await fetch("http://dummyjson.com/users");
            const data = await response.json();
            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users)
                setLoading(false)


            }
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchListOfUsers()
        
    },[])




    return (<div className="search-autocomplete-container">
        <input name="search-users" placeholder="Search Users here ... " />



    </div>
    );

}