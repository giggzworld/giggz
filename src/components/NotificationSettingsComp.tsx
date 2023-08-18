import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';
import { SwitchComp } from './Switch';
interface DataProps {
	title: string;
	value: boolean;
}
interface Props {
	data?: DataProps[];
	header: string;
}

export const NotificationSettingsComp = ({
	data,
	header,
}: Props) => {
	const [notInfo, setNotInfo] = useState(data);
	const handleOnChange = (id: string) => {
		return setNotInfo((prevState) =>
			prevState?.map((prev) =>
				prev.title === id
					? {
							...prev,
							value: !prev.value,
					  }
					: prev
			)
		);
	};
	return (
		<View marginT-16>
			<Text sm color={Colors.gray8}>
				{header}
			</Text>
			{notInfo?.map((item, index) => (
				<SwitchComp
					key={index}
					title={item.title}
					value={item.value}
					handleChange={() =>
						handleOnChange(item.title)
					}
				/>
			))}
		</View>
	);
};

export default NotificationSettingsComp;
