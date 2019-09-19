import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Icon, Card, Button ,Progress } from 'antd';
import { Tabs } from 'antd';
import { Timeline } from 'antd';

import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Setting from './components/Setting';
import AsideMenu from './components/sections/AsideMenu';

const TabPane = Tabs.TabPane;

class Main extends Component {

	constructor(props){
		super(props);
	}

	render() {
		const { menu } = this.props;

		return (
			<div className="body">
				<div className="container">
					<Row gutter={16}>
						<Col className="gutter-row" span={2}>
							<AsideMenu />
						</Col>
						<Col className="gutter-row main-content" span={22}>
							{menu === 'dashboard' ? <Dashboard /> : ''}
							{menu === 'table' ? <Table /> : ''}
							{menu === 'setting' ? <Setting /> : ''}
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

function getState(state){
	console.log(state);
	return {
		state: state,
		menu: state.system.menu
	};
}

export default connect(getState)(Main);
