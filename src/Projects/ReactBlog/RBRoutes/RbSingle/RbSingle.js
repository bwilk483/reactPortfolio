import NavBar from "../../Rbcomponents/RbNav/RbNavBar";
import Sidebar from "../../Rbcomponents/RbSidebar/RbSidebar";
import SinglePost from "../../Rbcomponents/RbSinglePost/RbSinglePost";

const RbSingle = () => {
  return (
    <div className="single">
      <NavBar />
      <div className="singleLayout">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
};

export default RbSingle;
