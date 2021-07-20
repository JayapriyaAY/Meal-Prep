export const SET_WORKLIST = (state, worklist) => {
    state.worklist = worklist
}

export const SET_PLANS = (state, plans) => {
    state.plans = plans
}

export const SET_SELPLANS = (state , selplans ) => {
    state.selplans = selplans
}

export const SET_ORDEREDFOOD = (state , food) =>{
    let order = state.orderlist.find(item => {
      return item.id === food.id 
    })
    if(order) {
        return;
    }
    else {
        state.orderlist.push (food)

    }
}

export const SET_USER = (state, payload) => {
    state.user = payload;
}

export const SET_SELECTEDPLAN = (state , plan) =>{
    state.selectedplan = plan
}

export const SET_AUTHENTICATED = (state, payload) => {
    state.isAuthenticated = payload;
}