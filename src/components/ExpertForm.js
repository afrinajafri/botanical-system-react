import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import { Button, Card, Form, Modal } from 'react-bootstrap';


export class ExpertForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            plants_type: undefined,
            light_exposure: undefined,
            have_pets_or_kids: undefined,
            watering_schedule: undefined,
            range_of_growth: undefined,
            drought_tolerant: undefined,
            season: undefined,
            show: false
        }
    }

    render() {
        return ( 
          <Card className="" style={{marginLeft:250, marginRight:250}}> 
          <Card.Header as="h1">Botanist Expert System</Card.Header>
          <Card.Body> 
            <Card.Text>
          <Form className="pt-2" onSubmit={(event)=>{
                // alert(`${this.state.username}`)
                // console.log('event',event.target.value)
                event.preventDefault()
            }}>

            <Form.Group >
              <Form.Label >Do you have pets or kids at home?</Form.Label>
              
              <Form.Check  type={"radio"} name="have_pets_or_kids" label="Yes" value={this.state.have_pets_or_kids} onClick={()=>{this.setState({have_pets_or_kids: 'yes'})}}/> 
              <Form.Check  type={"radio"} name="have_pets_or_kids" label="No" value={this.state.have_pets_or_kids} onClick={()=>{this.setState({have_pets_or_kids: 'no'})}}/> 
            </Form.Group> 


            <div className="mt-4"> 
            <Form.Label >Type of Plants</Form.Label>
              <select 
              className="form-select"  
              value={this.state.plants_type}
              onChange={(e)=>{this.setState({plants_type: e.target.value})}}
              >
                <option className="mb-2 text-muted" selected disabled>----------- Please select one ----------- </option>
                <option value="ornamental_plant"  >Ornamental Plants</option>
                <option value="botanical_plant" >Botanical Plants</option>
            </select>
            </div> 
            
          <div className="mt-4"> 
          <Form.Label >Light Exposure</Form.Label>
            <select 
            className="form-select"  
            value={this.state.light_exposure}
            onChange={(e)=>{this.setState({light_exposure: e.target.value})}}
            >
              <option className="mb-2 text-muted" selected disabled>----------- Please select one ----------- </option>
              <option value="moderate_to_bright_light"  >Moderate to Bright</option>
              <option value="moderate_to_dim_light" >Moderate to Dim</option>
          </select>
          </div> 

          <div className="mt-4"> 
          <Form.Label>Watering Schedule</Form.Label>
            <select 
            className="form-select"  
            value={this.state.watering_schedule}
            onChange={(e)=>{this.setState({watering_schedule: e.target.value})}}
            >
            <option className="mb-2 text-muted" selected disabled>----------- Please select one ----------- </option>
            <option value="water_one_to_two_times_a_week" >1-2 times a week</option>
            <option value="water_when_remember">Water when remember (Very less attention)</option> 
          </select>
          </div>

          <Form.Group className="mt-4">
              <Form.Label>Do you want your plant to be tolerant to drought?</Form.Label>
              <Form.Check  type={"radio"} name="drought_tolerant" label="Yes" value={this.state.drought_tolerant} onClick={()=>{this.setState({drought_tolerant: 'yes'})}}/> 
              <Form.Check  type={"radio"} name="drought_tolerant" label="No" value={this.state.drought_tolerant} onClick={()=>{this.setState({drought_tolerant: 'no'})}}/> 
          </Form.Group>
          
          <div className="mt-4"> 
          <Form.Label>Range of Growth</Form.Label>
            <select 
            className="form-select"  
            value={this.state.range_of_growth}
            onChange={(e)=>{this.setState({range_of_growth: e.target.value})}}
            >
            <option className="mb-2 text-muted" selected disabled>----------- Please select one ----------- </option>
            <option value="grow_more_than_2_weeks" >More than 2 weeks</option>
            <option value="grow_less_than_2_weeks">Less than 2 weeks</option> 
          </select>
          </div>

           
           <div className="mt-4">
             <center>
             <Button variant="primary" type="reset" style={{marginRight:5}}>
              Reset
            </Button> 

            <Button variant="primary" type="submit" onClick={()=>{this.handleClose()}}>
              Submit
            </Button>  

            {this.resultModal()} 
           </center> 
           </div>
           
          </Form>  
            </Card.Text> 
          </Card.Body>
          </Card> 
        )
    } 

    resultModal(){
      return(
      <React.Fragment>
        <Modal show={this.state.show} onHide={()=>{this.handleShow()}}>

              <Modal.Header>
                <Modal.Title>The perfect plant for you!</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {/* Woohoo, you're reading this text in a modal!  */}
              {this._rules_8()}
              {this._rules_9()}
              {this._rules_10()}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={()=>{this.handleShow()}}>
                  Close
                </Button> 
              </Modal.Footer>
            </Modal> 
            
      </React.Fragment>
      )
    }

    handleClose(){
      this.setState({show:true})
    }

    handleShow(){
      this.setState({show:false})
    }

    _rules(){

      let light_exposure = this.state.light_exposure;
      let have_pets_or_kids = this.state.have_pets_or_kids;
      let watering_schedule = this.state.watering_schedule;
      let range_of_growth = this.state.range_of_growth;
      let drought_tolerant = this.state.drought_tolerant;
      let result = undefined;

      console.log('result', have_pets_or_kids,light_exposure, watering_schedule, drought_tolerant, range_of_growth) 

      if(have_pets_or_kids === "yes"){
        if(light_exposure === "moderate_to_bright_light"){
          if(watering_schedule === "water_one_to_two_times_a_week"){
            if(drought_tolerant === "yes"){
              if(range_of_growth === "grow_more_than_2_weeks"){
                result = "Fiddle Fig" 
              }
              else{
                result = "Monstera" 
              }
            }
          }
        }
      } 
      return result;
    
    }

    _rules_1(){
      let result = undefined;

      if(this.state.watering_schedule === "water_one_to_two_times_a_week"){
        result = "plant_need_mid_attention";
      }
      return result;
    }

    _rules_2(){
      let result = undefined;

      if(this.state.watering_schedule === "water_when_remember"){
        result = "plant_need_less_attention";
      }
      return result;
    }

    _rules_3(){
      let result = undefined;

      if(this.state.light_exposure === "moderate_to_dim_light" || this.state.season === "wet_season"){
        result = "plant_resilience_toward_humid_and_hot_weather";
      } 
      return result;
    }

    _rules_4(){ 
      let result = undefined; 

      if(this.state.light_exposure === "moderate_to_bright_light" || this.state.season === "summer_season"){
        if(this.state.drought_tolerant === "yes"){
          result = "plant_has_strong_resistant_toward_dry_weather";
        }
      }
      return result;
    }

    _rules_5(){ 
      let result = undefined; 

      if(this.state.light_exposure === "moderate_to_bright_light" || this.state.season === "summer_season"){
        if(this.state.drought_tolerant === "no"){
          result = "plant_has_low_resistant_toward_dry_weather";
        }
      }
      return result;
    }

    _rules_6(){ 
      let result = undefined; 

      if(this.state.range_of_growth === "grow_more_than_2_weeks" || this.state.range_of_growth === "grow_more_than_4_months"){ 
          result = "plant_has_long_growth_rate"; 
      }
      return result;
    }

    _rules_7(){ 
      let result = undefined; 

      if(this.state.range_of_growth === "grow_less_than_2_weeks" || this.state.range_of_growth === "grow_less_than_4_months"){ 
          result = "plant_has_short_growth_rate"; 
      }
      return result;
    }

    _rules_8(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_4()){
            if(this._rules_1()){
              if(this._rules_6()){
                result = "Fiddle Fig" 
              }
            }

          }
        }
      } 
      return result;
    } 


    _rules_9(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_4()){
            if(this._rules_1()){
              if(this._rules_7()){
                result = "Monstera" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_10(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_5()){
            if(this._rules_1()){
              if(this._rules_6()){
                result = "Epipremnum" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_11(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_5()){
            if(this._rules_1()){
              if(this._rules_7()){
                result = "Calathea" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_12(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_4()){
            if(this._rules_2()){
              if(this._rules_6()){
                result = "Succulent" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_13(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_4()){
            if(this._rules_2()){
              if(this._rules_7()){
                result = "Bougainvillea" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_14(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_5()){
            if(this._rules_2()){
              if(this._rules_6()){
                result = "Money Plant" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_15(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_5()){
            if(this._rules_2()){
              if(this._rules_7()){
                result = "Garden Balsam" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_16(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_3()){
            if(this._rules_1()){
              if(this._rules_7()){
                result = "Peace Lily" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_17(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_3()){
            if(this._rules_1()){
              if(this._rules_6()){
                result = "African Violet" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_18(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_3()){
            if(this._rules_2()){
              if(this._rules_7()){
                result = "Epipremnum" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_19(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "yes"){
          if(this._rules_3()){
            if(this._rules_2()){
              if(this._rules_6()){
                result = "Epipremnum" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_20(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_3()){
            if(this._rules_1()){
              if(this._rules_7()){
                result = "Peace Lily" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_21(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_3()){
            if(this._rules_1()){
              if(this._rules_6()){
                result = "African Violet" 
              }
            }

          }
        }
      } 
      return result;
    }

    _rules_22(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_3()){
            if(this._rules_2()){
              if(this._rules_7()){
                result = "Epipremnum" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_23(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_3()){
            if(this._rules_2()){
              if(this._rules_6()){
                result = "Epipremnum" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_24(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_4()){
            if(this._rules_1()){
              if(this._rules_6()){
                result = "Cactus" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_25(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_4()){
            if(this._rules_1()){
              if(this._rules_7()){
                result = "Bougainvillea" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_26(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_5()){
            if(this._rules_1()){
              if(this._rules_6()){
                result = "Money Plant" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_27(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_5()){
            if(this._rules_1()){
              if(this._rules_7()){
                result = "Hibiscus" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_28(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_4()){
            if(this._rules_2()){
              if(this._rules_6()){
                result = "Fiddle Fig" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_29(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_4()){
            if(this._rules_2()){
              if(this._rules_7()){
                result = "Monstera" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_30(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_5()){
            if(this._rules_2()){
              if(this._rules_6()){
                result = "Epipremnum" 
              }
            }

          }
        }
      } 
      return result;
    }

    rules_31(){
      let result = undefined;  

      if(this.state.plants_type === "ornamental_plant"){
        if(this.state.have_pets_or_kids === "no"){
          if(this._rules_5()){
            if(this._rules_2()){
              if(this._rules_7()){
                result = "Calathea" 
              }
            }

          }
        }
      } 
      return result;
    }


}

export default ExpertForm
