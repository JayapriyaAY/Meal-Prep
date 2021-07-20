import WorkList from '../assets/worklist.json'
import AvailablePlans from '../assets/availableplans.json'
import BiriyaniPlans from '../assets/biriyaniplans.json'
import ParrotaPlans from '../assets/parrotaplans.json'
import ShawarmaPlans from '../assets/shawarmaplans.json'
import router from '../router/index'
import firebase from 'firebase'
export const getWorkList = ({ commit }) => {
    const worklist = WorkList
    commit('SET_WORKLIST', worklist)
}

export const getAvailablePlans = ({ commit }) => {
    const plans = AvailablePlans
    commit('SET_PLANS', plans)
}

export const selectedPlan = ({commit}, plan) =>{
    console.log('you select',plan)
    commit('SET_SELECTEDPLAN',plan)
    if(plan == 'Biriyani') {
        const selplans = BiriyaniPlans
        commit('SET_SELPLANS',selplans)
    }
    else if( plan == 'Parotta') {
        const selplans = ParrotaPlans
        commit('SET_SELPLANS',selplans)
    }
    else {
        const selplans = ShawarmaPlans
        commit('SET_SELPLANS',selplans)
    }
 }

export const orderFoodPlan = ({commit} , food) => {
    commit('SET_ORDEREDFOOD' , food)
}
 
export const joinUser = ({ commit }, { email, password }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
        user => {
            commit('SET_USER', user);
            commit('SET_AUTHENTICATED', true);
            router.replace('/')
        },
        err => {
            alert(err)
        }
    )
}

export const signInUser = ({ commit }, { email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
        user => {
            commit('SET_USER', user);
            commit('SET_AUTHENTICATED', true);
            router.replace('About')
        },
        err => {
            alert(err)
        }
    )
}

export const Logout =({commit}) =>{
    firebase
    .auth()
    .signOut()
    .then(() => {
        commit('SET_USER', null);
        commit('SET_AUTHENTICATED', false);
        router.push('/');
    })
}