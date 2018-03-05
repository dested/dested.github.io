import * as React from 'react';
import glamorous from 'glamorous';
import {IToy} from '../../../models';
import {Keywords} from './keywords';
import {Swiper} from '../../../components/swiper';
import {media} from '../../../utils/styleUtils';
import {Store} from '../../../reducers';
import {connect} from 'react-redux';

const Holder = glamorous.div<{isSelected: boolean}>(
    {
        display: 'flex',
        width: '95%',
        flexDirection: 'column',
        paddingTop: '10px',
        paddingBottom: '10px',
        transition: 'opacity .5s',
        [media.phone]: {
            width: '100%'
        }
    },
    ({isSelected}) => ({
        opacity: isSelected ? 1 : 0.3
    })
);

interface ToyProps {
    toy: IToy;
    selectedKeyword: string | null;
}

let _Toy: React.SFC<ToyProps> = ({toy, selectedKeyword}) => {
    return (
        <Holder isSelected={selectedKeyword === null || toy.keywords.indexOf(selectedKeyword) >= 0}>
            <ToyImage toy={toy} />
            <ToyDescription toy={toy} />
        </Holder>
    );
};

export let Toy = connect((state: Store) => {
    return {
        selectedKeyword: state.pageState.selectedKeyword
    };
})(_Toy);

const ToyHolder = glamorous.div({
    width: '100%',
    backgroundColor: '#ccc'
});

class ToyImage extends React.Component<{toy: IToy}, {selectedImage: {image: string}; images: {image: string}[]}> {
    constructor(props: {toy: IToy}) {
        super(props);
        const images = props.toy.images.map(a => ({image: a}));
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
    color: '#5D5D5D',
    fontSize: '1.2em'
});

const KeywordHolder = glamorous.div({
    margin: '10px',
    marginBottom: 0
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
    color: '#5d5d5d'
});

const Url = glamorous.a({
    color: '#5d5d5d'
});

interface Props {
    toy: IToy;
}

export let ToyDescription: React.SFC<Props> = ({toy}) => {
    return (
        <DescriptionHolder>
            <Title>{toy.title}</Title>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Url href={toy.url}>site</Url>
                <Github href={toy.github}>github</Github>
            </div>
            <Description dangerouslySetInnerHTML={{__html: toy.description}} />
            <KeywordHolder>
                <Keywords keywords={toy.keywords} />
            </KeywordHolder>
        </DescriptionHolder>
    );
};
