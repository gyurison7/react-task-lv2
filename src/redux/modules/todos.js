const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
}

export const updateTodo = (payload) => {
    return { type: UPDATE_TODO, payload }
}

const initialState = {
    todos: [
        {
            id: 1,
            title: '리액트',
            body: '리액트 공부하기',
            status: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case UPDATE_TODO:
            return {
                ...state, todos: state.todos.map((item) =>
                    item.id === action.payload ? { ...item, status: (item.status ? false : true) } : item)
            }
        default:
            return state
    }
}

export default todos