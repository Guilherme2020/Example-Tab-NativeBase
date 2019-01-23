import React, { Component } from 'react'

import { Container, Card, Content, CardItem, Body } from 'native-base'
import { Text } from 'react-native'
export default class Tab2 extends Component {


    render() {
        return (
            <Content>
                <Card
                    style={{
                        marginTop:20,
                        marginLeft:15,
                        width:320
                    }}
                >
                    <CardItem>
                        <Body>
                            <Text>
                                "Neque porro quisquam est 
                                qui dolorem ipsum quia dolor sit amet,
                                 consectetur,lorem ipsum quia dolor sit amet adipisci velit..."
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    }


} 