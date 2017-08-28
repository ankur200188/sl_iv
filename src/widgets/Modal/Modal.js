import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <span className="modal-close" onClick={this.props.close}></span>
                    {this.props.title &&
                        <h2 className="modal-title">
                            {this.props.title}
                        </h2>
                    }
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                    <div className="modal-actions">
                        <button className="modal-actions-buttons modal-actions-confirm" onClick={this.props.confirm}>OK</button>
                        <button className="modal-actions-buttons modal-actions-cancel" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;

