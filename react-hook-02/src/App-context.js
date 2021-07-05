import React, { createContext, useContext } from 'react'

const userContext = createContext({})

function Header () {

  const userInfo = useContext(userContext)

  return (
    <div>
      { userInfo.name } - { userInfo.age }
    </div>
    // <userContext.Consumer>
    //   {
    //     value => {
    //       return (
    //         <div>
    //           <p>{ value.name }</p>
    //           <p>{ value.age }</p>
    //         </div>
    //       )
    //     }
    //   }
    // </userContext.Consumer>
  )
}

export default function App() {

  return (
    <div>
      <userContext.Provider value={{ name: 'ddm', age: 18}} >
        <Header />
      </userContext.Provider>
    </div>
  )
}
