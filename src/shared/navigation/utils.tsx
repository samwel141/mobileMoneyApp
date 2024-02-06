import { PAGES } from "../../shared/utils/constants";

const utils = {
    navigateToRequestDeliveryPage: (navigation: any) => {
        navigation.navigate(PAGES.requestDelivery);
    },

    navigateToOrderHistoryPage: (navigation: any) => {
        navigation.navigate(PAGES.orderHistory);
    },

    navigateToDeliverySummaryPage: (navigation: any, fromPage: string) => {
        navigation.navigate(PAGES.deliverySummary, {
            returnTo: fromPage
        });
    },

    navigateToBeforeDeliveryPage: (navigation: any, fromPage: string) => {
        navigation.navigate(PAGES.beforeDelivery, {
            returnTo: fromPage
        });
    },

    navigateToDuringDeliveryPage: (navigation: any, fromPage: string) => {
        navigation.navigate(PAGES.duringDelivery, {
            returnTo: fromPage
        });
    },

    navigateToQrCodePage: (navigation: any) => {
        navigation.navigate(PAGES.qrCode);
    },

    navigateToHomePage: (navigation: any) => {
        navigation.navigate(PAGES.home);
    },

    navigateToLiveTrackingPage: (navigation: any) => {
        navigation.navigate(PAGES.liveTracking);
    },

    navigateToMenuPage: (navigation: any) => {
        navigation.navigate(PAGES.menu);
    },

    navigateToPersonalDetailsPage: (navigation: any) => {
        navigation.navigate(PAGES.personalDetails);
    },

    navigateToSettingsPage: (navigation: any) => {
        navigation.navigate(PAGES.settings);
    },

    navigateToLegalPage: (navigation: any) => {
        navigation.navigate(PAGES.legal);
    },

    navigateFaqsPage: (navigation: any) => {
        navigation.navigate(PAGES.faqs);
    },
};

export default utils;