import * as React from 'react'
import { Text as RNText, TextProps } from 'react-native'

export const Text: React.FC<TextProps> = (props) => {
	const { children, style, ...restProps } = props
	return (
		<RNText style={[{ fontFamily: 'Inter_400Regular' }, style]} {...restProps}>
			{children}
		</RNText>
	)
}
