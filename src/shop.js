import React, {Component} from 'react';
import Axios from 'axios';
import Auth from './Auth';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.state = {
            products: [],
            results: [],
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangeImage(event) {
      //var self = this;
      //alert(event.target.files[0]);
      this.setState({[event.target.name]: event.target.files[0]});

    }

    handleSubmit(event) {
      event.preventDefault();
      const {name, image, description} = this.state;

      var reader = new FileReader();
      reader.readAsDataURL(this.state.image);
      reader.onload = function () {
        let result = reader.result;
        console.log(result);
        Axios.post('/addproduct',{name,result,description}, {headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((result)=>{
            // access results
            console.log(result);
            this.forceUpdate();
        });
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }

    refreshPage(){
        this.forceUpdate();
    }

    componentWillMount(){
        Axios.get('/products',{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((response) => {
           alert(JSON.stringify(response.data));

        });
    }

    render(){
      /*this.componentWillMount();*/
        let results = ""/*this.state.result.map((results)=>{
            return(
                <tr>
                    <td>{results.name}</td>
                    <td>{results.description}</td>
                </tr>
            )
        });*/
        return(
          <div>
          <tbody>
            {results}
          </tbody>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name of the image:
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" required/>
            </label>
            <label>
              Image:
              <input type="file" /*value={this.state.image}*/ onChange={this.handleChangeImage} name="image" required/>
            </label>
            <label>
              description:
              <input type="text" value={this.state.description} onChange={this.handleChange} name="description" required/>
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );

    }
}

export default Shop;
