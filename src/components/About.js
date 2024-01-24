// import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        <h1>This is a About Us Page!!!</h1>
        <h2>I don't know what else to write..</h2>
        {/* <Outlet /> */}
        <Profile name={"DMLalwani"} />
        {/* <ProfileClass name1={"DML 1"} /> */}
        {/* <ProfileClass name1={"DML 2"} /> */}
      </>
    );
  }
}

export default About;
