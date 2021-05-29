import React, { useState } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { tw } from 'tailwind'
import clsx from 'clsx'
import create from 'zustand'

type Todo = { id: number; content: string }

type todoStoreProps = {
	todos: Todo[]
	addTodo: (content: Todo['content']) => void
	clearTodo: (todoId: Todo['id']) => void
	getId: () => number
}

export const todoStore = create<todoStoreProps>((set, get) => ({
	todos: [],
	addTodo: (content) => {
		set({ todos: [{ id: get().getId(), content }, ...get().todos] })
	},
	clearTodo: (todoId) => {
		const todos = get().todos
		const filteredTodos = todos.filter((todo) => todo.id !== todoId)
		set({ todos: filteredTodos })
	},
	getId: () => {
		const id = get().todos.length + 1
		return id
	},
}))

export default function NewTodo() {
	const {
		control,
		handleSubmit,
		trigger,
		reset,
		formState: { errors },
	} = useForm<{ todo: string }>()

	const addTodo = todoStore((s) => s.addTodo)

	const onSubmit = handleSubmit((data) => {
		addTodo(data.todo)
		reset()
	})

	const [isFocused, setIsFocused] = useState(false)

	return (
		<View>
			<View style={tw('flex flex-row w-full')}>
				<View style={tw('flex-1')}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								onFocus={() => setIsFocused(true)}
								onBlur={() => {
									setIsFocused(false)
									onBlur()
								}}
								style={tw(
									clsx(
										'bg-nord3 px-2 border border-transparent border-r-0 rounded-l-md py-2 px-3 text-nord4 text-lg w-full flex-1 leading-6',
										{ 'border-nord4': isFocused, 'border-nord15': errors.todo }
									)
								)}
								onChangeText={(value) => onChange(value)}
								onSubmitEditing={async () => {
									const passedValidation = await trigger('todo')
									if (passedValidation) {
										addTodo(value)
										reset()
									}
								}}
								blurOnSubmit={false}
								value={value}
							/>
						)}
						name="todo"
						rules={{ required: true }}
						defaultValue=""
					/>
				</View>

				<TouchableHighlight
					underlayColor="#434C5E"
					style={tw(
						clsx(
							'relative border border-transparent border-l-0 items-center text-nord4 px-4 py-2 text-lg font-medium rounded-r-md bg-nord3',
							{ 'border-nord4': isFocused, 'border-nord15': errors.todo }
						)
					)}
					onPress={onSubmit}
				>
					<Text style={tw('text-xl text-nord4')}>+</Text>
				</TouchableHighlight>
			</View>
			{errors.todo && <Text style={tw('mt-2 text-nord15')}>This is required.</Text>}
		</View>
	)
}
