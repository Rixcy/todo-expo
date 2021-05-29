import { FlatList, Keyboard, Text, TouchableHighlight, View } from 'react-native'
import { todoStore } from './todo-store'
import * as React from 'react'
import { tw } from 'tailwind'
import clsx from 'clsx'

export const TodoList: React.VFC = () => {
	const todos = todoStore((s) => s.todos)
	const clearTodo = todoStore((s) => s.clearTodo)

	return (
		<View style={tw('mt-4 h-full')}>
			{todos.length > 0 && (
				<FlatList
					onTouchStart={() => Keyboard.dismiss()}
					style={tw('mb-8')}
					data={todos}
					keyExtractor={(t) => t.id.toString()}
					keyboardShouldPersistTaps="always"
					renderItem={({ item }) => (
						<View
							style={tw(
								'bg-nord2 px-4 py-2 rounded-lg mb-4 flex flex-row items-center justify-between'
							)}
						>
							<Text style={tw('text-nord4')}>{item.content}</Text>
							<TouchableHighlight
								underlayColor="#434C5E"
								style={tw(
									clsx(
										'relative border border-transparent border-l-0 items-center text-nord4 px-2.5 text-sm font-medium rounded-full bg-nord3 justify-center'
									)
								)}
								onPress={() => clearTodo(item.id)}
							>
								<Text style={tw('text-xl text-nord4')}>-</Text>
							</TouchableHighlight>
						</View>
					)}
				/>
			)}
		</View>
	)
}
