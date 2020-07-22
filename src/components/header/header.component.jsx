import React from 'react';
import {connect} from 'react-redux';

import PreviewGame from '../preview-game/preview-game.component';
import Game from '../game/game.component';

import {HeaderContainer} from './header.styles';


const Header = (props) => {

    const {isGameOn} = props;

    return ( 
        <HeaderContainer>
            {
                !isGameOn ? <PreviewGame/>  : <Game/>
            } 
        </HeaderContainer>
    );
}

const mapStateToProps = state => ({
    isGameOn: state.game.isGameOn
})

const mapDispatchToProps = dispatchEvent => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);