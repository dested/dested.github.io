import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models/project';
import {Keywords} from './keywords';
import {Swiper} from '../../../components/swiper';

const Holder = glamorous.div({
    width: '100%',
    height: '300px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
    paddingBottom: '10px'
});

export let ToyLeft: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <Holder>
            <Toy toy={toy}/>
            <ToyDescription toy={toy}/>
        </Holder>
    );
};
export let ToyRight: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <Holder>
            <ToyDescription toy={toy}/>
            <Toy toy={toy}/>
        </Holder>
    );
};

const ToyHolder = glamorous.div({
    width: '600px',
    backgroundColor: '#ccc'
});

class Toy extends React.Component<{ toy: IProject }, { selectedImage: { image: string }; images: { image: string }[] }> {
    constructor(props: { toy: IProject }) {
        super(props);
        const images = [
            {image: props.toy.image},
            {image: props.toy.image},
            {image: props.toy.image},
            {image: props.toy.image},
            {image: props.toy.image},
            {image: props.toy.image},
            {image: props.toy.image}
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
                    height={'calc(300px - 20px)'}
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
    justifySelf: 'right',
    padding: '10px'
});

const Title = glamorous.span({fontSize: '2em'});

const Description = glamorous.span({
    padding: '5px'
});

const Github = glamorous.a({
    color: '#ccc',
    textDecoration: 'none'
});

const Url = glamorous.a({
    color: '#ccc',
    textDecoration: 'none'
});

export let ToyDescription: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <DescriptionHolder>
            <Title>{toy.title}</Title>
            <Description
                dangerouslySetInnerHTML={{
                    __html:
                    toy.description +
                    toy.description +
                    toy.description +
                    toy.description +
                    toy.description +
                    toy.description +
                    toy.description
                }}
            />
            <Url href={toy.url}>site</Url>
            <Github href={toy.github}>github</Github>
            <KeywordHolder>
                <Keywords keywords={toy.keywords}/>
            </KeywordHolder>
        </DescriptionHolder>
    );
};
