import { COLORS } from '../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
// */
// const styles = StyleSheet.create({
  
//     beforeDeliveryTitle: { 
      
//         textAlign: 'center',
//         fontSize: 20,
//         marginBottom: 3,
//         marginTop: 2,
//         color: 'black',
//         padding: 5,
//         borderRadius: 9,
//         backgroundColor: COLORS.khaki,
//     },
//     beforeDeliveryContainer: {
//         width: '100%',
//         alignItems: 'center',
//         flex: 1,
//         paddingTop: 0,
//         marginBottom: 30,
//     },
//     beforeDeliveryAppBar: {
//         marginTop: 10
//     },

//     content: {
//       marginTop: 20,
//       width: '80%',

//      },
//      imageContainer: {
//         marginHorizontal: 'auto',
//      },
//      image: {
//         height: 300,
//         width: 300,
//      },
//      buttonContainer: {
//        display: 'flex',
//        flexDirection: 'row',
//        justifyContent: 'space-between',
//        marginTop:2,

//      },
//      button1: {
//         margin: 5,
//         backgroundColor: COLORS.brand,
//         padding: 4,
//         borderRadius: 8,
//         width: '30%',
        
//      },
//      button2: {
//         margin: 5,
//         backgroundColor: COLORS.celadon,
//         padding: 4,
//         borderRadius: 8,
//         width: '50%',
//      },
//      buttonText: {
//         fontSize: 18,
//         textAlign: 'center',
//      }

// });

// export default styles;


const styles = StyleSheet.create({
   container: {
     flex: 2,
   },
   map: {
      flex: 1,
   },
   bottom: {
      flex: 1,
   },
   beforeDeliveryAppBar: {
               marginTop: 10
          },
   topView: {
     borderTopLeftRadius: 30,
     borderTopRightRadius: 30,
     marginTop: -12,
     backgroundColor: 'white',
     position: 'relative',
     flex: 1,
   },
   cancelButton: {
     position: 'absolute',
     right: 16,
     top: 16,
   },
   infoContainer: {
     flexDirection: 'column',
     justifyContent: 'space-between',
     paddingHorizontal: 16,
     paddingTop: 24,
   },
   infoText: {
     fontSize: 16,
     color: '#606060',
     fontWeight: 'bold',
   },
   arrivalTime: {
     fontSize: 30,
     fontWeight: 'bold',
     color: '#606060',
   },
   arrivalInfo: {
     marginTop: 8,
     fontSize: 16,
     color: '#606060',
     fontWeight: 'bold',
   },
   riderInfoContainer: {
     backgroundColor: COLORS.primaryGrey,
     padding: 16,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     borderRadius: 20,
     marginVertical: 10,
     marginHorizontal: 16,
   },

   riderInfoContainer2: {
      backgroundColor: COLORS.thistle,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 20,
      marginVertical: 10,
      marginHorizontal: 16,
    },

   riderImageContainer: {
     backgroundColor: COLORS.khaki,
     padding: 8,
     borderRadius: 50,
   },
   riderImage: {
     width: 50,
     height: 50,
     borderRadius: 40,
     backgroundColor: COLORS.teaGreen,
   },
   riderDetailsContainer: {
     flex: 1,
     marginLeft: 16,
   },
   riderName: {
     fontSize: 18,
     fontWeight: 'bold',
     color: 'white',
   },
   riderRole: {
     fontSize: 16,
     fontWeight: 'bold',
     color: 'white',
   },
   actionButtonsContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginRight: 16,
   },
   phoneButton: {
     backgroundColor: 'white',
     padding: 8,
     borderRadius: 20,
   },
   cancelButtonIcon: {
     color: 'red',
     strokeWidth: 5,
   },

   buttonContainer: {
             display: 'flex',
             flexDirection: 'row',
             justifyContent: 'space-between',
             marginTop:2,
             width: '80%',
           
      
           },
           button1: {
              margin: 5,
              backgroundColor: COLORS.brand,
              padding: 4,
              borderRadius: 8,
              width: '30%',
              
           },
           button2: {
              margin: 5,
              backgroundColor: COLORS.celadon,
              padding: 4,
              borderRadius: 8,
              width: '100%',
           },
           buttonText: {
              fontSize: 18,
              textAlign: 'center',
           },
           trackButton: {
           position: 'absolute',
           right: 20,
           top: 6,
           },

           promoContainer: {
            backgroundColor: COLORS.celadon,
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 20,
            marginVertical: 10,
            marginHorizontal: 16,
          },
          promoText: {
            color: COLORS.brand,
            fontSize: 15,
          }
 });
 
 export default styles;