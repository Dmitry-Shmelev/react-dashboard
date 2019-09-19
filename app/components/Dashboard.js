import React from 'react'
import { connect } from 'react-redux';
import { Line, Pie } from 'react-chartjs-2';
import { Row, Col, Icon, Card, Button ,Progress } from 'antd';
import { Tabs } from 'antd';
import { Timeline } from 'antd';

import AsideMenu from './sections/AsideMenu';
import SimpleTable from './tables/Simple';
import SimpleList from './SimpleList';


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4880ff',
      borderColor: '#4880ff',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4880ff',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const pieData = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class Dashboard extends React.Component {

	render(){
		return (
			<div>
				<Row gutter={16} className="margin-bottom">
					<Col className="gutter-row" span={18}>
						<Card className="nopadding">
							<Line 
								height={96}
								options={{
									legend: {
										display: false
									},
								}}
								data={data} />
						</Card>
					</Col>
					<Col className="gutter-row" span={6}>
						<Card className="margin-bottom">
							<Row gutter={8}>
								<Col className="gutter-row text-center" span={24}><h5>Title</h5></Col>
							</Row>
							<Row gutter={8}>
								<Col className="gutter-row" span={12}>
									<Pie
										data={pieData}
										height={210}
										options={{
											legend: {
												display: false
											},
										}}
										/>
								</Col>
								<Col className="gutter-row" span={12}>
									<Pie
										data={pieData}
										height={210}
										options={{
											legend: {
												display: false
											},
										}}
										/>
								</Col>
							</Row>
						</Card>
						<Card>
							<Row gutter={16}>
								<Col className="gutter-row" span={24}>
									<h4>Title</h4>	
								</Col>
								<Col className="gutter-row" span={18}>
									<Progress percent={70} status="exception" showInfo={false} />
									<Progress percent={100} showInfo={false} />
									<Progress percent={50} showInfo={false} />
								</Col>
								<Col className="gutter-row" span={6}>
									<Icon type="trophy" style={{ fontSize: 60}} />
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row gutter={16} className="margin-bottom">
					<Col className="gutter-row" span={10}>
						<Card className="primary">
							<Row gutter={16}>
								<Col className="gutter-row" span={12}>
								</Col>
								<Col className="gutter-row" span={12}>
									<p style={{ color:'white', marginBottom: '0.5em'}}>
									The first file you should check out is README.md.
									It has some basic information on how to use CLI commands.
									Whenever you want to know more about how Angular CLI works
									make sure to 
									</p>
								</Col>
							</Row>
							
						</Card>
					</Col>
					<Col className="gutter-row" span={7}>
						<Card
							actions={['View']}
							>
							<Row gutter={16}>
								<Col className="gutter-row" span={24}>
									<h2>Title</h2>	
								</Col>
								<Col className="gutter-row" span={18}>
									<Progress percent={70} status="exception" showInfo={false} />
									<Progress percent={100} showInfo={false} />
									<Progress percent={50} showInfo={false} />
								</Col>
								<Col className="gutter-row" span={6}>
									<Icon type="trophy" style={{ fontSize: 60}} />
								</Col>
							</Row>
						</Card>
					</Col>
					<Col className="gutter-row" span={7}>
						<Card loading={true}></Card>
					</Col>
				</Row>
				<Row gutter={16} className="margin-bottom">
					<Col className="gutter-row" span={12}>
						<Card className="nopadding">
							<SimpleTable  />
						</Card>
					</Col>
					<Col className="gutter-row" span={12}>
						<Card>
							<Row gutter={8}>
								<Col className="gutter-row" span={14}>
									<br /><br />
									<Timeline>
										<Timeline.Item>
											<h4>Create a services site 2015-09-01</h4>
											<p>he first file you should check out is README It has some basic information on how</p>
										</Timeline.Item>
										<Timeline.Item>
											<h4>Create a services site 2015-09-01</h4>
											<p>he first file you should check out is README It has some basic information on how</p>
										</Timeline.Item>
										<Timeline.Item>
											<h4>Create a services site 2015-09-01</h4>
											<p>he first file you should check out is README It has some basic information on how</p>
										</Timeline.Item>
									</Timeline>
								</Col>
								<Col className="gutter-row" span={10}>
									<Card className="dark padding-30 text-center">
										<br />
										<Icon type="message" style={{ fontSize: 70,color:'#ffffff',marginBottom:'30px'}} />
										<p style={{color:'#dedede'}}>The first file you should check out is </p>
									    <Button className="btn-orange" >Click Me</Button>
									</Card>
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

export default connect(getState)(Dashboard);