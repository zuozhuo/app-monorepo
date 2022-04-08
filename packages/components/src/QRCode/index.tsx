import React, { FC } from 'react';

import SvgQRCode, { QRCodeProps } from 'react-native-qrcode-svg';

const QRCode: FC<QRCodeProps> = ({ ...rest }) => <SvgQRCode {...rest} />;

export default QRCode;
