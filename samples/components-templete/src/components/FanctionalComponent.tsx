import * as React from 'react';
interface Props {
  name: string,
}

const UserNameFC: React.FC<Props> = props => {
	const {name} = props
	const [firstName, setFirstName] = React.useState(true);
	return (
		<div>
        {name}さん。こんにちは。
      </div>
	)
}
export default UserNameFC;
