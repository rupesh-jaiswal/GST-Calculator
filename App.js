import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,Alert,TouchableOpacity } from 'react-native';
import SelectServices from './src/js/SelectServices';
export default class App extends React.Component {
  constructor() {
    super();
    this._onSelectService=this._onSelectService.bind(this);
    this._onCalculate=this._onCalculate.bind(this);
    this._onServiceSelected=this._onServiceSelected.bind(this);
    this.state={
      showServiceList:false
    };
  }

  _onCalculate() {
    if(this.state.text) {
      let amount=parseInt(this.state.text);
      let total=amount+amount*0.01*this.state.item.value;
      this.setState({total,error:undefined});
    }else {
      let error='Please enter valid amount';
      this.setState({error,total:undefined});
      Alert.alert(error);
    }
  }
  _onServiceSelected(item) {
    this.setState({item});
  }
  _onSelectService() {
    this.setState({showServiceList:!this.state.showServiceList});
  }
  render() {
    let selectedServiceInfo,item=this.state.item;
    if(this.state.item) {
      selectedServiceInfo='GST applied on '+item.key+ ' is '+item.value+'%';
    }else {
      selectedServiceInfo='No service selected';
    }
    let serviceList;
    if(this.state.showServiceList) {
      serviceList=<SelectServices onClose={this._onSelectService} onSelect={this._onServiceSelected}/>;
    }

    let finalOutput;
    if(this.state.total) {
      finalOutput=<Text style={styles.output}> &#8377; {this.state.total}</Text>;
    }
    let thisObject=this;
    return (
      <View style={styles.container}>
        <View style={{flex: 0.8, backgroundColor: 'steelblue',
          justifyContent: 'center'}} >
          <Text style={styles.header}>GST Calculator</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'powderblue'}} >
          <View style={{flexDirection:'row'}}>
            <View style={{flex: 0.2}} >
              <Text style={{padding:20}}>Enter Amount</Text>
            </View>
            <View style={{flex: 0.3}} >
              <TextInput keyboardType='numeric'
              style={{height: 60}}
              placeholder="Enter the Amount"
              onChangeText={(text) => this.setState({text})}
              />
            </View>
          </View>
          <View style={{flexDirection:'row',paddingTop:20}}>
            <View style={{flex: 0.4}} >
              <Text style={{paddingLeft:20}}>{selectedServiceInfo}</Text>
            </View>
            <View style={{flex: 0.15,paddingRight:5}} >
              <Button style={{height:60}}
                onPress={() => { thisObject.setState({showServiceList:true})}}
                title="Select Service"
              />
            </View>
          </View>
          <View style={{paddingTop:20}}>
            <Button 
              onPress={this._onCalculate}
              title="Calculate"
            />
          </View>
          <View style={styles.outputContainer}>
            <Text style={styles.error}>{this.state.error}</Text>
          </View>
          <View style={styles.outputContainer}>
            {finalOutput}
          </View>
        </View>
        {serviceList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22
    //backgroundColor: 'skyblue',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header:{
    fontWeight:'bold',
    fontSize: 42,
    paddingLeft:10
    
  },
  output:{
    paddingTop:20,
    fontWeight:'bold',
    fontSize:60
  },
  outputContainer:{
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  error:{
    color:'red'
  }
});
