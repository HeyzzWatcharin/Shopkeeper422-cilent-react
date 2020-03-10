import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ProductDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: 26, height: 26, marginTop: 35, marginLeft: 15 }}
            source={require('../Image/back-left-arrow-botton.png')}
          ></Image>
          <View style={styles.promoZone}></View>

          <View style={styles.pDetailZone}>
            <View style={styles.pDetailHead}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sprite</Text>
              <Text
                style={{ fontWeight: 'bold', fontSize: 28, color: '#51C400' }}
              >
                ฿ 16
              </Text>
              <View style={styles.qtyZone}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    borderRightColor: '#F6F6F6',
                    borderRightWidth: 1
                  }}
                >
                  <Text style={{ color: '#717983', padding: 5 }}>5</Text>
                  <Text style={{ color: '#717983', padding: 5 }}>IN STOCK</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    borderRightColor: '#F6F6F6',
                    borderRightWidth: 1
                  }}
                >
                  <Text style={{ color: '#717983', padding: 5 }}>3.5</Text>
                  <Text style={{ color: '#717983', padding: 5 }}>RATING</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      width: 120
                    }}
                  >
                    <Image
                      style={{
                        width: 21,
                        height: 21,
                        marginRight: 10
                      }}
                      source={require('../Image/ic_rateUp.png')}
                    ></Image>
                    <Image
                      style={{
                        width: 21,
                        height: 21,
                        marginLeft: 10
                      }}
                      source={require('../Image/ic_rateDown.png')}
                    ></Image>
                  </View>
                </View>
                <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
                  <Text style={{ color: '#717983', padding: 5 }}>3</Text>
                  <Text style={{ color: '#717983', padding: 5 }}>COMMENTS</Text>
                </View>
              </View>
              <View>
                <Text>About Product</Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#717983',
                    marginTop: 16
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 50
              }}
            >
              <View>
                <Text
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: 13,
                    alignSelf: 'center',
                    fontSize: 16,
                    color: '#51C400'
                  }}
                >
                  <Text>X1 item </Text>
                  <Image
                    style={{ width: 26, height: 26 }}
                    source={require('../Image/ic_add_24px.png')}
                  ></Image>
                  <Text> </Text>
                  <Image
                    style={{ width: 26, height: 26 }}
                    source={require('../Image/ic_remove_24px.png')}
                  ></Image>
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    backgroundColor: '#3B651E',
                    fontSize: 16,
                    color: '#FFF',
                    padding: 13,
                    alignSelf: 'center'
                  }}
                >
                  ADD TO BASKET
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  borderBottomColor: '#F4F5F6',
                  borderBottomWidth: 1,
                  paddingBottom: 14,
                  width: 80
                }}
              >
                Comments
              </Text>

              <View>
                <Text style={{ color: '#317600', marginTop: 18 }}>Mr.zero</Text>
                <Text style={{ color: '#BBBBBB' }}>20/12/03 Fri 2 P.M.</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F1F1F1',
                  borderRadius: 15,
                  padding: 14,
                  marginTop: 14
                }}
              >
                <Text>This is awesome !</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F1F1F1'
  },
  promoZone: {
    height: 300,
    backgroundColor: '#F6F6F6'
  },
  pDetailZone: {
    height: 600,
    backgroundColor: '#FFF',
    padding: 30
  },
  qtyZone: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50
  }
});
