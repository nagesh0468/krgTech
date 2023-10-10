
import { useEffect, useState } from 'react';
import './App.css';
import getData from './components/Api';
import List from './components/List';


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const fetchData = async() => {
    const {data}  = await getData();
    console.log(data.products);
    if(data && data.products)
     setData(data.products);
  }

  useEffect(() =>{
    fetchData();
  }, [] )
  const onclick = (selectedPage) => {

    if (selectedPage >= 1 && selectedPage <= data.length / 6 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }
  return (
    <div className='container'>
      {/* <h1>hello world</h1> */}
      <List list ={data} page={page} selectPage = {onclick} />
    </div>
  );
}

export default App;
