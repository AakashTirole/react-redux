export const handleSetName = (name) =>{
    return(dispatch)=>{
        dispatch({
            type : "SETENAME",
            payload : name
        })
    }
}
export const handleSetNumber = (number) =>{
    return(dispatch)=>{
        dispatch({
            type : "SETENUMBER",
            payload : number
        })
    }
}
export const handleSetEmail = (email) =>{
    return(dispatch)=>{
        dispatch({
            type : "SETEMAIL",
            payload : email
        })
    }
}
export const handleSetPassword = (password) =>{
    return(dispatch)=>{
        dispatch({
            type : "SETEPASWWORD",
            payload : password
        })
    }
}