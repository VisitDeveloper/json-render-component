import { createElement , cloneElement } from "react";
import {H1 , H2 , H3 , H4 , H5 , H6} from './pure-element/H/index';
import {Button , Div , Footer , Header , Li , P , Span , Ul , VerticalDots} from './pure-element/_index';




const KeysToComponentMap ={
    button : Button ,
    div : Div ,
    footer : Footer ,
    header : Header ,
    li : Li ,
    p : P ,
    span : Span ,
    ul : Ul ,
    verticalDots : VerticalDots,
    h1 : H1  ,
    h2 : H2 ,
    h3 : H3 ,
    h4 : H4 , 
    h5 : H5, 
    h6 : H6
}

const StylesMaps = (styles) =>{
    let mappedStyles = {};
    styles.forEach((style) => {
        mappedStyles[style.name] = style.value
    })
    return mappedStyles ;

}


export const renderComponent = (config) => {
    if(typeof KeysToComponentMap[config.component] !== 'undefined'){
        return createElement(
            KeysToComponentMap[config.component] , 
            {
                id : config.id,
                key : config.id,
                className : config.className ?  config.className : null  ,
                cursor : config.cursor ?  config.cursor : null,
                ariaHidden : config.ariaHidden ?  config.ariaHidden : null  ,
                style : config.styles ? StylesMaps(config.styles) : null 
            },
            config.children && 
            ( typeof config.children === 'string'
                ? config.children
                : config.children.map((c) => renderComponent(c))
            ) 
        )
    }
}