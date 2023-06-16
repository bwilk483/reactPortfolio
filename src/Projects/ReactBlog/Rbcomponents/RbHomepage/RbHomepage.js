import React, { useEffect } from "react";
import "./RbHomepage.css";
import Sidebar from "../RbSidebar/RbSidebar";
import Posts from "../RbPosts/RbPosts";
import axios from "axios";

const RbHomePage = () => {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <div className="HomePage">
      <Posts />
      <Sidebar />
    </div>
  );
};

export default RbHomePage;
