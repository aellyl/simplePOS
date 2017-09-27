import React, { Component } from "react";
import { connect } from "react-redux";

class confirmModal extends Component {
    render() {
        let { modalContent, onConfirm, onCancel, isOpen } = this.props

        return (
            <div>
                {isOpen &&
                    <dialog class="mdl-dialog">
    <h4 class="mdl-dialog__title">Allow data collection?</h4>
    <div class="mdl-dialog__content">
      <p>
      {modalContent}
      </p>
    </div>
    <div class="mdl-dialog__actions">
      <button type="button" class="mdl-button" onClick={() => onConfirm("test")}>>Ok</button>
      <button type="button" class="mdl-button " onClick={() => onCancel()}>Cancel</button>
    </div>
  </dialog>
                    
               

                }
                     {/* <div>
                        <div className="modal-backdrop"></div>
                        <div className="confirm-modal-content">
                            <span className="confirm-modal-message">{modalContent}</span>
                            <input className="confirm-modal-input" type="text" ref={(_ref) => this.confirmInput = _ref} />
                            <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
                            <button className="btn" onClick={() => onCancel()}>Cancel</button>
                        </div>
                    </div> */}

            </div>
        )
    }

}

// getTextAndConfirm()
// {
//     // let text = this.confirmInput.value
//     var text="test";
//     this.props.onConfirm(text)
// }



const mapStateToComponent = (state) => {
  return {
    isOpen: state.modal.isOpen
  }
}

export default connect(mapStateToComponent)(confirmModal)