import SmoothPinCodeInput from 'react-native-smooth-pincode-input-v2';

import React, { useRef } from 'react';
import { View } from 'react-native-ui-lib';
interface Inputpin {
	pinCode: string;
	setPinCode: React.Dispatch<
		React.SetStateAction<string>
	>;
}

export const PinCodeInput = ({
	pinCode,
	setPinCode,
}: Inputpin) => {
	const pinInput = useRef<any | null>(null);
	return (
		<SmoothPinCodeInput
			ref={pinInput}
			placeholder={
				<View
					style={{
						width: 10,
						height: 10,
						borderRadius: 25,
						borderWidth: 1,
						borderColor: '#000000',
					}}></View>
			}
			cellSize={62}
			cellSpacing={24}
			value={pinCode}
			codeLength={4}
			onTextChange={(code: any) =>
				setPinCode(code)
			}
		/>
	);
};
