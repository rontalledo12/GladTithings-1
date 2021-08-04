import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Color } from 'common';
import Footer from 'modules/generic/Footer';
import { connect } from 'react-redux';
import PaymentMethodCard from 'modules/generic/Cards';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

const data = [
  {
    username: 'Han',
    payment_method: 'paypal',
    status: 'Authorized',
    end_date: 'November 30, 2020'
  },
  {
    username: 'Kai',
    payment_method: 'credit_card',
    status: 'Authorized',
    end_date: 'November 30, 2020'
  }
]

class Subcriptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, theme } = this.props.state;
    return (
      <View style={{
        height: height,
        backgroundColor: Color.containerBackground
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            marginBottom: 100,
            paddingRight: 20,
            paddingLeft: 15
          }}>
            {data.length > 0 && data.map((item, index) => {
              return (
                <PaymentMethodCard
                  data={item}
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
)(Subcriptions);
