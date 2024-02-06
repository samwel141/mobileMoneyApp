import { Image, Text, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useRef } from 'react'

import { CUSTOM_MAP_STYLE } from '../../utils/constants';
import MapViewDirections from 'react-native-maps-directions';
import images from '../../utils/images';
import styles from './styles';

const Display = () => {
    const mapRef = useRef(null);
    return (
        <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.displayMapView}
            mapType='standard'
            showsBuildings={!false}
            showsPointsOfInterest={false}
            removeClippedSubviews
            customMapStyle={CUSTOM_MAP_STYLE}
            zoomEnabled={true}
            showsCompass={false}
            followsUserLocation
            onMapReady={() => {
                console.log('Ready')
            }}
            onLayout={() => {
                mapRef.current.fitToCoordinates([{ latitude: -6.88334, longitude: 39.15823 }, { latitude: -6.82701, longitude: 39.2589 }], {
                    edgePadding: {
                        top: 75,
                        right: 75,
                        bottom: 75,
                        left: 75,
                    }, animated: true
                })
            }}
        >
            <Marker.Animated
                key={1}
                coordinate={{ latitude: -6.88334, longitude: 39.15823 }}
                draggable={true}
                onDragEnd={(location) => { console.log(location.nativeEvent.coordinate, location.nativeEvent.position ) }}
                style={styles.displayMarker}
            >
                <View style={styles.displayMarkerView}>
                    <Image
                        source={images.sieg}
                        style={styles.displayMarkerUserImage}
                    />
                </View>
                <Callout
                    style={styles.displayCallout}
                >
                    <Text style={styles.displayCalloutText} numberOfLines={4}>5590 Farmwood Dr, New Albany, Ohio</Text>
                </Callout>
            </Marker.Animated>
            <Marker.Animated
                key={2}
                coordinate={{ latitude: -6.82701, longitude: 39.2589 }}
                draggable={true}
                onDragEnd={(location) => { console.log(location.nativeEvent.coordinate, location.nativeEvent.position) }}
                style={styles.displayMarker}
            >
                <View style={styles.displayMarkerView}>
                    <Image
                        source={images.box}
                        style={styles.displayMarkerImage}
                    />
                </View>
                <Callout
                    style={styles.displayCallout}
                >
                    <Text style={styles.displayCalloutText} numberOfLines={4}>5590 Farmwood Dr, New Albany, Ohio</Text>
                </Callout>
            </Marker.Animated>
            <MapViewDirections
                origin={{ latitude: -6.88334, longitude: 39.15823 }}
                destination={{ latitude: -6.82701, longitude: 39.2589 }}
                apikey=''
                strokeWidth={5}
                strokeColor="grey"
            />
        </MapView>
    )
}

export default Display