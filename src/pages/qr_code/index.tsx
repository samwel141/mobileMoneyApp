import React, {useState} from 'react'

import QrCode from './components/QrCode';
import Scanner from './components/Scanner';

const QRCode = (props: any) => {
    const [scanner, setScanner] = useState(false);
  return (
    <>
        {
            scanner ? 
                <Scanner
                    onPressButtonCloseScanner={() => { setScanner(false) }}
                />
            :
                <QrCode
                    onPressButtonOpenScanner={() => { setScanner(true) }}
                    navigation={props.navigation}
                />
        }
    </>
  )
};

export default QRCode;