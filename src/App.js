import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [text, settext] = useState("")
  const [item, setitem] = useState([])
  const [searchitem, setsearchitem] = useState([])



useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then((datas)=>{
    setitem(datas)
    setsearchitem(datas)

  })
},[])

const searchfunc=(text)=>{
  if(text===""){
    setitem(searchitem)
  }else{
    let searchdata=item.filter((e)=>{
      return e.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    })
    setitem(searchdata)
  }
      
}


  return (
    <div className="App">
      <div className='navbar'>
        <h2>Search Products</h2>
        <div>
          <input type="text" placeholder='serach here...' value={ text } onChange={ (e) => {
            searchfunc(e.target.value)
            settext(e.target.value)
          } } />
        </div>
      </div>
      <div className='itemsdiv'>
        {
          item && item.map((ele) => {
            return <>
              <div class="card" style={{width: "18rem",height:"22rem" ,margin:"1rem"}}>
                <img src={ele.image} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{ele.title}</h5>
                    
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
            </>
          })
        }
      </div>
    </div>
  );
}

export default App;
