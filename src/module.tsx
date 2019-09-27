import React, { PureComponent } from 'react';
import { ReactPanelPlugin, PanelOptionsGroup, PanelProps, PanelEditorProps, FormField } from '@grafana/ui';

export class MyPanel extends PureComponent<PanelProps<MyPanelOptions>> {
  render() {
    const { options } = this.props;
    return (
      <div className="center-vh">
        <h1 style={{ fontSize: '80px' }}>{options.bigText}</h1>
      </div>
    );
  }
}

interface MyPanelOptions {
  bigText: string;
}

export class MyPanelEditorProps extends PureComponent<PanelEditorProps<MyPanelOptions>> {
  onBigTextChanged = (evt: { target: { value: string } }) => {
    this.props.onChange({
      ...this.props.options,
      bigText: evt.target.value,
    });
  };

  render() {
    const { bigText } = this.props.options;

    return (
      <PanelOptionsGroup title="My options">
        <FormField label="Big text" onChange={this.onBigTextChanged} value={bigText} />
      </PanelOptionsGroup>
    );
  }
}

export const plugin = new ReactPanelPlugin<MyPanelOptions>(MyPanel);
plugin.setEditor(MyPanelEditorProps);
plugin.setDefaults({ bigText: 'Akash' });
