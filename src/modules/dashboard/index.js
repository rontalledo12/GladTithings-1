import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Color } from 'common';
import { connect } from 'react-redux';
import CardsWithIcon from '../generic/CardsWithIcon';
import InputFieldWithIcon from '../generic/InputFieldWithIcon';
import BalanceCard from 'modules/generic/BalanceCard.js';
import IncrementButton from 'components/Form/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

const data = [
  {
    id: 0,
    title: 'Churh 1',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  },
  {
    id: 1,
    title: 'Churh 2',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  },
  {
    id: 2,
    title: 'Churh 1',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  },
  {
    id: 3,
    title: 'Churh 2',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  },
  {
    id: 4,
    title: 'Churh 1',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  },
  {
    id: 5,
    title: 'Churh 2',
    description: "Receives email address every time there's a login of the account.",
    date: 'July 23, 2021 5:00 PM',
    amount: 'USD 10.00'
  }
]

const balance = {
  current_balance: 10000,
  currency: 'USD',
  available_balance: 5000
}

class Dashboard extends Component {
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
            

            {
              balance && (
                <BalanceCard data={balance}/>
              )
            }

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 20
            }}>
              <IncrementButton style={{
                backgroundColor: Color.secondary,
                width: '40%'
              }}
              onClick={() => {
                //
              }}
              title={'Deposit'}
              />

              <IncrementButton style={{
                backgroundColor: Color.secondary,
                width: '40%'
              }}
              onClick={() => {
                //
              }}
              title={'Withdraw'}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10
            }}>
              <Text style={{
                fontWeight: 'bold',
                color: Color.primary
              }}>Donations</Text>

              <TouchableOpacity>

                <Text style={{
                  fontWeight: 'bold',
                }}>View more</Text>

              </TouchableOpacity>
            </View>

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
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps
)(Dashboard);
