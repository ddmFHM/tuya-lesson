import { PERSON_ADD } from '../ActionTypes/Person.action.types'

export const personAdd = (payload) => ({ type: PERSON_ADD, payload })






// thunk 异步代码
// export const personAdd = () => async(dispatch) => {
//   let persons = await getData(1000)
//   dispatch({ type: "loadPersonSuccess", payload: persons })
// }

// async function getData(timer) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: 2,
//           name: 'ddm2',
//           age: 18
//         },
//         {
//           id: 3,
//           name: 'ddm3',
//           age: 20
//         }
//       ])
//     }, timer);
//   })
// }