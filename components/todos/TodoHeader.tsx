import { Heading } from 'components/text/Heading'
import { Text } from 'components/text/Text'
import { View } from 'react-native'
import * as React from 'react'
import { tw } from 'tailwind'
import { Badge } from 'components/Badge'
import { todoStore } from './todo-store'

export const TodoHeader: React.VFC = () => {
	const todoCount = todoStore((s) => s.todoCount)

	console.log({ todoCount })

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
