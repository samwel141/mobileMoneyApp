import {COLORS, DEVICE} from '../../../shared/utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.brand,
    paddingTop: 0.03 * DEVICE.height,
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '4%',
    width: '100%',
  },
  view2: {
    paddingTop: 20,
    height: DEVICE.height,
    backgroundColor: 'white',
    borderTopLeftRadius: 85,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
  title: {
    textAlign: 'center',
    fontSize: DEVICE.fontScale * 36,
    fontWeight: '400',
    color: COLORS.darkGrey,
    marginBottom: 0.04 * DEVICE.height,
  },
  view3: {
    backgroundColor: 'white',
    height: 0.25 * DEVICE.width,
    width: 0.25 * DEVICE.width,
    borderRadius: 15,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    height: 0.15 * DEVICE.width * 0.75,
    width: 0.15 * DEVICE.width * 0.75,
    backgroundColor: COLORS.darkGrey,
    borderRadius: 0.15 * DEVICE.width * 0.75 * 0.5,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListView: {
    height: DEVICE.height,
  },
});

export default styles;
