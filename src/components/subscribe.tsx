import React from 'react';
import {Observe} from './list';

function subscription(WrappedComponent: any) {
  return class extends React.Component {
    state = {
      value: ''
    }
    unsubscribe: Function = () => {}

    componentDidMount() {
      console.log(Observe)
      const props: any = this.props
      this.unsubscribe = Observe.subscribe(() => {
        return {
          key: props.itemKey,
          value: this.state.value
        }
      })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    changeValue(e: Event) {
      const target: any = e.target
      const value = target.value
      this.setState({
        value: value
      })
    }

    render () {
      return <WrappedComponent onChange={this.changeValue.bind(this)} value={this.state.value} />
    }
  }
}

export default subscription