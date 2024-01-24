import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setConunt2] = useState(0);
  useEffect(() => {
    console.log("Inside useEffect");
  }, [count1, count2]);
  console.log("Start Rendering");
  return (
    <>
      <h2>Profile Functional Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count1}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={() => {
          setCount1(1);
          setConunt2(2);
        }}
      >
        Inc Count
      </button>
    </>
  );
};

export default Profile;
