

import React, { Component } from 'react';
import { Container, Icon, Body, Header, Content, Tab, Tabs, Left } from 'native-base';
import { Text } from 'react-native'
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          {/* <Left>
            <Icon type="FontAwesome" name="home" />
          </Left> */}
          <Body>
            <Text
              style={{ marginLeft:130,color: 'white', fontSize: 20 }}
            >
              Tabs
            </Text>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>

    );
  }
}
