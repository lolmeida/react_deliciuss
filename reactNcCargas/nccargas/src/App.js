import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], isLoaded: false, fields: [] }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cargas/user/66')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          fields: Object.keys(json[0]),
        })

      });
  }

  render() {
    var { isLoaded, items, fields } = this.state;

    //console.log(fields);

    if (!isLoaded) { return <div>Loading...</div> }
    else {

      let hiddenColumn = ['id', 'updated', 'version', 'created', 'comment','user',
      'image','attachment','counter','hojemenosdata','assinatura', 'tipo','outros',
    'iddimensoes','m3arnaud','eurm3','eurm3arnaud','peso','valor','quantidade'];

      return <div className='App'>

        <table className="table">
          <thead>
            <tr>
              {fields.map(th => (
                <th className={hiddenColumn.includes(th)?'hiddenColumn':''} scope='col'>{th.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>

                {fields.map(td => (
                  <td className={hiddenColumn.includes(td)?'hiddenColumn':''} >{item[td]}</td>
                ))}


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    }
  }

}

export default App;
