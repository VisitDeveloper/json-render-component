export const headerConfig = {
    component : 'div',
    id:'header-div' ,
    className :'w-100 bg-black p-10',
    children :[
        {
            component:'div',
            className : 'text-white',
            styles :[
               {
                name :'fontsize',
                value :'20px'
               } ,
               {
                name : 'fontWeight',
                value :'bold'
               }
            ],
            children : [
                {

                    component:'verticalDots',
                    className : 'text-white',
                    cursor : 'pointer'
                }
            ]
        }
    ]
}