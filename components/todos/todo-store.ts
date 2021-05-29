import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist } from 'zustand/middleware'
import create from 'zustand'

type Todo = { id: number; content: string }

type todoStoreProps = {
	todos: Todo[]
	addTodo: (content: Todo['content']) => void
	clearTodo: (todoId: Todo['id']) => void
	getId: () => number
	todoCount: () => number
}

export const todoStore = create<todoStoreProps>(
	persist(
		(set, get) => ({
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
			todoCount: () => get().todos.length,
		}),
		{ name: 'todos', getStorage: () => AsyncStorage, whitelist: ['todos'] }
	)
)
