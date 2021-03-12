export const addLink = (myobject) => {
    return {
        type: 'ADD',
        myObject: myobject
    }
}
export const deleteItem = (name) => {
    return{
       type: 'DELETE',
       name: name
    }
 }

export const updadeItem = (name, value) => {
    return{
       type: 'UPDATE',
       name: name,
       value: value
       
    }
 }

 export const orderItem = (index) => {
    return{
       type: 'ORDER',
       index: index
       
    }
 } 
