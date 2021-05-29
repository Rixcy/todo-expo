import React from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import { tw } from 'tailwind'
import NewTodo, { todoStore } from 'components/NewTodo'
import clsx from 'clsx'

export const Todo: React.VFC = () => {
	const todos = todoStore((s) => s.todos)
	const clearTodo = todoStore((s) => s.clearTodo)
	return (
		<View style={tw('p-12 flex-1 mb-16')}>
			<Text style={tw('text-nord4 text-3xl mb-4')}>Today's tasks</Text>
			<Text style={tw('text-nord9 mb-4')}>Open up App.tsx to start working on your app!</Text>
			<NewTodo />
			<View style={tw('mt-4 h-full')}>
				{todos.length > 0 && (
					<FlatList
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
		</View>
	)
}
