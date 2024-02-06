/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AppBar from '../../shared/components/AppBar';
import React, { useEffect, useState } from 'react';
import Display from '../../shared/components/Map/Display';
import { COLORS, PAGES } from '../../shared/utils/constants';

import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles';
import utils from '../../shared/navigation/utils';
import images from '../../shared/utils/images';
import { ActivityIndicator } from 'react-native-paper';



const BeforeDelivery = (props: any) => {
    // return (
    //     <>
    //     <AppBar
    //         title=' '
    //         safeAreaViewStyle={styles.beforeDeliveryAppBar}
    //         onPress={() => {
    //             const navigateFromPage = props?.route?.params?.returnTo;
    //             if (navigateFromPage === PAGES.duringDelivery) {
    //                 utils.navigateToRequestDeliveryPage(props.navigation);
    //             } else if (navigateFromPage === PAGES.orderHistory) {
    //                 utils.navigateToOrderHistoryPage(props.navigation)
    //             }
    //         }}
            
    //     />
    //         <View style={styles.beforeDeliveryContainer}>
    //             <Display />
    //             <View style={styles.content}>
    //             <Text style={styles.beforeDeliveryTitle}>
    //                 Your Delivery Request is being processed!..
    //             </Text>
              
    //             <View style={styles.imageContainer}>
    //             <Image source={images.onwait} style={styles.image} />
    //             </View>
             
    //             <Text style={styles.beforeDeliveryTitle}>
    //                 Connecting to a rider...
    //             </Text>
    //             </View>
    //             <View style={styles.buttonContainer}>
    //                 <TouchableOpacity 
    //                 style={styles.button1}
                   
    //                 >
    //                    <Text style={styles.buttonText}> Button1</Text>
    //                 </TouchableOpacity>

    //                 <TouchableOpacity 
    //                 style={styles.button2}
    //                 onPress={() => {
    //                     utils.navigateToDuringDeliveryPage(props.navigation, PAGES.beforeDelivery);
    //                   }}
    //                 >
    //                    <Text style={styles.buttonText}> Button2</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     </>
    // )







    const [isVisible, setIsVisible] = useState(true);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible((prevVisible) => !prevVisible);
      }, 500); // Toggle every 500 milliseconds
  
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []); // Empty dependency array ensures useEffect runs once on mount

    return (
        <View style={styles.container}>
      <AppBar
            title=' '
            safeAreaViewStyle={styles.beforeDeliveryAppBar}
            onPress={() => {
                const navigateFromPage = props?.route?.params?.returnTo;
                if (navigateFromPage) {
                    utils.navigateToRequestDeliveryPage(props.navigation);
                } else if (navigateFromPage === PAGES.orderHistory) {
                    utils.navigateToOrderHistoryPage(props.navigation)
                }
            }}
            
        />

        {
          loading ? 
              <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color={COLORS.khaki} />
            </View> :
            <View><Text style={styles.title}>Your Delivery is Ongoing!!</Text></View>
        }
          

            <Image
              source={images.onwait}
              style={styles.coverImage}
            />
         
    
          {/* Section with title, small title, and three contacts */}
          <View style={styles.contactSectionContainer}>
          <View style={styles.contactSection}>
            <Text style={styles.sectionTitle}>Delivery Request</Text>
           { loading ?
                <Text style={styles.smallTitle}>
                Your Delivery Request is being processed! {isVisible ? '...' : ''}
              </Text> :
               ''
           }
    
            {/* Three buttons with avatar, name, and description */}
            <View style={styles.contactContainer}>
              
              <TouchableOpacity 
              style={styles.contact}
              onPress={() => {
                utils.navigateToLiveTrackingPage(props.navigation);
               }}
              >
                <Image
                  source={images.tracking}
                  style={styles.avatar}
                />
                <Text style={styles.contactName}>Track</Text>
                <Text style={styles.contactDescription}>Make followup</Text>
              </TouchableOpacity>
    
            
              <TouchableOpacity 
                 style={styles.contact}
                 onPress={() => {
                    utils.navigateToDuringDeliveryPage(props.navigation, PAGES.beforeDelivery);
                 }}
                 >
                <Image
                  source={images.box}
                  style={styles.avatar}
                />
                <Text style={styles.contactName}>Details</Text>
                <Text style={styles.contactDescription}>Delivery Details</Text>
              </TouchableOpacity>
    
            
              <TouchableOpacity style={styles.contact}>
                <Image
                  source={images.cancel}
                  style={styles.avatar}
                />
                <Text style={styles.contactName}>Cancel</Text>
                <Text style={styles.contactDescription}>Cancel Request</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
    
          {/* Section with title "For You" and four cards */}
          {/* <View style={styles.forYouSection}>
            <Text style={styles.sectionTitle}>For You --&gt; </Text>
    
        
            <View style={styles.cardContainer}>
       
              <View style={styles.card}>
                <Image
                  source={images.onwait}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>Title of the Card</Text>
                <Text style={styles.cardDescription}>Description of the card</Text>
                <Text style={styles.cardTime}>Time Schedule</Text>
                <Text style={styles.cardPrice}>Price</Text>
              </View>
    
            
              <View style={styles.card}>
                <Image
                  source={images.onwait}
                  style={styles.cardImage}
                />
               <Text style={styles.cardTitle}>Title of the Card</Text>
                <Text style={styles.cardDescription}>Description of the card</Text>
                <Text style={styles.cardTime}>Time Schedule</Text>
                <Text style={styles.cardPrice}>Price</Text>
              </View>
    
            
              <View style={styles.card}>
                <Image
                  source={images.onwait}
                  style={styles.cardImage}
                />
                 <Text style={styles.cardTitle}>Title of the Card</Text>
                <Text style={styles.cardDescription}>Description of the card</Text>
                <Text style={styles.cardTime}>Time Schedule</Text>
                <Text style={styles.cardPrice}>Price</Text>
              </View>
    
   
              <View style={styles.card}>
                <Image
                  source={images.onwait}
                  style={styles.cardImage}
                />
               <Text style={styles.cardTitle}>Title of the Card</Text>
                <Text style={styles.cardDescription}>Description of the card</Text>
                <Text style={styles.cardTime}>Time Schedule</Text>
                <Text style={styles.cardPrice}>Price</Text>
              </View>
            </View>
          </View> */}
       
        </View>
      );















};

export default BeforeDelivery;