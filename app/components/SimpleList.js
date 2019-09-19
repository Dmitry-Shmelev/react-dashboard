import React from 'react'
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];


class SimpleList extends React.Component {
	render(){
		return (
			<List
			    itemLayout="horizontal"
			    dataSource={data}
			    renderItem={item => (
			      <List.Item>
			        <List.Item.Meta
			          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
			          title={<a href="https://ant.design">{item.title}</a>}
			          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
			        />
			      </List.Item>
			    )}
			  />
		)
	}
}


function getState(state){
	return {
		state: state
	};
}

export default connect(getState)(SimpleList);