/* eslint-disable no-unreachable */
 
 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable no-unused-vars */
 
 
 


import AppBar from '../../shared/components/AppBar';
import utils from '../../shared/navigation/utils';
import React from 'react';

 const RequestDelivery = (props: any) => {


  return (
    <>
        <AppBar 
            title='Assistant'
            onPress={() => {
              utils.navigateToHomePage(props.navigation);
            }}
          
        />
          


  </>  

  );
          }  
 export default RequestDelivery;        












