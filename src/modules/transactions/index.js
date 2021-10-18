import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Color } from 'common';
import { connect } from 'react-redux';
import CardsWithIcon from '../generic/CardsWithIcon';
import Api from 'services/api/index.js';
import { Routes } from 'common';
import { Spinner } from 'components';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      data: [],
      offset: 0,
      limit: 5,
      isLoading: false
    }
  }

  componentDidMount() {
    this.retrieve(false);
  }

  retrieve = (flag) => {
    const { user } = this.props.state;
    let parameter = {
      condition: [{
        column: 'account_id',
        value: user.id,
        clause: '='
      }, {
        column: 'account_id',
        value: user.id,
        clause: 'or'
      }],
      sort: {created_at: 'desc'},
      limit: this.state.limit,
      offset: flag == true && this.state.offset > 0 ? (this.state.offset * this.state.limit) : this.state.offset
    }
    this.setState({ isLoading: true })
    Api.request(Routes.transactionHistoryRetrieve, parameter, response => {
      this.setState({ isLoading: false })
      if (response.data.length > 0) {
        this.setState({
          data: flag == false ? response.data : _.uniqBy([...this.state.data, ...response.data], 'id'),
          offset: flag == false ? 1 : (this.state.offset + 1)
        })
      } else {
        this.setState({
          data: flag == false ? [] : this.state.data,
          offset: flag == false ? 0 : this.state.offset
        })
      }
    });
  }

  render() {
    const { theme } = this.props.state;
    const { data, isLoading } = this.state;
    return (
      <View style={{
        height: height,
        backgroundColor: Color.containerBackground
      }}>
        {isLoading ? <Spinner mode="overlay" /> : null}
        <ScrollView showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          let scrollingHeight = event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y
          let totalHeight = event.nativeEvent.contentSize.height
          if (event.nativeEvent.contentOffset.y <= 0) {
            if (isLoading == false) {
              // this.retrieve(false)
            }
          }
          if (scrollingHeight >= (totalHeight)) {
            if (isLoading == false) {
              this.retrieve(true)
            }
          }
        }}
        >
          <View style={{
            paddingLeft: 20,
            paddingRight: 20,
            minHeight: height + (height * 0.5)
          }}>
            {!isLoading && data.length === 0 && <Text>You have no transactions yet.</Text>}
            {
              data.map((item, index) => {
                return (
                  <CardsWithIcon
                    redirect={() => {
                      console.log('')
                    }}
                    version={3}
                    description={item.description}
                    title={item.receiver ? item.receiver.email : item.description}
                    date={item.created_at_human}
                    amount={item.currency + ' ' + item.amount?.toLocaleString()}
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
)(Transactions);
