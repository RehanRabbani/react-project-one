import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import Boo from './components/Button';


class Home extends React.Component{
constructor(props){
    super(props);
    this.state={
        photos:[]
    }
}
componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(json=>{
        console.log(json.data);
        const photos = json.data;
        console.log(photos);
        this.setState({photos:photos})
    })
}

    render(){
        let {photos}=this.state;
        return(
            <section>
            <Header/>
         
            <div className="parent">
            
              
               {
                this.state.photos.map(item=>{return(<Card style={{ width: '18rem' }}
                onClick={()=>{alert("Click")}} className="card-sty">
                <Card.Img variant="top" src={item.url} className="img-size" />
                <p>{item.title}</p>
                </Card>)}) 
                

               }
            </div>
            </section>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));

