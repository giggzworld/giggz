import {
	Header,
	NotificationSettingsComp,
} from '@src/components';
import React from 'react';
import { View } from 'react-native-ui-lib';

const general = [
	{
		title: 'Recieve push Notification',
		value: false,
	},
	{
		title: 'Play Sound',
		value: false,
	},
];
const NotifyMe = [
	{
		title: 'A gigg starts',
		value: false,
	},
	{
		title: 'A gig is expiring soon',
		value: false,
	},
	{
		title: 'A gig has expired',
		value: false,
	},
];
const Others = [
	{
		title: 'Recommendation',
		value: false,
	},
];

export const NotificationSettings = () => {
	return (
		<View>
			<Header noBgColor title="Notifications" />
			<View paddingH-16>
				<NotificationSettingsComp
					header="General"
					data={general}
				/>
				<NotificationSettingsComp
					header="Notify me when"
					data={NotifyMe}
				/>
				<NotificationSettingsComp
					header="Others"
					data={Others}
				/>
			</View>
		</View>
	);
};
