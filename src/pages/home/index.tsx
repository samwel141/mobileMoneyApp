 
/* eslint-disable react-native/no-inline-styles */
// import CustomText from '../../shared/components/Text';
// import HomePage from '../../shared/components/AppBar/HomePage';
// import PrimaryFeatures from './PrimaryFeatures';
// import React from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import SecondaryFeatures from './SecondaryFeatures';
// import styles from './styles';
// import utils from '../../shared/navigation/utils';

// const Home = (props: any) => {
//   return (
//     <SafeAreaView style={styles.safeAreaView}>
//       <HomePage
//         name="Siegfred"
//         onPress={() => {
//           utils.navigateToMenuPage(props.navigation)
//         }}
//       />
//       <CustomText style={styles.text}>
//         {'We deliver,\nYou '}
//         <CustomText style={styles.messageText}>{'Unpack'}</CustomText>
//         <CustomText>!</CustomText>
//       </CustomText>
//       <CustomText style={styles.primaryFeaturesText}>
//         Here are some things you can do:
//       </CustomText>
//       <PrimaryFeatures
//         navigation={props.navigation}
//       />
//       <CustomText style={styles.secondaryFeaturesText}>
//         Your favorite delivery locations:
//       </CustomText>
//       <SecondaryFeatures />
//     </SafeAreaView>
//   );
// };
// export default Home;











import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import images from '../../shared/utils/images';
import React from 'react';

// import AntDesign from '@ant-design/icons-react-native';
// import FontAwesome from '@ant-design/icons-react-native';
// import  FeatherIcon  from 'react-native-feather';
//  const Icon = require('react-native-feather');
// const AntDesign = require('@ant-design/icons-react-native')
// const FontAwesome = require('@ant-design/icons-react-native')


import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import utils from '../../shared/navigation/utils';

const windowHeight = Dimensions.get('window').height;
const Home = (props: any) => {
  return (
   
    <View style={styles.topView}>
    <ScrollView style={styles.root}>
      {/* Header */}
      <View style={styles.header}>
        {/* Item du header */}
        <View style={styles.headerItems}>
          <View style={styles.headerItems_item}>
          {/* <Icon name="heart" size={30} color="red" /> */}
            <Text style={styles.headerItems__text}>Welcome, Samwel</Text>
          </View>
         
         
        </View>
        <Text style={styles.balance_text}>Balance</Text>

        {/* Montant Du COmpte */}

        <View style={styles.accountView}>
      
        <Image source={images.box} style={{width: 20, height: 20}} />
       
        <Text style={styles.accountText}>xxxxxx</Text>
        </View>
      </View>

      {/* Top Actions */}

      <View style={styles.topViewContainer}>
        <View style={styles.topCard}>
          <View style={styles.topCardRow}>
            <TouchableOpacity style={styles.topCardRow__item}>
              <AntDesign name="pluscircleo" size={20} color="#0e39c8" />
              <Text style={styles.topCardRow__item_text}>Send Money</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.topCardRow__item}>
              <AntDesign name="minuscircleo" size={20} color="#0e39c8" />

              <Text style={styles.topCardRow__item_text}>Withdraw Money</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.topCardRow__item}>
              <FontAwesome name="exchange" size={20} color="#0e39c8" />

              <Text style={styles.topCardRow__item_text}>Pay Bills</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* COmpte */}

      <View style={styles.accountTextContainer}>
        <Text style={styles.accountTextContainer_text}>Frequent Transactions</Text>
      </View>

      {/* List des comptes */}

      <View>
        <TouchableOpacity style={styles.accountList_item}>
          <View style={styles.accountList_item_image_text}>
            <View style={styles.avatar}>
            {/* <Image source={images.sieg} style={{width: 80, height: 80}} /> */}
            </View>
            <View>
              <Text style={styles.account_libelle}>Buy bundle</Text>
              <Text>Description </Text>
            </View>
          </View>

          {/* <AntDesign name="arrowright" size={20} color="#153ee7" /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountList_item}>
          <View style={styles.accountList_item_image_text}>
            {/* <Image
              source={images.direction}
              style={{width: 80, height: 80}}
            /> */}
            <View>
              <Text style={styles.account_libelle}>Phone to Bank</Text>
              <Text>Description</Text>
            </View>
          </View>

          {/* <AntDesign name="arrowright" size={20} color="#153ee7" /> */}
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <TouchableOpacity style={styles.createAccountContainer_icon_text}>
            {/* <AntDesign
              name="plus"
              size={20}
              color="#edf1f2"
              style={{marginRight: 5}}
            /> */}
      
          </TouchableOpacity>
        </View>
      </View>

      {/* Dernieres Transactions */}

      <View style={styles.accountTextContainer}>
        <Text style={styles.accountTextContainer_text}>
          Previous Transactions
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}>Luku</Text>
            <Text>3,000Tsh</Text>
          </View>

          {/* <AntDesign name="arrowright" color="#154ee7" size={20} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}>King'amuzi</Text>
            <Text>25,000Tsh</Text>
          </View>

          {/* <AntDesign name="arrowright" color="#154ee7" size={20} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}>Fee</Text>
            <Text>2,000,000Tsh</Text>
          </View>

          {/* <AntDesign name="arrowright" color="#154ee7" size={20} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}>Any</Text>
            <Text>4,000Tsh</Text>
          </View>
{/* 
          <AntDesign name="arrowright" color="#154ee7" size={20} /> */}
        </TouchableOpacity>
           
          
        </View>
    </ScrollView>
         <View style={styles.container}>
            <TouchableOpacity style={styles.fab}  onPress={() => {
            utils. navigateToRequestDeliveryPage(props.navigation);
          }} >
              <Text style={styles.fabText}>?</Text>
            </TouchableOpacity>
          </View>
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#edf1f2',
    position: 'relative',
  },
  topView: {
   flex: 1,
   position: 'relative',
  },
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  fab: {
    backgroundColor: '#007bff',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  fabText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  avatar: {
  borderRadius: 100,
  },  
  eye: {
    color: '#edf1f2'
  },
  balance_text: {
   textAlign: 'center',
   marginTop: 9,
   color: '#442624',
   fontSize: 21,
  },

  header: {
    backgroundColor: '#154ee7',
    height: windowHeight * 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20,
  },
  headerItems: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItems_item: {
    flexDirection: 'row',
    backgroundColor: '#1d50b1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,
  },
  headerItems_item_inactive: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,
  },
  headerItems__text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  headerItems__text_unactive: {
    color: '#eee',
    fontFamily: 'OpenSans-Regular',
  },

  accountView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  accountText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },

  topViewContainer: {left: 0, right: 0, height: 90, marginTop: -45},
  topCard: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topCardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topCardRow__item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCardRow__item_text: {
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },

  accountTextContainer: {
    padding: 15,
    marginTop: 15,
  },
  accountTextContainer_text: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },

  accountList_item: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accountList_item_image_text: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  account_libelle: {
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
  },

  createAccountContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  createAccountContainer_icon_text: {
    borderWidth: 1,
    borderColor: '#edf1f2',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 30,
  },

  lastTransactionItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  lastTransactionItem_text: {
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
  },
});