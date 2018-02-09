import * as React from 'react';
import * as enzyme from 'enzyme';
import { SquareBody } from './Square';

it('test', () => {
    const wrapper = enzyme.shallow(<SquareBody value="o"/>);
    expect(wrapper.text()).toEqual('o'); 
});