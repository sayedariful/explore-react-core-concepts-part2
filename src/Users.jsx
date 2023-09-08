import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

  return (
    <div>
      <h3>Users: {users.length}</h3>
    </div>
  );
}



/* 
*1. declare a state to hold the data
* তথ্য রাখা একটি রাষ্ট্র ঘোষণা
* 2. useEffect with call back and dependency array
* কল ব্যাক এবং নির্ভরতা অ্যারের সাথে ইফেক্ট ব্যবহার করুন
*/