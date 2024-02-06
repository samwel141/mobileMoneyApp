import { COLORS } from '../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    /* Styles for component: Type */
    // deliveryType: {
    //     borderBottomWidth: 0,
    //     paddingBottom: 1
    // },
    // deliveryAddress: {
    //     paddingBottom: 10,
    //     borderBottomWidth: 1.5,
    //     borderBottomColor: '#DDE6ED'
    // },
    // deliveryReceiver: {
    //     marginTop: 10,
    //     paddingBottom: 10,
    //     borderBottomColor: '#DDE6ED'
    // },
    // deliveryDateTitle: {
    //     marginTop: 10,
    //     paddingBottom: 0,
    //     borderBottomColor: 'transparent'
    // },
    // deliveryDate: {
    //     marginTop: 5,
    //     paddingBottom: 10,
    //     borderBottomColor: '#DDE6ED'
    // },
    // deliveryDateText: {
    //     color: 'black'
    // },
    // deliveryCost: {
    //     marginTop: 15,
    //     borderBottomColor: 'transparent',
    //     borderBottomWidth: 0,
    //     paddingBottom: 3
    // },
    // deliveryCostTitle: {
    //     paddingBottom: 10,
    //     color: COLORS.brand,
    //     fontSize: DEVICE.fontScale * 18,
    //     fontWeight: '600'
    // },
    // deliveryCostAmount: {
    //     fontSize: DEVICE.fontScale * 18,
    //     fontWeight: '600'
    // },
    // deliveryEditButton: {
    //     width: '35%',
    //     backgroundColor: COLORS.grey,
    //     borderRadius: 8
    // },
    // deliveryRequestButton: {
    //     width: '60%',
    //     backgroundColor: 'green',
    //     borderRadius: 8
    // },
    // deliveryButtons: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '80%',
    //     marginTop: 10,
    //     marginBottom: 12,
    // },
    // deliveryRequestText: {
    //     color: 'white',
    //     fontWeight: '500'
    // },
   //  beforeDeliveryTitle: { 
      
   //      textAlign: 'center',
   //      fontSize: 20,
   //      marginBottom: 3,
   //      marginTop: 2,
   //      color: 'black',
   //      padding: 5,
   //      borderRadius: 9,
   //      backgroundColor: COLORS.khaki,
   //  },
   //  beforeDeliveryContainer: {
   //      width: '100%',
   //      alignItems: 'center',
   //      flex: 1,
   //      paddingTop: 0,
   //      marginBottom: 30,
   //  },
   //  beforeDeliveryAppBar: {
   //      marginTop: 10
   //  },

   //  content: {
   //    marginTop: 20,
   //    width: '80%',

   //   },
   //   imageContainer: {
   //      marginHorizontal: 'auto',
   //   },
   //   image: {
   //      height: 300,
   //      width: 300,
   //   },
   //   buttonContainer: {
   //     display: 'flex',
   //     flexDirection: 'row',
   //     justifyContent: 'space-between',
   //     marginTop:2,

   //   },
   //   button1: {
   //      margin: 5,
   //      backgroundColor: COLORS.brand,
   //      padding: 4,
   //      borderRadius: 8,
   //      width: '30%',
        
   //   },
   //   button2: {
   //      margin: 5,
   //      backgroundColor: COLORS.celadon,
   //      padding: 4,
   //      borderRadius: 8,
   //      width: '50%',
   //   },
   //   buttonText: {
   //      fontSize: 18,
   //      textAlign: 'center',
   //   }








    beforeDeliveryAppBar: {
        marginTop: 10
    },
    loadingOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
  
      borderRadius: 8, // Match your button's borderRadius
    },
    title: {
     color: COLORS.darkGrey,
     fontSize: 22,
     textAlign: 'center',
    },
   container: {
      flex: 1,
    },
 
    coverImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    contactSectionContainer:{
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'column',
      
    },
    contactSection: {
      padding: 16,
      backgroundColor: '#ffffff',
     borderRadius: 25,
    },
 

    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    smallTitle: {
      fontSize: 16,
      marginBottom: 16,
      color: COLORS.brand,
    },
 
    contactContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contact: {
      alignItems: 'center',
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 25,
      marginBottom: 8,
    },
    contactName: {
      fontWeight: 'bold',
    },
    contactDescription: {
      color: '#666',
    },
    forYouSection: {
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    card: {
      width: '48%',
      backgroundColor: COLORS.aliceBlue,
      marginBottom: 16,
      borderRadius: 8,
      overflow: 'hidden',
    },
    cardImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 8,
    },
    cardDescription: {
      color: '#666',
      marginHorizontal: 8,
    },
    cardTime: {
      color: '#333',
      margin: 8,
    },
    cardPrice: {
      color: '#27ae60',
      margin: 8,
    },









});

export default styles;
