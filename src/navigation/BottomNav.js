import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import * as data from '../../data.json';

const { alertNumber } = data;

export default class BottomNav extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'alerts', title: 'Alerts', icon: 'bell', badge: alertNumber },
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'more', title: 'More', icon: 'menu' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    alerts: () => null,
    home: () => null,
    more: () => null,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
