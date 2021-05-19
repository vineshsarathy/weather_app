import React,{useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'


export default function Grid1() {
    const [search,setSearch]=useState('')
    let [data, setData] = useState([]);

    const api =`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=27f436a9e2ee94535370862a6c5d14de`

    useEffect(() => {
        const fetchData = async () => {
            await fetch(api).then( res => res.json())
            .then(data => setData(data))
            
        };   
        fetchData();
      },[api]);
      
    return (
        <>
        
        <div>
            <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <div className="form-group">
                  <input type="text" className="form-control mb-2" onBlur={e => setSearch(e.target.value)}  placeholder="state" />
                  <button className="btn btn-success">Search</ button>
                </div>
               
                 {(data.cod === 200)
                 ?
                 <>
                    <Card.Title >City: {data.name}</Card.Title>
                    <h5>Feels Like:{data.main.feels_like}</h5>
                    <Card.Subtitle className="mb-2 text-muted">Humidity: {data.main.humidity}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">temp-max: {data.main.temp_max}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">temp-min: {data.main.temp_min}</Card.Subtitle>
                    {data.weather.map((i)=>(
                        <>
                        <h6>Report :{i.main}</h6>
                        </>))}
                 </>
                  : <>
                   <Card.Title style={{color: `red`}}>City Not Found</Card.Title>
                  </> }
            </Card.Body>
            </Card>
    </div>
        </div>
        </>
    )
}
