"use client"
import React, { Component } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lottie from "react-lottie";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

import {
  openHallRequestConfirmModal,
  closeHallRequestConfirmModal,
} from "@/redux/modals/Action";
import { ServiceFactory } from '@/services';
import animationData from "@/assets/lotties/success_circle.json";


class HallRequestConfirmModal extends Component {
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

  closeModal() {
    if(this.props.onClosed) {
      this.props.onClosed(this.state.isFinished);
    }
    this.props.closeHallRequestConfirmModal();
  }

  handleSendButton(ev) {
    // prevent move other page
    ev.preventDefault();
    var service = ServiceFactory.createHallService();
    service.request(this.props.model).then(() => {
      this.setState({
        isFinished: true,
      });
    }).catch(err => {
      alert(err);
    });;
  }

  handleCloseButton(ev) {
    this.closeModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.hallRequestConfirmModal.isOpen}
        toggle={this.closeModal.bind(this)}
        onOpened={this.openModal.bind(this)}
        scrollable
        className="confirm-modal"
      >
        <ModalHeader className="header" toggle={this.closeModal.bind(this)}>
          里公民館使用申込
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
              <p>申込み確認メールを送信しました</p>
              <p>もし連絡がない場合は、お電話にてお問い合わせをお願いいたします</p>
              <p>電話番号 077-546-6905</p>
            </div>
          </div>
           :
          <div className="body-inner">
            <div className="item">
              <label className="label">
                団体名
              </label>
              <div className="content">
                {this.props.model.getGroupName()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用責任者
              </label>
              <div className="content">
                {this.props.model.getResponsiblePerson()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                住所
              </label>
              <div className="content">
                {this.props.model.getAddress()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                電話番号
              </label>
              <div className="content">
                {this.props.model.getPhoneNumber()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                メールアドレス
              </label>
              <div className="content">
                {this.props.model.getEmailAddress()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用目的(会合名称)
              </label>
              <div className="content">
                {this.props.model.getReason()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用日時
              </label>
              <div className="content">
                {this.props.model.getStartDateTimeDisplay('YYYY年M月D日 HH時MM分')}〜{this.props.model.getEndDateTimeDisplay('HH時MM分')}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用室
              </label>
              <div className="content">
                {this.props.model.getRoomName()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                内容
              </label>
              <div className="content">
                {this.props.model.getDetail()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                備考
              </label>
              <div className="content" style={{whiteSpace: 'pre-line'}}>
                {this.props.model.getNote()}
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
    hallRequestConfirmModal: {
      isOpen: state.modals.hallRequestConfirmModalIsOpen,
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openHallRequestConfirmModal: function() {
      dispatch(openHallRequestConfirmModal());
    },
    closeHallRequestConfirmModal: function() {
      dispatch(closeHallRequestConfirmModal());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HallRequestConfirmModal);
