import { ActivityIndicator } from 'react-native';
import Colors from '../../themes/Colors';

import { ButtonContainer, ButtonTitle } from './styles';

export default function PrimaryButton({
	mode = 'contained',
	color = '',
	title = 'Click-me',
	loading = false,
	onPress
}) {
	return (
		<ButtonContainer disabled={loading} mode={mode} onPress={onPress} color={color}>
			{!loading && <ButtonTitle mode={mode}>{title}</ButtonTitle>}
			{loading && <ActivityIndicator color={Colors.white} size='small' />}
		</ButtonContainer>
	);
}
