import * as React from 'react';
interface Props {
  name: string,
}
interface State {}
class UserNameClass extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
		  name: '',
		};
		// bind
		// this.XXX = this.XXX.bind(this)
	}

	// コンポーネントがrenderされた後に呼ばれる。APIからのデータ取得やDOMに対する処理をおこなう。
	componentDidMount() {
		
	}

	// PropsやStateが更新された時に呼ばれる。returnした内容で更新される
	static getDerivedStateFromProps(nextProps: Props, prevState: State) {

	}

	// PropsやStateが更新された時に呼ばれる。ループするのでsetStateはしないこと。loading後の画面遷移等で使う。
	componentDidUpdate(prevProps: Props, prevState: State) {

	}

	// コンポーネントが破棄される前に呼ばれる。データの消去などで使用
	componentWillUnmount(){

	}

  render() {
	  const {name} = this.props
    return (
      <div>
        {name}さん。こんにちは。
      </div>
    );
  }
};
export default UserNameClass;
