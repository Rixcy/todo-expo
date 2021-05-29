import { Text } from 'react-native'
import * as React from 'react'
import { tw } from 'tailwind'

export const TodoHeader: React.VFC = () => {
	return (
		<>
			<Text style={tw('text-nord4 text-3xl mb-4')}>Today's tasks</Text>
			<Text style={tw('text-nord9 mb-4')}>Open up App.tsx to start working on your app!</Text>
		</>
	)
}
