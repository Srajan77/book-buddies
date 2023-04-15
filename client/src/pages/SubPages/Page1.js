import React, { useState } from 'react';
import "./Page1.css";
import demo from "../demo.pdf";

const Page1 = () => {
  const [show1, setShow1] = useState(0);
  return (
    <div className="page-1">
      <h1>Semester 1</h1>
      <br /> <br /> <br /> <br />
      <div className="content">
        {show1 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
        <button onClick={()=> setShow1(1)}>E Book for C</button>
        <button>E Book for C++</button>
        <br /> <br /> <br /> <br />
        <button>E Book for C</button>
        <button>E Book for C++</button>
        <br /> <br /> <br /> <br />
        <button>E Book for C</button>
        <button>E Book for C++</button>
        <br /> <br /> <br /> <br />
        <button>MST Papers</button>
        <button>End Sem Papers</button>
      </div>
    </div>
  );
}

export default Page1
