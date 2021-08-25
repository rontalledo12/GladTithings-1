import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Color } from 'common';
import { connect } from 'react-redux';
import CardsWithIcon from '../generic/CardsWithIcon';
import InputFieldWithIcon from '../generic/InputFieldWithIcon';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

const data = [
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
  {
    title: 'Church 1',
    date: "August 22, 2010",
    amount: '$100.00'
  },
]

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: null
    }
  }

  render() {
    const { theme } = this.props.state;
    return (
      <View style={{
        height: height,
        backgroundColor: Color.containerBackground
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            paddingLeft: 20,
            paddingRight: 20,
            minHeight: height + (height * 0.5)
          }}>

            {
              data.map((item, index) => {
                return (
                  <CardsWithIcon
                    redirect={() => {
                      if(item.route !== 'pageMessageStack'){
                        this.props.navigation.navigate(item.route)
                      }else{
                        this.props.navigation.navigate(item.route, {
                          title: 'Success Page',
                          message: 'Transaction was successful',
                          payload: 'error'
                        })
                      }
                    }}
                    version={3}
                    title={item.title}
                    date={item.date}
                    amount={item.amount}
                  />
                )
              })
            }

          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps
)(Settings);
