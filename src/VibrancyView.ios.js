import React, { Component, PropTypes } from 'react';
import { requireNativeComponent } from 'react-native';

class VibrancyView extends Component {
  render() {
    return (
      <NativeVibrancyView
        {...this.props}
        style={[{
          backgroundColor: 'transparent',
        }, this.props.style,
        ]}
      />
    );
  }
}

VibrancyView.propTypes = {
  blurType: PropTypes.string,
  blurAmount: PropTypes.number.isRequired,
};

VibrancyView.defaultProps = {
  blurAmount: 10,
};

const NativeVibrancyView = requireNativeComponent('VibrancyView', VibrancyView);

module.exports = VibrancyView;
