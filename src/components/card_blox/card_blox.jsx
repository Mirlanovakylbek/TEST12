// // import React from "react";
// // import "./card_blox.scss"

// import cart1 from "../card_blox/card_img/card11.png"
// import cart3 from "../card_blox/card_img/card22.jpg"
// import cart4 from "../card_blox/card_img/card44.jpg"

// // const carton =[
  // {
  //   id: "1",
  //   iml: cart1,
  //   his: "собый интерес",
  //   his: "Природа и горы",
  //   kul: "Культурная Одиссея",
  //   kyr: "Кыргызские Культурные",
  //   klas: "Классика Кыргызстана",
  //   isk: "Искусство и Традиции",
  //   kul: "Культурная Эпопея",
  // },

// //   {
// //     id: "2",
// //     iml: cart4,
// //     his: "Природа и горы",
// //     his: "Природа и горы",
// //     kul: "Культурная Одиссея",
// //     kyr: "Кыргызские Культурные",
// //     klas: "Классика Кыргызстана",
// //     isk: "Искусство и Традиции",
// //     kul: "Культурная Эпопея",
// //   },

// //   {
// //     id: "3",
// //     iml: cart3,
// //     his: "Особый интерес",
// //     his: "Природа и горы",
// //     kul: "Культурная Одиссея",
// //     kyr: "Кыргызские Культурные",
// //     klas: "Классика Кыргызстана",
// //     isk: "Искусство и Традиции",
// //     kul: "Культурная Эпопея",
// //   },

// //   {
// //     id: "4",
// //     iml: cart4,
// //     his: "Приключение",
// //     his: "Природа и горы",
// //     kul: "Культурная Одиссея",
// //     kyr: "Кыргызские Культурные",
// //     klas: "Классика Кыргызстана",
// //     isk: "Искусство и Традиции",
// //     kul: "Культурная Эпопея",
// //   },

// //   {
// //     id: "5",
// //     iml: cart3,
// //     his: "Приключение",
// //     his: "Природа и горы",
// //     kul: "Культурная Одиссея",
// //     kyr: "Кыргызские Культурные",
// //     klas: "Классика Кыргызстана",
// //     isk: "Искусство и Традиции",
// //     kul: "Культурная Эпопея",
// //   },

// //   {
  //   id: "6",
  //   iml: cart1,
  //   his: "Природа и горы",
  //   kul: "Культурная Одиссея",
  //   kyr: "Кыргызские Культурные",
  //   klas: "Классика Кыргызстана",
  //   isk: "Искусство и Традиции",
  // },
// // ]

// // export default function Card_blox () {
// //     return(
// //         <>
// //         <div className="life">
// //             <div className="wrap">
// //                 <div className="fale">
// //                     <div className="tnt">
                        // <h1> Топ-5 вариантов для вашего стиля путешествия </h1>
// //                     </div>
// //                     <div className="grot">
// //                     {carton.map((el) => {
// //                         return(
// //                     <div className="catd_text">
// //                         <img src={el.iml} alt="" />
// //                         <h1> {el.his} </h1>
// //                         <div className="colk">
// //                             <p1> {el.his} </p1>
// //                             <p> {el.kul} </p>
// //                             <p> {el.klas} </p>
// //                             <p> {el.isk} </p>
// //                             <p> {el.kul} </p>
// //                         </div>
// //                     </div>
// //                         )
// //                     })}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //         </>
// //     )
// // }

// import React from 'react';
// import Accordion from './cart_bloxi';
// import "./card_blox.scss"
// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa6";

// const panels = [
//   { title: 'особый интерес ', content: 'Культурная Одиссея Кыргызские Культурные Классика Кыргызстана Искусство и Традиции ультурная Эпопея', plus:<FaPlus />, minus:<FaMinus /> },
//   { title: 'Природа и горы ', content: 'Культурная Одиссея Кыргызские Культурные Классика Кыргызстана Искусство и Традиции ультурная Эпопея', plus:<FaPlus />, minus:<FaMinus /> },
//   { title: 'Особый интерес? ', content: 'Культурная Одиссея Кыргызские Культурные Классика Кыргызстана Искусство и Традиции ультурная Эпопея', plus:<FaPlus />, minus:<FaMinus /> },
//   { title: 'Приключение', content: 'Культурная Одиссея Кыргызские Культурные Классика Кыргызстана Искусство и Традиции ультурная Эпопея', plus:<FaPlus />, minus:<FaMinus /> },
//   { title: 'Природа и горы', content: 'Культурная Одиссея Кыргызские Культурные Классика Кыргызстана Искусство и Традиции ультурная Эпопея', plus:<FaPlus />, minus:<FaMinus /> },
//   { title: 'Приключение', content: 'Культурная Одиссея Кыргызские Культурные Классика Кыргызстана Искусство и Традиции ультурная Эпопея', plus:<FaPlus />, minus:<FaMinus /> },
// ];

// const App = () => {
//   return (
//     <div className="wrap">
//       <div className="contact">
//           <h1>Топ-5 вариантов для вашего стиля путешествия</h1>  
//         <div className='dof'>
//           <div className="divivi"><Accordion panels={panels} /></div>
//             </div>                                                                                                                                                                                                                                       
//         </div>
//       </div>
//   );
// };

// export default App;

