import * as React from 'react';
import * as enzyme from 'enzyme';
import Fetch  from './FetchTest';

it('test', () => {
    const square = enzyme.shallow(<Fetch />);
    square.find(Fetch).find('.fetch').simulate('click');
    expect(square.find('p').text()).toEqual(`id:x,firstName:b,lastName:bb`);
});