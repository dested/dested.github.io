import glamorous from 'glamorous';
import * as React from 'react';
import {SwiperItem} from './swiper';

const SwiperDotHolder = glamorous.div({
  position: 'absolute',
  bottom: '0px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,.8)'
});

const SwiperDot = glamorous.div<{active: boolean}>(
  {
    borderRadius: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '10px',
    height: '10px',
    transition: 'background-color .5s'
  },
  p => ({
    backgroundColor: p.active ? '#fff' : '#858585'
  })
);

interface DotsProps {
  items: SwiperItem[];
  activeItem: SwiperItem;
  selectItem: (item: SwiperItem) => void;
}

export let SwiperDots: React.SFC<DotsProps> = props => {
  return (
    <SwiperDotHolder>
      {props.items.map(item => (
        <SwiperDot key={item.image} active={item === props.activeItem} onClick={() => props.selectItem(item)} />
      ))}
    </SwiperDotHolder>
  );
};
