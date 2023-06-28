import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Hero from './Hero'
import Demo from './Demo'

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
      <div className="app">
        <Hero />
        <Demo />

        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>

        <div>
              <h4>Video tag</h4>
              <video width="320" height="240" controls>
                  <source src="https://drive.google.com/uc?export=view&id=1wMiBbgUFnLBsCoXxVEvZI2a5tgpZWZoF" type="video/mp4"/>
              </video>
        </div>
      </div>
     </div>
  );
}
export default Dashboard;




// https://drive.google.com/file/d/1wMiBbgUFnLBsCoXxVEvZI2a5tgpZWZoF/view?usp=drive_link