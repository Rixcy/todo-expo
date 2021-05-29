import { View } from 'react-native'
import { Text } from './text/Text'
import * as React from 'react'
import { tw } from 'tailwind'

type BadgeProps = {
	count: number
}

export const Badge: React.VFC<BadgeProps> = ({ count }) => {
	return (
		<View style={tw('rounded-full w-7 h-7 flex items-center justify-center bg-nord9')}>
			<Text style={tw('text-nord0')}>{count}</Text>
		</View>
	)
}
