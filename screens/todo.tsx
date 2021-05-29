import { TodoHeader } from 'components/todos/TodoHeader'
import { TodoList } from 'components/todos/TodoList'
import NewTodo from 'components/todos/NewTodo'
import { View } from 'react-native'
import { tw } from 'tailwind'
import React from 'react'

export const Todo: React.VFC = () => {
	return (
		<View style={tw('p-12 flex-1 mb-16')}>
			<TodoHeader />
			<NewTodo />
			<TodoList />
		</View>
	)
}
