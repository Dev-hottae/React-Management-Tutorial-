import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    "id":1,
    "image": "https://placeimg.com/64/64/1",
    "name": "임호태",
    "birthday": "930805",
    "gender":"남자",
    "job": "대학생"
  },
  {
    "id":2,
    "image": "https://placeimg.com/64/64/2",
    "name": "이재전",
    "birthday": "930411",
    "gender":"남자",
    "job": "증권맨"
  },
  {
    "id":3,
    "image": "https://placeimg.com/64/64/3",
    "name": "정휘현",
    "birthday": "930501",
    "gender":"남자",
    "job": "은행원"
  }
]
class App extends React.Component {
  render(){
    return(
      <div>
            {
              customers.map(c => {
                return(
                  <Customer
                    key = {c.id}
                    id = {c.id}
                    image = {c.image}
                    name = {c.name}
                    birthday = {c.birthday}
                    gender = {c.gender}
                    job = {c.job}
                  />

                );
              })
            }
        </div>
    );
    
  }
}

export default App;
