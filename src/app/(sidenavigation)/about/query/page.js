"use client"
import React, { Component } from "react";

import { connect } from 'react-redux';

import FQA from '@/components/FQA';
import { QueryModel } from "@/models";
import {
  openQueryConfirmModal,
  closeQueryConfirmModal,
} from "@/redux/modals/Action";


class Page extends Component {

  constructor(props) {
    super(props);
    this.model = new QueryModel();
    this.errorMessages = {
      name: '',
      email: '',
      body: '',
    };
    this.state = {
      errorMessages: this.errorMessages,
    }
  }

  clearErrorMessages() {
    for (var key in this.errorMessages) {
      this.errorMessages[key] = '';
    }
  }

  handleSubmit(ev) {
    // prevent move other page
    ev.preventDefault();
    // clear error message
    this.clearErrorMessages();
    // 標準入力妥当検証
    if (ev.currentTarget.checkValidity() !== true) {
      let focusElement = null;
      // お名前
      if (ev.currentTarget.name.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.name;
        }
        if (ev.currentTarget.name.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.name.name)] = ev.currentTarget.name.validationMessage;
        }
        if (ev.currentTarget.name.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.name.name)] = ev.currentTarget.name.validationMessage;
        }
      }
      // メールアドレス
      if (ev.currentTarget.email.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.email;
        }
        if (ev.currentTarget.email.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.email.name)] = ev.currentTarget.email.validationMessage;
        }
        if (ev.currentTarget.email.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.email.name)] = ev.currentTarget.email.validationMessage;
        }
      }
      // 内容
      if (ev.currentTarget.body.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.body;
        }
        if (ev.currentTarget.body.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.body.name)] = ev.currentTarget.body.validationMessage;
        }
        if (ev.currentTarget.body.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.body.name)] = ev.currentTarget.body.validationMessage;
        }
      }
      // focus
      if (focusElement !== null) {
        focusElement.focus();
      }
      // 画面更新
      this.setState({
        errorMessages: this.errorMessages,
      });
      return ev.currentTarget.checkValidity();
    }
    // 標準入力検証
    if (ev.currentTarget.reportValidity() !== true) {
      return;
    }
    this.model = new QueryModel();
    this.model.setName(ev.currentTarget.name.value);
    this.model.setEmail(ev.currentTarget.email.value);
    this.model.setBody(ev.currentTarget.body.value);

    // open modal
    this.props.openQueryConfirmModal();
  }

  handleCloseModal(isFinished) {
    if (isFinished !== true) {
      return;
    }
    window.location.reload();
  }

  render() {
    return (
      <div className='main-area'>
        <main id="main">
          <FQA/>
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">情報提供・お問い合わせ</span>
            </h2>
            <form onSubmit={this.handleSubmit.bind(this)} action="#">
              <fieldset className="form-fieldset required">
                <legend>お名前</legend>
                <div className="form-group">
                  <input className="form-control" name="name" type="text" maxLength="50" autoCapitalize="off" placeholder="田中 美里" required={true}/>
                  <div className="error-message">{this.state.errorMessages.name}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset required">
                <legend>メールアドレス</legend>
                <div className="form-group">
                  <input className="form-control" name="email" type="text" maxLength="255" autoCapitalize="off" placeholder="example@example.com" required={true}/>
                  <div className="error-message">{this.state.errorMessages.email}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset">
                <legend>内容</legend>
                <div className="form-group">
                  <textarea className="form-control" name="body" type="text" autoCapitalize="off" placeholder=""></textarea>
                  <div className="error-message">{this.state.errorMessages.body}</div>
                </div>
              </fieldset>
              <div>
                <input className="btn form-btn-submit" name="submit" type="submit" value="確認画面へ" formNoValidate={true} disabled={true}/>
              </div>
            </form>
          </section>
        </main>
      </div>
    );
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
