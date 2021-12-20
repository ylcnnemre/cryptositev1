const initialState={
    isim : "emre",
    soyisim : "yalçın",
    data:[]
}

const Reducer=(state=initialState,action)=>{

    switch (action.type) {
        case "as":
            return {
                ...state,data:action.payload
            }
    
        default:
            return state
    }
}

export default Reducer