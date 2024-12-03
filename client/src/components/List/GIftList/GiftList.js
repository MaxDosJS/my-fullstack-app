// import React, { useState } from 'react';
// import './GiftList.css'

// import ListWife from '../ListWife/ListWife';


// const GiftLists = () => {
//   const [activeList, setActiveList] = useState(null);

//   const handleClick = (listName) => {
//     setActiveList(listName);
//   };

//   return (
//     <div className='Gift_list'>
      
      
//       <button className='Gift_btn' onClick={() => handleClick('for_her')} style={{textAlign:"center", Top: "20px"} }>для нее</button>
      

//       {(activeList === 'for_him' || activeList === 'for_her') && (
//         <>
          
//           {activeList === 'for_her' && <ListWife />}
          
//         </>
//       )}
//     </div>
//   );
// };

// export default GiftLists;