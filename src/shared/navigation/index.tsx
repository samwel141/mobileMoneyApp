import DeliverySummary from '../../pages/delivery_summary';
import FAQs from '../../pages/menu/sub_components/FAQs';
import Home from '../../pages/home';
import Legal from '../../pages/menu/sub_components/Legal';
import LiveTracking from '../components/Map/Tracking';
import Login from '../../pages/auth/login';
import Menu from '../../pages/menu';
import { NavigationContainer } from '@react-navigation/native';
import OrderHistory from '../../pages/order_history';
import { PAGES } from '../utils/constants';
import PersonalDetails from '../../pages/menu/sub_components/PersonalDetails';
import QRCode from '../../pages/qr_code';
import React from 'react';
import RequestDelivery from '../../pages/request_delivery';
import BeforeDelivery from '../../pages/before_delivery';
import DuringDelivery from '../../pages/during_delivery';
import Scanner from '../../pages/qr_code/components/Scanner';
import Settings from '../../pages/menu/sub_components/Settings';
import SignUp from '../../pages/auth/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Navigation() {
    const show = false;
    return (
        <NavigationContainer >

            {
                show ?
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={PAGES.login}  component={Login}/>
                        <Stack.Screen name={PAGES.signup} component={SignUp} />
                    </Stack.Navigator>
                    :
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={PAGES.home} component={Home} />
                        <Stack.Screen name={PAGES.orderHistory} component={OrderHistory} />
                        <Stack.Screen name={PAGES.qrCode} component={QRCode} />
                        <Stack.Screen name={PAGES.liveTracking} component={LiveTracking} />
                        <Stack.Screen name={PAGES.scanner} component={Scanner} />
                        <Stack.Screen name={PAGES.menu} component={Menu} />
                        <Stack.Screen name={PAGES.requestDelivery} component={RequestDelivery} />
                        <Stack.Screen name={PAGES.deliverySummary} component={DeliverySummary} />
                        <Stack.Screen name={PAGES.beforeDelivery} component={BeforeDelivery} />
                        <Stack.Screen name={PAGES.duringDelivery} component={DuringDelivery} />
                        <Stack.Screen name={PAGES.personalDetails} component={PersonalDetails} />
                        <Stack.Screen name={PAGES.settings} component={Settings} />
                        <Stack.Screen name={PAGES.legal} component={Legal} />
                        <Stack.Screen name={PAGES.faqs} component={FAQs} />
                    </Stack.Navigator>
                        
            }
        </NavigationContainer>
    )
};