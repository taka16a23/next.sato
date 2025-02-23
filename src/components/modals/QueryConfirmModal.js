"use client"
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import Lottie from "react-lottie";

import {
  openQueryConfirmModal,
  closeQueryConfirmModal,
} from "@/redux/modals/Action";
import { ServiceFactory } from '@/services';
import animationData from "@/assets/lotties/success_circle.json";


class QueryConfirmModal extends Component {
  static propTypes = {
    onSuccess: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
  }

  static defaultProps = {
    onSuccess: null,
    onOpened: null,
    onClosed: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
    }
  }

  openModal() {
    if(this.props.onOpened) {
      this.props.onOpened();
    }
  }

  handleSendButton(ev) {
    // prevent move other page
    ev.preventDefault();
    var service = ServiceFactory.createQueryService();
    service.inquery(this.props.model).then(() => {
      this.setState({
        isFinished: true,
      });
    }).catch(err => {
      alert(err);
    });;
  }

  closeModal() {
    if(this.props.onClosed) {
      this.props.onClosed(this.state.isFinished);
    }
    this.props.closeQueryConfirmModal();
  }

  handleCloseButton(ev) {
    this.closeModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.queryConfirmModal.isOpen}
        toggle={this.closeModal.bind(this)}
        onOpened={this.openModal.bind(this)}
        scrollable
        className="confirm-modal"
      >
        <ModalHeader className="header" toggle={this.closeModal.bind(this)}>
          情報提供・お問い合わせ
        </ModalHeader>
        <ModalBody className="body">
          {this.state.isFinished === true ?
           <div className="body-inner">
             <Lottie options={{
                       loop: false,
                       autoplay: true,
                       animationData,
                     }}
                     width={150} height={150}/>
             <div className="modal-message">
               <p>お問い合わせを送信しました</p>
               <p>もし連絡がない場合は、お電話にてお問い合わせをお願いいたします</p>
               <p>電話番号 077-546-6905</p>
             </div>
           </div>
           :
           <div className="body-inner">
             <div className="item">
               <label className="label">
                 お名前
               </label>
               <div className="content">
                 {this.props.model.getName()}
               </div>
             </div>
             <hr/>
             <div className="item">
               <label className="label">
                 メールアドレス
               </label>
               <div className="content">
                 {this.props.model.getEmail()}
               </div>
             </div>
             <hr/>
             <div className="item">
               <label className="label">
                 内容
               </label>
               <div className="content">
                 {this.props.model.getBody()}
               </div>
             </div>
           </div>
          }
        </ModalBody>
        <ModalFooter className="confirm-modal-footer">
          {this.state.isFinished !== true ?
           <Button onClick={this.handleSendButton.bind(this)}>送信</Button>
           : <Button className="close-button" onClick={this.handleCloseButton.bind(this)}>閉じる</Button>
          }
        </ModalFooter>
      </Modal>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    queryConfirmModal: {
      isOpen: state.modals.queryConfirmModalIsOpen,
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openQueryConfirmModal: function() {
      dispatch(openQueryConfirmModal());
    },
    closeQueryConfirmModal: function() {
      dispatch(closeQueryConfirmModal());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryConfirmModal);
