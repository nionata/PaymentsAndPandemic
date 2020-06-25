import React from 'react';
import { List, Avatar } from 'antd';

import pizza from './../../Pizza.svg'

const MerchantList = (props) => {
    return (
        <List
            dataSource={props.merchants}
            size='large'
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={pizza} />}
                        title={<a href="https://sbarro.com">{item.name}</a>}
                        description={<>
                            {item.city}, {item.state}
                            <br />
                            <u>Hours</u>
                        </>}
                    />
                </List.Item>
            )}
        />
    )
}

export default MerchantList;