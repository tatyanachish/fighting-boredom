import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [advice,setAdvice] = useState ('');
  useEffect(()=> {
    const getAdvice = async () => {
      const responce = await fetch('http://www.boredapi.com/api/activity/');
      const data = await responce.json();
      console.log(data.activity)
      setAdvice(data.activity)
        }
    getAdvice();
  }, [])
  // useEffect (()=>{
  //   getAdvice();
  // }, [])
  // const getAdvice = async () => {
  //   const responce = await fetch('http://www.boredapi.com/api/activity/');
  //   const data = await responce.json();
  //   console.log(data.activity)
  //   setAdvice(data.activity)
  // }

return (
<div>
  <div className='btn'>
    <button onClick = {getAdvice}>Click here and get advice</button>
  </div>
  <div className='btn'>
      <p>{advice}</p>
  </div>
</div>

);

}
export default App;