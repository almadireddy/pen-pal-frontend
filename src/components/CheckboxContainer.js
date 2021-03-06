import React from 'react';
import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <>
        {
          this.props.checkboxes.map(item => (
            <label key={item.key}>
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
              {item.name}
            </label>
          ))
        }
      </>
    );
  }
}

export default CheckboxContainer;