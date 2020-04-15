import React, {Component, Fragment} from "react";
import classes from './Modal.module.css';

export default class Modal extends Component {
  state = {
      isOpen: false
  }
  onToggleModal = () => {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }
  render() {
      console.log(this.state)
      return (
          <Fragment>
              <button onClick={this.onToggleModal}>Open modal</button>
              {
                 this.state.isOpen
                     
                 && <div className={classes.modal}>
                        <div className={classes.modalBody}>
                            <h1>Modal title</h1>
                            <p>Modal text</p>
                            <button onClick={this.onToggleModal}>Close modal</button>
                        </div>
                    </div>

              }
          </Fragment>

      )
  }
}