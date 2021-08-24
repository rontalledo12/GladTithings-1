import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Color } from 'common';
import Footer from 'modules/generic/Footer';
import { connect } from 'react-redux';
import CardsWithIcon from '../generic/CardsWithIcon';
import InputFieldWithIcon from '../generic/InputFieldWithIcon';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import IncrementButton from 'components/Form/Button';
// import StripeCard from 'components/Payments/Stripe'

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'paypal'
    }
  }

  render() {
    const { theme, user } = this.props.state;
    const { method } = this.state;
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


          <View style={{
            marginBottom: 20,
            marginTop: 20
          }}>
            <Text style={{
              fontWeight: 'bold'
            }}>Payment Methods</Text>

            <View style={{
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: 20
            }}>
              <IncrementButton
                style={{
                  backgroundColor: Color.primary,
                  width: '40%'
                }}
                textStyle={{
                  fontWeight: 'bold'
                }}
                onClick={() => {
                  this.setState({
                    method: 'paypal'
                  })
                }}
                title={'PayPal'}
              />

              <IncrementButton
                style={{
                  backgroundColor: Color.white,
                  width: '40%',
                  marginLeft: '1%',
                  borderColor: Color.gray,
                  borderWidth: 0.25
                }}
                textStyle={{
                  fontWeight: 'bold',
                  color: Color.gray
                }}
                onClick={() => {
                  this.setState({
                    method: 'stripe'
                  })
                }}
                title={'CC / DC'}
              />
            </View>
          </View>

          {/*
            method === 'stripe' && (
              <StripeCard />
            )
          */}

          </View>
          
        </ScrollView>

        <View style={{
          position: 'absolute',
          bottom: 80,
          left: 0,
          paddingLeft: 20,
          paddingRight: 20,
          width: '100%'
        }}>
          <IncrementButton
            style={{
              backgroundColor: Color.secondary,
              width: '100%'
            }}
            textStyle={{
              fontWeight: 'bold'
            }}
            onClick={() => {
              this.props.navigation.navigate('Dashboard')
            }}
            title={'Continue'}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps
)(Transactions);