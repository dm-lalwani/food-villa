import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      userInfo: {
        name: "Dummy name",
        avatar_url: "dummy url",
      },
    };
    console.log("child constructor " + this.props.name1);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/dm-lalwani");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 2000);
    console.log("child componentDidMount " + this.props.name1);
  }
  componentDidUpdate(prevprops, prevState) {
    if (
      this.state.count1 !== prevState.count1 ||
      this.state.count2 !== prevState.count2
    ) {
      console.log("child componentDidUpdate " + this.props.name1);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("child componentWillUnmount " + this.props.name1);
  }

  render() {
    const { name1 } = this.props;
    const { count1, count2 } = this.state;
    const { name, avatar_url } = this.state.userInfo;
    console.log("child render " + this.props.name1);
    return (
      <>
        <h2>Profile Class Component</h2>
        <h3>Name: {name1}</h3>
        <img src={avatar_url} alt="avatar img" />
        <h3>User Name: {name}</h3>
        <h3>Count: {count1}</h3>
        <h3>Count2: {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: 1,
              count2: 2,
            });
          }}
        >
          Inc Count Class
        </button>
      </>
    );
  }
}

export default ProfileClass;
