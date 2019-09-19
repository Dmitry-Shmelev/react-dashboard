import React from 'react'
import { connect } from 'react-redux';
import { Row, Col, Icon, Card, Button ,Progress } from 'antd';


class Setting extends React.Component {
	render(){
		return (
			<div>
				<Row gutter={16} className="margin-bottom">
					<Col className="gutter-row" span={18}>
						<Card className="nopadding">
							<br />
						</Card>
					</Col>
					<Col className="gutter-row" span={6}>
						<Card className="margin-bottom">
							<Row gutter={8}>
								<Col className="gutter-row text-center" span={24}>
									<br />
								</Col>
							</Row>
							<Row gutter={8}>
								<Col className="gutter-row" span={12}>
									<br />
								</Col>
								<Col className="gutter-row" span={12}>
									<br />
								</Col>
							</Row>
						</Card>
						<Card>
							<Row gutter={16}>
								<Col className="gutter-row" span={24}>
									<br />
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}


function getState(state){
	return {
		state: state
	};
}

export default connect(getState)(Setting);