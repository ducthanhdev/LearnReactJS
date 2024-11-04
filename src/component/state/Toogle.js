// stateless functional component: conponent nhung khong su dung state 

import React, { useState } from 'react';
function Toggle() {
    // 1. enabling state: useState(innitial value)
    //2. initialize state: useState(false)
    //3. reading state: 
    //4. update state

    const array = useState(false);
    console.log(array);
    return <div className='toggle'> </div>
}

export default Toggle;




// statefull functional component: conponent co su dung state
// function Toggle2() {
//     return <div className='toggle'> </div>
// }
