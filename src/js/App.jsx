import React, { Component } from 'react';
import '../css/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      planetValue: 0,
      planetName: '',
      planetList: [], 
      checked: false,
      newWeight: ''
    }
    this.handleWeight = this.handleWeight.bind(this);
    this.handlePlanets = this.handlePlanets.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    let { planets } = this.props
    planets.push('a');
    planets = planets.reverse()
    this.setState({
      planetList : planets,      
    })
  }
  handleWeight(e) {
    const newWeight = (e.target.validity.valid) ? e.target.value : this.state.weight
    this.setState({weight: newWeight})
  }
  handlePlanets(e) {
    let value = e.target.value;    
    value = value.split(',')        
    this.setState({planetValue: value[1], planetName: value[0]})
  }
  handleChecked(e) {
    this.setState({checked: e.target.checked})
  }
  submit(e) {
    e.preventDefault();
    let weight = this.state.weight;
    let planet = this.state.planetValue;
    let planetWeight = Number(weight) * Number(planet)
    this.setState({newWeight: planetWeight})
  }


  render() {
    let { planetList, checked, planetName } = this.state;
    let list, message;
    if (checked) {
      list = planetList.slice();
      list.splice(11,1)            
    }  
    if (checked === false) {
      list = planetList      
    }
    message = 'If you were on ' + planetName + '. You would weigh '+  this.state.newWeight+ 'lbs'  

    if (planetName === "Earth") { 
      message = 'If you Chose "Earth", Then you should weigh ' + this.state.newWeight + 'lbs';
    }  
    if (planetName === "Pluto") {
      message = 'If you were on the tiny Planet Pluto, then you would weigh ' +this.state.newWeight + ' lbs';
    }

    return (
      <div className='astroWeightProject'>
        <div className='container astroWeightContainer'>
          <div className='row'>
            <div className='col-12' id='astroHeader'>
              <h1>Astro Weight Calculator</h1>
            </div>
          </div>
          <form onSubmit = {this.submit} id = 'astroForm'>

            <div className='form-row align-items-center '>

              <div className='form-group col-3'>
                <label
                  htmlFor='inputWeight'
                  className='astroLabels'>
                  Enter Your Weight
                </label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Weight(lbs)'
                  id='inputWeight'
                  onChange = {this.handleWeight}
                  value = {this.state.weight}
                  pattern = '^([1-9]+)([0-9]*)(\.[0-9]{0,2})?$' />
              </div>

              <div className='form-group col-3'>
                <label
                  className='astroLabels'>
                  Select A Planet
                </label>
                <select 
                  className='form-control'
                  onChange = {this.handlePlanets}
                  >
                  {list.map((planet, i) => {                  
                    if (planet === 'a') return <option key ={i} hidden>Planets</option>
                    return (
                      <option 
                        key = {i}
                        value= {planet}          
                        >
                        {planet[0]}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className='form-group checkGroup col-3'>
                <div className="form-check checkForm">
                  <input
                    type='checkbox'
                    className='checkBox'
                    id='formCheck'
                    onChange = {this.handleChecked} />
                  <label
                    className='astroLabels'
                    htmlFor='formCheck'>
                    {(this.state.checked) ? 'How Dare you Remove Pluto!' : 'Check to remove Pluto'}
                </label>
                </div>
              </div>

              <div className='form-group col-3'>
              {(this.state.weight.length > 0) ? <button
                  className='btn btn-primary form-control' type='submit' id='astroCalculate'> Calculate </button> : <button
                  className='btn btn-primary form-control' type='submit' id='astroCalculate' disabled>
                  Calculate
                </button>}
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-12" id='astroOutput'>
                {(this.state.newWeight) ? message : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}