import React, { Component } from 'react';
import Modal from './../../widgets/Modal/Modal';
import './SelectEmployee.scss';

class SelectEmployee extends Component {

    constructor(){
        super();
        this.state = {
            data : [
                {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']},
                {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
                {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
                {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
            ],
            currentTeam: null,
            employeeSet: [],
            currentEmployee: null,
            filteredEmployees: []
        };
    }

    setCurrentTeam(ev){
        var currentTeam = ev.target.dataset.team,
            selectedTeam = this.state.data.filter(function(team){
                return (team.team === currentTeam)
            });
        if(selectedTeam.length){
            this.setState({
                'currentTeam': selectedTeam[0].team,
                'employeeSet': selectedTeam[0].employees
            });
            var selectedNode = document.querySelectorAll('.team-selector .selected-value.active')[0];
            selectedNode.innerText = ev.target.dataset.team;
            selectedNode.classList.remove('active');
        }
    }

    setCurrentEmployee(ev){
        this.setState({
            'currentEmployee': ev.target.dataset.employee,
            'filteredEmployees': []
        });
        var selectedNode = document.querySelectorAll('.employee-selector .selected-value.active')[0];
        selectedNode.innerText = ev.target.dataset.employee;
        selectedNode.classList.remove('active');
        document.querySelector('[name="filter-employee"]').value = '';
    }

    selectTeam(ev){
        ev.target.classList.toggle('active');
    }

    selectEmployee(ev){
        ev.target.classList.toggle('active');
    }

    filterEmployees(ev){
        var filteredEmployees = [],
            filterQuery = ev.target.value;
        if(filterQuery.length >= 2){
            filteredEmployees = this.state.employeeSet.filter(function(emp){
                return emp.startsWith(filterQuery);
            });
        }
        this.setState({
            'filteredEmployees': filteredEmployees
        });

    }

    close(){
        this.props.handler(function(ctx){
            ctx.setState({
                'employeeModal': false
            });
        });
    }

    confirm(){

    }

    render() {
        var teams = this.state.data.map(function(team){
            return (
                <li key={team.team} onClick={this.setCurrentTeam.bind(this)} data-team={team.team}>{team.team}</li>
            )
        }.bind(this));

        var employeeSet = this.state.filteredEmployees.map(function(employee){
            return (
                <li key={employee} onClick={this.setCurrentEmployee.bind(this)} data-employee={employee}>{employee}</li>
            )
        }.bind(this));

        return (
            <Modal {...this.props} close={this.close.bind(this)} title="Select an Employee" cancel={this.close.bind(this)} confirm={this.confirm.bind(this)}>
                <div className="send-welcome">
                    <input type="checkbox" name="send_welcome" id="send_welcome"/>
                    <label htmlFor="send_welcome">Send welcome mail to employee</label>
                </div>
                <div className="employee-filter">
                    <label>Select a Team in the Organization</label>
                    <div className="team-selector">
                        <div className="selected-value" onClick={this.selectTeam}>Select Team...</div>
                        <ul>
                            {teams}
                        </ul>
                    </div>
                    <label>Select an Employee</label>
                    <div className="employee-selector">
                        <div className="selected-value" onClick={this.selectEmployee}>Select Employee...</div>
                        <div className="select-employee">
                            <input type="text" name="filter-employee" onKeyUp={this.filterEmployees.bind(this)}/>
                            <ul>
                                {employeeSet}
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default SelectEmployee;