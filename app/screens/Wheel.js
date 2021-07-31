import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Picker from '@gregfrench/react-native-wheel-picker'
import LinearGradient from 'react-native-linear-gradient';
var PickerItem = Picker.Item;

class Wheel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem : 2,
      itemList: ['Draw 1', 'Draw 2', 'Draw 3', 'Draw 4', 'Draw 5']
    };
  }

  onPickerSelect (index) {
    this.setState({
      selectedItem: index,
    });
  }

  onAddItem = () => {
    var name = 'Draw added';

    if (this.state.itemList.indexOf(name) == -1) {
      this.state.itemList.push(name);
    }

    this.setState({
      selectedItem: this.state.itemList.indexOf(name),
    });
  }

  render () {
    return (
        <LinearGradient colors={['#04a4df',  '#fff']} style={{  width: "100%", height: "100%" }}>
        <Picker style={{width: "100%", height: 500,alignSelf:"center"}}
          lineColor="#fff" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={this.state.selectedItem}
          itemStyle={{color:"#fff", fontSize:26}}
          onValueChange={(index) => this.onPickerSelect(index)}>
            {this.state.itemList.map((value, i) => (
                <PickerItem label={value} value={i} key={i}/>
            ))}
        </Picker>

        <Text style={{margin: 20,justifyContent:"center",alignSelf:"center",fontSize:30,color:'#04a4df'}}>
          Selected: {this.state.itemList[this.state.selectedItem]}
        </Text>

        <Text style={{margin: 20,justifyContent:"center",color:"#fff",alignSelf:"center",backgroundColor:"#04a4df",width:"50%",height:30,textAlign:"center",textAlignVertical:"center",borderRadius:5}} onPress={this.onAddItem}>
          Add item
        </Text>
      </LinearGradient>
    );
  }
}

export default Wheel