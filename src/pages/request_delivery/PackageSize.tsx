import React, {useState} from 'react';

import Card from './components/Card';
import CustomText from '../../shared/components/Text';
import { View } from 'react-native'
import styles from './styles';

const PackageSize = () => {
    const [small, selectSizeSmall] = useState(false);
    const [medium, selectSizeMedium] = useState(false);
    const [large, selectSizeLarge] = useState(false);
    const [extraLarge, selectSizeExtraLarge] = useState(false);

    const selectPackageSize = (size: string): void => {
        // Set all states to false initially then change as neeeded:
        selectSizeSmall(false);
        selectSizeMedium(false);
        selectSizeLarge(false);
        selectSizeExtraLarge(false);
        switch (size) {
            case 'Small':
                selectSizeSmall(true);
                break;
            case 'Medium':
                selectSizeMedium(true);
                break;
            case 'Large':
                selectSizeLarge(true);
                break;
            default:
                selectSizeExtraLarge(true);
                break;
        }
    }
    return (
        <View style={styles.packageSizeContainerView}>
            <CustomText style={styles.componentTitleText}>Package size</CustomText>
            <View style={styles.packageSizeCardView}>
                <View >
                    
                    <Card 
                        size='Small'
                        onPress={() => {selectPackageSize('Small')}}
                        selectSize={small}
                    />
                    <Card 
                        size='Medium' 
                        onPress={() => {selectPackageSize('Medium')}}
                        selectSize={medium}
                    />
                </View>
                <View >
                    <Card 
                        size='Large'
                        onPress={() => {selectPackageSize('Large')}}
                        selectSize={large}
                    />
                    <Card
                        size='Extra large'
                        onPress={() => {selectPackageSize('Extra Large')}}
                        selectSize={extraLarge}
                    />
                </View>
            </View>

        </View>
    )
}

export default PackageSize;