import AppBar from '../../shared/components/AppBar';
import Display from '../../shared/components/Map/Display';
import { COLORS, PAGES } from '../../shared/utils/constants';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import utils from '../../shared/navigation/utils';
import images from '../../shared/utils/images';
import * as Icon from 'react-native-feather';


// const DuringDelivery = (props: any) => {
//     return (
//         <>
//         <AppBar
//             title=' '
//             safeAreaViewStyle={styles.beforeDeliveryAppBar}
//             onPress={() => {
//                 const navigateFromPage = props?.route?.params?.returnTo;
//                 if (navigateFromPage === PAGES.beforeDelivery) {
//                     utils.navigateToBeforeDeliveryPage(props.navigation, PAGES.duringDelivery);
//                 } else if (navigateFromPage === PAGES.orderHistory) {
//                     utils.navigateToOrderHistoryPage(props.navigation)
//                 }
//             }}
            
//         />
//             <View style={styles.beforeDeliveryContainer}>
//                 <Display />
//                 <View style={styles.content}>
//                 <Text style={styles.beforeDeliveryTitle}>
//                     Delivery started
//                 </Text>
              
//                 <View style={styles.imageContainer}>
//                 <Image source={images.onwait} style={styles.image} />
//                 </View>
             
//                 <Text style={styles.beforeDeliveryTitle}>
//                     Your package will be there in 30 minutes
//                 </Text>
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button1}>
//                        <Text style={styles.buttonText}> Button1</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity 
//                     style={styles.button2}
//                     >
//                        <Text style={styles.buttonText}>Track Delivery</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </>
//     )
// };

// export default DuringDelivery;












const DuringDelivery = (props: any) => {

  
    // const handleCancel = () => {
    // console.log("Cancelled")
    // };
  
    return (
      <View style={styles.container}>
          <AppBar
            title=' '
            safeAreaViewStyle={styles.beforeDeliveryAppBar}
            onPress={() => {
                const navigateFromPage = props?.route?.params?.returnTo;
                if (navigateFromPage === PAGES.beforeDelivery) {
                    utils.navigateToBeforeDeliveryPage(props.navigation, PAGES.duringDelivery);
                } else if (navigateFromPage === PAGES.orderHistory) {
                    utils.navigateToOrderHistoryPage(props.navigation)
                }
            }}
            
        />
  
        <View style={styles.topView}>
         <Display/>
       <View style={styles.bottom}>
        <View style={styles.trackButton}>
        <TouchableOpacity 
            style={styles.button2}
            onPress={() => {
                utils.navigateToLiveTrackingPage(props.navigation);
            }}
            >
            <Text style={styles.buttonText}>Track Delivery</Text>
       </TouchableOpacity>
        </View>
   
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Estimated Arrival</Text>
            <Text style={styles.arrivalTime}>20-30 Minutes</Text>
            <Text style={styles.arrivalInfo}>Your Order is on its way</Text>
          </View>
  
          <View style={styles.riderInfoContainer}>
            <View style={styles.riderImageContainer}>
              <Image style={styles.riderImage} source={images.sieg} />
            </View>
  
            <View style={styles.riderDetailsContainer}>
              <Text style={styles.riderName}>Siegfred Madeghe</Text>
              <Text style={styles.riderRole}>Your Rider</Text>
            </View>
  
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity style={styles.phoneButton}>
                <Icon.Phone fill={COLORS.celadon} stroke={COLORS.considerThisGrey} strokeWidth="1" />
              </TouchableOpacity>
{/*   
              <TouchableOpacity style={styles.phoneButton} onPress={handleCancel}>
                <Icon.X fill={COLORS.celadon} stroke={COLORS.considerThisGrey} strokeWidth="3" />
              </TouchableOpacity> */}
            </View>
          </View>

          {/* <View style={styles.riderInfoContainer2}>

            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.phoneButton} onPress={handleCancel}>
                        <Icon.X fill={COLORS.celadon} stroke={COLORS.considerThisGrey} strokeWidth="3" />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.phoneButton}>
                        <Icon.Phone fill={COLORS.celadon} stroke={COLORS.considerThisGrey} strokeWidth="1" />
                </TouchableOpacity>
            </View>

            <View style={styles.riderDetailsContainer}>
              <Text style={styles.riderName}>Sieg</Text>
              <Text style={styles.riderRole}>Your Rider</Text>
            </View>
  
            <View style={styles.riderImageContainer}>
              <Image style={styles.riderImage} source={images.sieg} />
            </View>
          </View> */}

          <View style={styles.promoContainer}>
            <TouchableOpacity>
                <Text style={styles.promoText}>Explore the excellence of our delivery services!!</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      
        </View>
      </View>
    );
  };
  
  export default DuringDelivery;