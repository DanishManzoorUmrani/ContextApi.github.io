import React ,{createContext} from "react";

const Data = createContext();

function UserContextProvider({children}) {
    let Son = "karachi";
  return (
    <div>
        <Data.Provider value={Son} >
          {children}
        </Data.Provider>
    </div>
  )
}

export default UserContextProvider;
export {Data};