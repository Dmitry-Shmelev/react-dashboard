import React from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { MENU_CHANGE } from '../../actions';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class AsideMenu extends React.Component {

	onMenuClick(menu){

		this.props.dispatch({
			type: MENU_CHANGE,
			menu
		});
	}

	render(){
		return (
			<Sider
				collapsed={true}
				className="aside"
				>
				<div className="logo" />
				<Menu theme="light">
					<Menu.Item key="1" onClick={() => this.onMenuClick('dashboard')}><Icon type="dashboard" style={{ fontSize: 25}} /><span>Dashboard</span></Menu.Item>
					<Menu.Item key="3" onClick={() => this.onMenuClick('table')}><Icon type="environment-o" style={{ fontSize: 25}} /><span>User Profile</span></Menu.Item>
					<Menu.Item key="2" onClick={() => this.onMenuClick('setting')}><Icon type="setting" style={{ fontSize: 25}} /><span>Setting</span></Menu.Item>
					<Menu.Item key="4" onClick={() => this.onMenuClick('setting')}><Icon type="user" style={{ fontSize: 25}} /><span>User Profile</span></Menu.Item>
					<Menu.Item key="5" onClick={() => this.onMenuClick('setting')}><Icon type="share-alt" style={{ fontSize: 25}} /><span>Share</span></Menu.Item>
				</Menu>
			</Sider>
		)
	}
}

function getState(state){
	return {
		state: state
	};
}

export default connect(getState)(AsideMenu);
