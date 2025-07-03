"use client"

import { useState } from "react";

function Test() {
  const [count, setCount] = useState(1);
  return (<div className="p-4" onClick={() => setCount(count + 1)}>
    CLicked {count}
  </div>);
}

export default Test;