"use client"
import React, { Component } from "react";

import { connect } from 'react-redux';
import ContentLoader from "react-content-loader"

import { HallRequestModel } from '@/models';
import { HallRequestConfirmModal } from '@/components/modals';
import {
  openHallRequestConfirmModal,
  closeHallRequestConfirmModal,
} from "@/redux/modals/Action";


class Page extends Component {

  constructor(props) {
    super(props);
    this.model = new HallRequestModel();
    this.errorMessages = {
      group_name: '',
      responsible_person: '',
      address: '',
      phone_number: '',
      email_address: '',
      reason: '',
      start_datetime: '',
      end_datetime: '',
      room: '',
      detail: '',
      note: '',
    };
    this.state = {
      room: "1",
      isLoading: true,
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
      // 団体名
      if (ev.currentTarget.group_name.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.group_name;
        }
        if (ev.currentTarget.group_name.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.group_name.name)] = ev.currentTarget.group_name.validationMessage;
        }
        if (ev.currentTarget.group_name.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.group_name.name)] = ev.currentTarget.group_name.validationMessage;
        }
      }
      // 責任者
      if (ev.currentTarget.responsible_person.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.responsible_person;
        }
        if (ev.currentTarget.responsible_person.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.responsible_person.name)] = ev.currentTarget.responsible_person.validationMessage;
        }
        if (ev.currentTarget.responsible_person.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.responsible_person.name)] = ev.currentTarget.responsible_person.validationMessage;
        }
      }
      // 住所
      if (ev.currentTarget.address.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.address;
        }
        if (ev.currentTarget.address.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.address.name)] = ev.currentTarget.address.validationMessage;
        }
        if (ev.currentTarget.address.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.address.name)] = ev.currentTarget.address.validationMessage;
        }
      }
      // 電話番号
      if (ev.currentTarget.phone_number.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.phone_number;
        }
        if (ev.currentTarget.phone_number.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.phone_number.name)] = ev.currentTarget.phone_number.validationMessage;
        }
        if (ev.currentTarget.phone_number.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.phone_number.name)] = ev.currentTarget.phone_number.validationMessage;
        }
      }
      // メールアドレス
      if (ev.currentTarget.email_address.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.email_address;
        }
        if (ev.currentTarget.email_address.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.email_address.name)] = ev.currentTarget.email_address.validationMessage;
        }
        if (ev.currentTarget.email_address.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.email_address.name)] = ev.currentTarget.email_address.validationMessage;
        }
        if (ev.currentTarget.email_address.validity.typeMismatch === true) {
          this.errorMessages[String(ev.currentTarget.email_address.name)] = ev.currentTarget.email_address.validationMessage;
        }
      }
      // 使用開始日時
      if (ev.currentTarget.start_datetime.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.start_datetime;
        }
        if (ev.currentTarget.start_datetime.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.start_datetime.name)] = ev.currentTarget.start_datetime.validationMessage;
        }
        if (ev.currentTarget.start_datetime.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.start_datetime.name)] = ev.currentTarget.start_datetime.validationMessage;
        }
      }
      // 使用終了日時
      if (ev.currentTarget.end_datetime.checkValidity() !== true) {
        if (focusElement === null) {
          focusElement = ev.currentTarget.end_datetime;
        }
        if (ev.currentTarget.end_datetime.validity.valueMissing === true) {
          this.errorMessages[String(ev.currentTarget.end_datetime.name)] = ev.currentTarget.end_datetime.validationMessage;
        }
        if (ev.currentTarget.end_datetime.validity.patternMismatch === true) {
          this.errorMessages[String(ev.currentTarget.end_datetime.name)] = ev.currentTarget.end_datetime.validationMessage;
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
    // からまで正常値チェック
    let t_dtStartDate = new Date(ev.currentTarget.start_datetime.value);
    let t_dtEndDate = new Date(ev.currentTarget.start_datetime.value.split('T')[0] + 'T' + ev.currentTarget.end_datetime.value);
    if (t_dtEndDate < t_dtStartDate) {
      this.errorMessages[String(ev.currentTarget.end_datetime.name)] = '使用時刻以降を指定してください';
      // 画面更新
      this.setState({
        errorMessages: this.errorMessages,
      });
      ev.currentTarget.end_datetime.focus();
      return;
    }
    this.model = new HallRequestModel();
    this.model.setGroupName(ev.currentTarget.group_name.value);
    this.model.setResponsiblePerson(ev.currentTarget.responsible_person.value);
    this.model.setAddress(ev.currentTarget.address.value);
    this.model.setPhoneNumber(ev.currentTarget.phone_number.value);
    this.model.setEmailAddress(ev.currentTarget.email_address.value);
    this.model.setReason(ev.currentTarget.reason.value);
    this.model.setStartDateTime(ev.currentTarget.start_datetime.value);
    let t_sEndDateTime = ev.currentTarget.start_datetime.value.split('T')[0];
    t_sEndDateTime = t_sEndDateTime + 'T';
    t_sEndDateTime = t_sEndDateTime + ev.currentTarget.end_datetime.value;
    this.model.setEndDateTime(t_sEndDateTime);
    this.model.setRoom(this.state.room);
    this.model.setDetail(ev.currentTarget.detail.value);
    this.model.setNote(ev.currentTarget.note.value);

    this.props.openHallRequestConfirmModal();
  }

  handleCloseModal(isFinished) {
    if (isFinished !== true) {
      return;
    }
    window.location.reload();
  }

  onLoaded() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <div className='main-area'>
        <main id="main">
          <HallRequestConfirmModal model={this.model} onClosed={this.handleCloseModal.bind(this)}/>
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">里公民館</span>
            </h2>
            <p>町内団体使用の場合は無料。</p>
            <p>その他団体の貸館料金は相談の上決定する。</p>
            <ContentLoader
               speed={2}
               width="100%"
               height={600}
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb"
               style={{display: this.state.isLoading === true ? "block" : "none"}}
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="600"/>
            </ContentLoader>
            <iframe title="里公民館カレンダー" src="https://calendar.google.com/calendar/embed?showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=6m5ne5kcfmkek4t0ba37o95olo%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FTokyo" height="600" style={{width: "100%",borderWidth: 0, display: this.state.isLoading === true ? "none" : "block"}} frameBorder="0" scrolling="no" onLoad={this.onLoaded.bind(this)}></iframe>
          </section>
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">里公民館使用申込</span>
            </h2>
            <form onSubmit={this.handleSubmit.bind(this)} action="#">
              <fieldset className="form-fieldset required">
                <legend>団体名</legend>
                <div className="form-group">
                  <input className="form-control" name="group_name" type="text" maxLength="255" autoCapitalize="off" placeholder="ブロック1 1-1組" required={true}/>
                  <div className="error-message">{this.state.errorMessages.group_name}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset required">
                <legend>使用責任者</legend>
                <div className="form-group">
                  <input className="form-control" name="responsible_person" type="text" maxLength="50" autoCapitalize="off" placeholder="田中 美里" required={true}/>
                  <div className="error-message">{this.state.errorMessages.responsible_person}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset form-fieldset-name required">
                <legend>住所</legend>
                <div className="form-group">
                  <input className="form-control" name="address" type="text" maxLength="255" autoCapitalize="off" placeholder="里5丁目7-22" required={true}/>
                  <div className="error-message">{this.state.errorMessages.address}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset required">
                <legend>電話番号</legend>
                <div className="form-group">
                  <input className="form-control" name="phone_number" type="tel" maxLength="50" autoCapitalize="off" placeholder="077-XXX-XXXX" required={true}/>
                  <div className="error-message">{this.state.errorMessages.phone_number}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset required">
                <legend>メールアドレス</legend>
                <div className="form-group">
                  <input className="form-control" name="email_address" type="email" maxLength="255" autoCapitalize="off" placeholder="example@example.com" required={true}/>
                  <div className="error-message">{this.state.errorMessages.email_address}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset">
                <legend>使用目的(会合名称)</legend>
                <div className="form-group">
                  <input className="form-control" name="reason" type="text" maxLength="255" autoCapitalize="off" placeholder="ブロック1 1-1組の会合"/>
                  <div className="error-message">{this.state.errorMessages.reason}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset required">
                <legend>使用日時</legend>
                <div className="form-group">
                  <input className="form-control" name="start_datetime" type="datetime-local" required={true}/>
                  <div className="error-message">{this.state.errorMessages.start_datetime}</div>
                </div>
                から
                <div className="form-group">
                  <input className="form-control" name="end_datetime" type="time" required={true}/>
                  <div className="error-message">{this.state.errorMessages.end_datetime}</div>
                </div>
                まで
              </fieldset>
              <fieldset className="form-fieldset form-fieldset-radiobutton required" data-fieldset-label="使用室名">
                <legend>使用室</legend>
                <div>
                  <div className="form-group">
                    <div className="hall-list row g-2">
                      <div className="hall-select col-md-6">
                        <label className="form-label-radio-checkbox form-check-label align-items-center">
                          <input className="form-check-input" name="room[]" type="radio" value="1" onChange={() => this.setState({room: '1'})} checked={this.state.room === '1'}/>
                          大ホール
                        </label>
                      </div>
                      <div className="hall-select col-md-6">
                        <label className="form-label-radio-checkbox form-check-label align-items-center">
                          <input className="form-check-input" name="room[]" type="radio" value="2" onChange={() => this.setState({room: '2'})} checked={this.state.room === '2'}/>
                          2階和室
                        </label>
                      </div>
                      <div className="hall-select col-md-6">
                        <label className="form-label-radio-checkbox form-check-label align-items-center valid">
                          <input className="form-check-input" name="room[]" type="radio" value="3" onChange={() => this.setState({room: '3'})} checked={this.state.room === '3'}/>
                          自治会館2F
                        </label>
                      </div>
                    </div>
                    <div className="error-message">{this.state.errorMessages.room}</div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset">
                <legend>内容</legend>
                <div className="form-group">
                  <input className="form-control" name="detail" type="text" maxLength="255" autoCapitalize="off" placeholder="ごみ集積所についての話し合い"/>
                  <div className="error-message">{this.state.errorMessages.detail}</div>
                </div>
              </fieldset>
              <fieldset className="form-fieldset">
                <legend>備考</legend>
                <div className="form-group">
                  <textarea className="form-control" name="note" type="text" autoCapitalize="off" placeholder=""></textarea>
                  <div className="error-message">{this.state.errorMessages.note}</div>
                </div>
              </fieldset>
              <div>
                <input className="btn form-btn-submit" name="submit" type="submit" value="申込内容を確認する" formNoValidate={true}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
