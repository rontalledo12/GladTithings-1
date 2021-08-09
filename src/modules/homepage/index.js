import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Color } from 'common';
import Footer from 'modules/generic/Footer';
import { connect } from 'react-redux';
import CardsWithIcon from '../generic/CardsWithIcon';
import InputFieldWithIcon from '../generic/InputFieldWithIcon';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

const data = [
  {
    id: 0,
    title: 'Theme 1',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  }
]
class HomePage extends Component {
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
            padding: 15
          }}>
            <InputFieldWithIcon
              placeholder={'Username'}
              icon={faUser}
              onTyping={(text) => {this.setState({input: text})}}
            />
            {
              data.map((item, index) => {
                return (
                  <CardsWithIcon
                    redirect={() => {
                      console.log('donate')
                    }}
                    version={1}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    amount={item.amount}
                  />
                )
              })
            }
            {
              data.map((item, index) => {
                return (
                  <CardsWithIcon
                    redirect={() => {
                      console.log('donate')
                    }}
                    version={2}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    amount={item.amount}
                  />
                )
              })
            }
            {
              data.map((item, index) => {
                return (
                  <CardsWithIcon
                    redirect={() => {
                      console.log('donate')
                    }}
                    version={3}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    amount={item.amount}
                  />
                )
              })
            }
          </View>
        </ScrollView>
        <Footer layer={0} {...this.props} />
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps
)(HomePage);
