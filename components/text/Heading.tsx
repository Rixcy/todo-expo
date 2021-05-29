import * as React from 'react'
import { Text, TextProps } from 'react-native'
import { tw } from 'tailwind'
import { inter400, inter700, inter800, inter900 } from './Text'

type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps = TextProps & {
	children: React.ReactNode
	size?: HeadingSize
}

export const Heading: React.VFC<HeadingProps> = (props) => {
	const { size = 'h1', children, style, ...restProps } = props

	let internalStyle = inter900
	let twClasses = 'text-3xl mb-4'

	if (size === 'h2') {
		internalStyle = inter800
		twClasses = 'text-2xl mb-3'
	}

	if (size === 'h3') {
		internalStyle = inter700
		twClasses = 'text-xl mb-2'
	}

	if (size === 'h4') {
		internalStyle = inter400
		twClasses = 'text-lg mb-1'
	}

	return (
		<Text style={[tw(twClasses), tw('text-nord4'), internalStyle, style]} {...restProps}>
			{children}
		</Text>
	)
}
