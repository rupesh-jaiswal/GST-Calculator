import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,Alert,Modal,TouchableHighlight,FlatList } from 'react-native';
//import {servicesList} from './ServicesList';
export default class SelectServices extends React.Component {
  constructor() {
    super();
    this._onSelect=this._onSelect.bind(this);
    this.state={};
  }
  _onSelect(item) {
    this.props.onSelect(item);
    this.props.onClose();
  }
  render() {
    return (
      <View>
        <Text>Select Service</Text>
        <Modal
          transparent={false}
          onRequestClose={this.props.onClose}>
         <View >
          <Text style={{padding:20,fontWeight:'bold',fontSize:30}}>Select Service</Text>
          <FlatList
          //data={ServicesList.servicesList}
          data={[
            {key:'Sleeper, metro tickets and seasonal passes',value:'0'},
{key:'Outsourcing (in industries such as gems and jewellery, textiles)',value:'5'},
{key:'Railways (AC)',value:'5'},
{key:'Restaurants with annual turnover less than Rs. 50 lakhs',value:'5'},
{key:'Cab aggregators like Ola, Uber',value:'5'},
{key:'Hotels with tariff Rs. 1,000 - 2,500',value:'12'},
{key:'Non-AC restaurants without liquor license',value:'12'},
{key:'Real estate (Work contracts)',value:'12'},
{key:'State run lotteries',value:'12'},
{key:'Airlines (Business class)',value:'18'},
{key:'Telecom, financial service',value:'18'},
{key:'Hotel room tariff Rs. 2,500 - 7,500',value:'18'},
{key:'Hotel room tariff above Rs.7,500',value:'28'},
{key:'AC restaurants with liquor license',value:'18'},
{key:'Movie tickets below Rs. 100',value:'18'},
{key:'Movie tickets above Rs. 100',value:'28'},
{key:'5 star hotels',value:'28'},
{key:'State authorized lotteries',value:'28'}
          ]}
          renderItem={({item}) => <TouchableHighlight underlayColor='red'
                                    onPress={this._onSelect.bind(this,item)}>
                                  <View style={{flexDirection:'row',borderWidth: 0.5}} >
                                  <View style={{flex: 0.4}} >
                                    <Text style={{padding:20}}>{item.key}</Text>
                                  </View>
                                  <View style={{backgroundColor:'skyblue',flex: 0.2}} >
                                    <Text style={{padding:20}}>{item.value}%</Text>
                                  </View>
                                  </View>
                                  </TouchableHighlight>}
        />
         </View>
        </Modal>
      </View>
    );
  }
}