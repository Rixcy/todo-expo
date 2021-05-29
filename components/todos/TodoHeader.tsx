import { Heading } from '../text/Heading'
import { todoStore } from './todo-store'
import { Text } from '../text/Text'
import { tw } from '../../tailwind'
import { View } from 'react-native'
import { Badge } from '../Badge'
import * as React from 'react'

export const TodoHeader: React.VFC = () => {
	const todoCount = todoStore((s) => s.todoCount)

	return (
		<>
			<View style={tw('flex flex-row justify-between items-center')}>
				<Heading>Today's tasks</Heading>
				<Badge count={todoCount} />
			</View>
			<Text style={tw('text-nord9 mb-4')}>Add some todos!</Text>
		</>
	)
}
