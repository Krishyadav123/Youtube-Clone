export const API_KEY = 'AIzaSyC5T11CV8XsfwKKLc94_LVPS78w6QZnvb4';

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+'M'
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+'K'
    }
    else{
        return value;
    }
}