import { getSizeImage, getDefaultShadow } from "../helpers"

export const TOP = 'TOP'
export const BOTTOM = 'BOTTOM'
export const LEFT = 'LEFT'
export const RIGTH = 'RIGTH'

export const TOP_LEFT = 'TOP_LEFT'
export const TOP_RIGTH = 'TOP_LEFT'
export const BOTTOM_LEFT = 'TOP_LEFT'
export const BOTTOM_RIGTH = 'TOP_LEFT'

export const CENTER = 'CENTER'

export const MARGIN_AUTO = 'MARGIN_AUTO'

export const RED = '#e51f16'
export const RED_OSCURE = '#ad1d16f9'
export const GRAY_SERVICES = '#f5f4f0'
export const BLACK = 'black'
export const WHITE = 'white'

export const getStylesContainer = (presentation, orientation) => {

    let sizeImage = getSizeImage(presentation, null, false)
    
    let style = {}

    if(window.screen.width > 760){

        style = { 
            height : `${orientation === 'horizontal' ? sizeImage.height : sizeImage.height + 270}px`, 
            width : orientation === 'horizontal' ? 330 + sizeImage.width : sizeImage.width
        }
        
    }
    else{

        sizeImage = getSizeImage(presentation, window.screen.width * 0.9, false)
        
        style = { 
            height : `${sizeImage.height + 300}px`, 
            width : '100%' 
        }        

    }
    
    return style
}

export const getOrientation = presentation => {

    const sizeImage = getSizeImage(presentation, null, false)

    let orientation = null

    if(window.screen.width > 760)
        orientation = sizeImage.width <= sizeImage.height
            ? 'horizontal'
            : 'vertical'
    else
        orientation = 'vertical'
    
    return orientation

}

export const getMoviesCardLargeOption = (sizeImage, movie, orientation, dirCapCard = 'right') => ([
    {
        width : orientation === 'horizontal' ? '300px' : '100%',
        height : orientation === 'horizontal' ? '100%' : '240px',
        order : orientation === 'vertical' ? 4 : 1,
        top : orientation === 'vertical' ? `${sizeImage.height + 15}px` : '',
        force : 4,
        logoOptions : {
            top : orientation === 'vertical' ? sizeImage.height + 270 : 280,
            left :  250
        }
    },
    {
        width : orientation === 'horizontal' ? '300px' : '100%',
        height : orientation === 'horizontal' ? '100%' : '240px',
        order : 3,
        top : orientation === 'vertical' ? sizeImage.height - 10 : '',
        force : 3,
        left : orientation === 'horizontal' ? '25px' : ''
    },
    {   
        width : sizeImage.width,
        left : orientation === 'horizontal' ? 305 : '',
        order : orientation === 'vertical' ? 1 : 3,
        force : 1
    },
    {
        width : '300px',
        height : orientation === 'horizontal' ? '100%' : '97.25%',
        force : orientation === 'horizontal' ? 2 : 0,
        top : 1,
        left : (orientation === 'horizontal' && 25)
            || (orientation === 'vertical' && dirCapCard === 'left' && 0),
        right : orientation === 'vertical' && dirCapCard === 'right' && 0,
        order :  2
    }
])

export const getMoviesCardSmallOption = (sizeImage, orientation = 'vertical') => ([
    {
        width : '100%',
        height : `${sizeImage.height + 210}px`,
        order : 2,
        force : 1,
        top : 80,
        optionsLogo : {
            top : orientation === 'vertical' ? sizeImage.height + 270 : 280,
            left :  250
        }
    },
    {
        position : 'relative',
        width : '100%',
        height : `${sizeImage.height + 290}px`,
        order : 1,
        force : 1,
        top : 0,
    },
    {
        width : '90%',
        order : 3,
        force : 3,
        position : 'absolute',
        left : '5%',
        top : 130,
    },
    {
        top : 0,
        left : 1,
        width : '100%',
        height : `${sizeImage.height + 290}px`,
    }
])

const getHeaderFilledStyles = ({isMobile, isTablet, isPc}) => ({
    paused : true,
    fill : RED,
    shadow : getDefaultShadow()
})

const getHeaderNetflixStyles = ({isMobile, isTablet, isPc}) => ({

    hasShadow : false
})

const getHeaderBrandStyles = ({isMobile, isTablet, isPc}) => ({
    paused : true,
    style : {
        backgroundRepeat : 'no-repeat',
        backgroundSize : '100% auto'
    },
    shadow : getDefaultShadow()
})

export const header = {
    getHeaderNetflixStyles,
    getHeaderFilledStyles,
    getHeaderBrandStyles
}

export const CarouselOptions = {

    responsive : {
        mobile : {
            breakpoint: { max: 760, min: 0 },
            items: 1
        }
    },
    itemClass:'movie-item'
    /*dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1*/

}

export const cardFilledHoverValidate = () => {

    let isOpen = false

    if(window.screen.width > 760)
        isOpen = true

    return isOpen

}


export const cardCapOpenValidate =  (current) => {

    let isOpen = false

    if(window.screen.width > 760)
        isOpen = current 
            && (current.season && !current.hover) 
                ? true : false

    return isOpen
}

export const calculateDirCardCap = (target, movieContainerClass, cardCapClass) => {

    let movieContainer = target.closest(movieContainerClass)
    let cardCap = movieContainer.querySelector(cardCapClass)

    let clientRect = movieContainer.getBoundingClientRect()

    let widthScreen = window.screen.width

    let movieWidthOcupated = clientRect.x + clientRect.width

    return movieWidthOcupated + cardCap.clientWidth > widthScreen
        ? 'left'
        : 'right'
}