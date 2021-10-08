import {

    TOP,
    BOTTOM,
    LEFT,
    RIGTH,
    TOP_LEFT,
    TOP_RIGTH,
    BOTTOM_LEFT,
    BOTTOM_RIGTH,
    CENTER,
    MARGIN_AUTO

} from './constants/styles'

const top = () => (
    {
        top : 0,
        left : 'calc(100%-width/2)'
    }
)

const bottom = () => (
    {
        bottom : 0,
        marginLeft : 'auto'
    }
)

const left = () => (
    {
        left : 0,
        marginTop : 'auto'
    }
)

const rigth = () => (
    {
        rigth : 0,
        marginTop : 'auto'
    }
)

const top_left = () => (
    {
        top : 0,
        left : 0
    }
)
const top_rigth = () => (
    {
        top : 0,
        rigth : 0
    }
)

const bottom_left = () => (
    {
        bottom : '100% - calc(height)',
        rigth : 0
    }
)
const bottom_rigth = () => (
    {
        bottom : '100% - calc(height)',
        rigth : 0
    }
)

const center = () => ({
    top : '50% - calc(width/2)',
    left : '50% - calc(height/2)'
})

const margin_auto = () => ({
    margin : 'auto'
})

const positions = {
    [TOP] : top(),
    [BOTTOM] : bottom(),
    [LEFT] : left(),
    [RIGTH] : rigth(),
    [TOP_LEFT] : top_left(),
    [TOP_RIGTH] : top_rigth(),
    [BOTTOM_LEFT] : bottom_left(),
    [BOTTOM_RIGTH] : bottom_rigth(),
    [CENTER] : center(),
    [MARGIN_AUTO] : margin_auto()
}

const getPositionByJson = type => ( positions[type] )

export const getTypePositionDefaultToCard = () => (
    {
        position : 'relative'
    }
)

export const getPosition = (type, position = 'relative') => (
    {
        position : position,
        ...getPositionByJson(type)
    }
)

export const getDefaultShadow = () => ('0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)')

export const getCookie = (name) => {

    var cookieValue = null
    
    if(document.cookie && document.cookie !== ''){

        const cookies = document.cookie.split(';')

        for(let i = 0; i < cookies.length; i++) {

            let cookie = cookies[i].trim()
            
            if(cookie.substring(0, name.length + 1) === (name + '=')){

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                
                break;
            }
        }
    }

    return cookieValue
}

export const logicReduceDefault = (fields, values) => (acumulated, obj) => {

    if(obj[fields.compare] === values.compare){
                      
        let new_obj = obj

        new_obj[fields.modify] = values.modify

        return [ ...acumulated, new_obj ]
    }
 
    return [ ...acumulated, obj ]
}

export const loadImgFromServer = (presentation) => {

    let image = new Image()
    
    image.src = presentation

    return image
}

export const getSizeImage = (presentation, width = null, loadImg = true) => {

    
   let image = loadImg ? loadImgFromServer(presentation) : presentation

    if(width){

        image.height = (image.height * width) / image.width
        //image.height -= image.height * 0.08

        image.width = width

    }

    
    return {
        width : image.width,
        height : image.height
    }
}

export const calculateSizeText = (width = 300, orientation) => {

    if(orientation === 'vertical' && width < 330)
        return '2em'
    else
        return '2.5em'
}

export const findData = (list_iter, compare_field, value_field, callback_field = null) => {

    const element = typeof list_iter !== 'string' && list_iter.find(item => ( item[compare_field] === value_field ))

    return element &&
            (callback_field && element[callback_field])
           | element
         

}