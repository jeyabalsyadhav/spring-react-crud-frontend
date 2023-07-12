import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        });
    }

    render() {
        return (
            <div>
                <br />
                <div className='card col-md-7 offset-md-3'>
                    <h3 className='text-center' style={{padding:"10px",fontFamily:"times new roman",fontWeight:"bold"}}>View Employee Details</h3>
                    <div className='card-body'>
                    <div className="row" style={{padding:"10px"}}>
                            <label style={{fontSize:"25px",fontFamily:"times new roman"}}>Employee Id : { this.state.employee.id} </label>
                        </div>
                        <div className="row" style={{padding:"10px"}}>
                            <label style={{fontSize:"25px",fontFamily:"times new roman"}}>Employee First Name : { this.state.employee.firstName} </label>
                        </div>
                        <div className='row' style={{padding:"10px"}}>
                            <label style={{fontSize:"25px",fontFamily:"times new roman"}}>Employee Last Name : { this.state.employee.lastName } </label>
                        </div>
                        <div className='row' style={{padding:"10px"}}>
                            <label style={{fontSize:"25px",fontFamily:"times new roman"}}>Employee Email Id :   { this.state.employee.emailid }  </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
