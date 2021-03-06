import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import {getUserDetail} from '../Actions/UserAction'
import PnetIcon from '../image/icons/PnetIcon.png'

import GlobalNav from '../Components/GlobalNav'
import Indicator from '../Components/Indicator'

import {getToken} from '../Utils/utils'

type State = {
  userInfo: {
    id: string;
    name: string;
    image: string;
    email: string;
  } | null;
  showIndicator: boolean;
}

class HomePage extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      userInfo: null,
      showIndicator: false
    };
  }

  async componentDidMount() {
    this.setState({
      showIndicator: true
    })
    const token = getToken();
    if (!token) {
        this.props.history.push('/error/401-unauthorized');
      return;
    }
    const userInfo = await getUserDetail(token).catch((e: Error) => {
      console.error(e.message);
      this.props.history.push('/error/401-unauthorized');
      return;
    });
    if (!userInfo) {
      this.props.history.push('/error/401-unauthorized');
      return;
    }
    this.setState({
      userInfo: userInfo,
      showIndicator: false
    })
  }

  render() {
    const txt = this.state.userInfo === null ? '' : `ようこそ ${this.state.userInfo.name} さん`
    return (
      <div className="global-nav-page indicator-parent">
        <GlobalNav userInfo={this.state.userInfo}/>
        <div>{txt}</div>
        <div className="home-app-list">
          <div className="tooltip-parent">
            <a className="icon-btn" href="/pnet">
              <img src={PnetIcon} height={120} width={120} alt="people network"/>
            </a>
            <span className="tooltip"> ユーザのスキル・経歴を確認できるアプリケーションです。 </span>
          </div>
        </div>
        <Indicator show={this.state.showIndicator} />
      </div>
    )
  }
}

export default withRouter(HomePage)
