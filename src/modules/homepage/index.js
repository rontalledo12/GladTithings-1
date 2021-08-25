import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Color } from 'common';
import Footer from 'modules/generic/Footer';
import { connect } from 'react-redux';
import CardsWithIcon from '../generic/CardsWithIcon';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: null
    }
  }

  render() {
    const { theme, user } = this.props.state;
    return (
      <View style={{
        height: height,
        backgroundColor: Color.containerBackground
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            user && (
              <View style={{
                width: '100%',
                minHeight: 100,
                borderRadius: 20,
                backgroundColor: Color.primary,
                paddingTop: 15,
                paddingBottom: 15
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: Color.white
                }}>Welcome {user.username.toUpperCase()}</Text>

              </View>
            )
          }

          <View style={{
            paddingLeft: 20,
            paddingRight: 20,
            flex: 1
          }}>
            
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10
            }}>
              <Text style={{
                fontWeight: 'bold'
              }}>Recently visited churches</Text>

            </View>



            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10
            }}>
              <Text style={{
                fontWeight: 'bold'
              }}>Upcoming events</Text>

            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps
)(HomePage);
