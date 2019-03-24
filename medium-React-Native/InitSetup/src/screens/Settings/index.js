import React from "react";
import { View, Button } from "react-native";
import {colors} from '../../components/styles'

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
      <View style={{ flex: 1, backgroundColor: colors.mainColors.darkBlue, alignItems: "center", justifyContent: "center"}}>
          <Button 
           title="Go to VIEW 2"
           onPress={() => this.props.navigation.navigate('ViewTwo')}
          />
        </View>
      </View>
    );
  }
}
