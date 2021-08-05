import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Color } from 'common';
import Footer from 'modules/generic/Footer';
import { connect } from 'react-redux';
import CardsWithImages from '../generic/CardsWithImages';

const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)

const data = [
  {
    id: 0,
    title: 'Church 1',
    date: 'July 12, 2021',
    address: 'Cebu South Road, Cebu City, Philippines',
    type: 'Recollection'
  },
  {
    id: 1,
    title: 'Church 1',
    date: 'July 12, 2021',
    address: 'Cebu South Road, Cebu City, Philippines',
    type: 'Recollection'
  },
  {
    id: 2,
    title: 'Church 1',
    date: 'July 12, 2021',
    address: 'Cebu South Road, Cebu City, Philippines',
    type: 'Recollection'
  }
]
class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { theme } = this.props.state;
    return (
      <View style={{
        height: height,
        backgroundColor: Color.containerBackground
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* <Text>Homepage</Text> */}
            <CardsWithImages
              data={data}
              buttonTitle={'Donate'}
              buttonColor={theme ? theme.primary : Color.primary}
              redirect={() => {
                console.log('donate')
              }}
              version={1}
            />
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
