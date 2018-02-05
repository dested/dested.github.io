import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models/project';
import {Keywords} from './keywords';
import {Swiper} from '../../../components/swiper';
import {centerMargin} from '../../../utils/styleUtils';

const Holder = glamorous.div({
    display: 'flex',
    width: '300px',
    flexDirection: 'column',
    paddingTop: '10px',
    paddingBottom: '10px'
});

export let Toy: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <Holder>
            <ToyImage toy={toy}/>
            <ToyDescription toy={toy}/>
        </Holder>
    );
};

const ToyHolder = glamorous.div({
    width: '300px',
    backgroundColor: '#ccc'
});

class ToyImage extends React.Component<{ toy: IProject }, { selectedImage: { image: string }; images: { image: string }[] }> {
    constructor(props: { toy: IProject }) {
        super(props);
        const images = [
            {image: props.toy.image + '?1'},
            {image: props.toy.image + '?2'},
            {image: props.toy.image + '?3'},
            {image: props.toy.image + '?4'},
            {image: props.toy.image + '?5'},
            {image: props.toy.image + '?6'},
            {image: props.toy.image + '?7'}
        ];
        this.state = {
            images: images,
            selectedImage: images[0]
        };
    }

    render() {
        return (
            <ToyHolder>
                <Swiper
                    height={'calc(300px)'}
                    selectItem={image => this.setState(prev => ({...prev, selectedImage: image}))}
                    activeItem={this.state.selectedImage}
                    items={this.state.images}
                />
            </ToyHolder>
        );
    }
}

const DescriptionHolder = glamorous.div({
    flex: 1,
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    color: '#5D5D5D'
});

const KeywordHolder = glamorous.div({
    padding: '10px',
    ':before': {
        content: '""',
        width: '260px',
        position: 'absolute',
        ...centerMargin,
        borderTop: 'solid 1px #5D5D5D'
    }
});

const Title = glamorous.span({
    fontSize: '1.6em',
    textAlign: 'center'
});

const Description = glamorous.span({
    padding: '5px',
    flex: 1
});

const Github = glamorous.a({
    color: '#5d5d5d',
    textDecoration: 'none'
});

const Url = glamorous.a({
    color: '#5d5d5d',
    textDecoration: 'none'
});

export let ToyDescription: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <DescriptionHolder>
            <Title>{toy.title}</Title>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Url href={toy.url}>site</Url>
                <Github href={toy.github}>github</Github>
            </div>
            <Description dangerouslySetInnerHTML={{__html: toy.description}}/>
            <KeywordHolder>
                <Keywords keywords={toy.keywords}/>
            </KeywordHolder>
        </DescriptionHolder>
    );
};
