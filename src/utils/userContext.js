import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Default User",
    email: "dummy@gmail.com",
  },
});

userContext.displayName = "userContext";

export default userContext;
