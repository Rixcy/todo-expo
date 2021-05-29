import { Text } from './text/Text'
import { tw } from '../tailwind'
import * as React from 'react'

export type ErrorMessageProps = {
	children: React.ReactNode
	show: boolean
}

export const ErrorMessage: React.VFC<ErrorMessageProps> = (props) => {
	const { show, children } = props
	return show ? <Text style={tw('mt-2 text-nord15')}>{children}</Text> : null
}
