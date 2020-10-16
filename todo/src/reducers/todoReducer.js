export const todoReducer = (state, action) => {
    switch (action.type) {
    case "ADD_ITEM":
        return { ...state,  items: state.items.concat({ description: action.payload, completed: false, id: Date.now() })};
    case "CLEAR_COMPLETED":
    return {
      ...state,
      items: state.items.filter(({completed}) => !completed)
    };
      case "TOGGLE_TODO":
    return {
      ...state,
      items: state.items.map(item => (
        item.id === action.payload ? {...item, completed: !item.completed } : item
      ))
    };
      default:
        return state;
    }
  };

export const initalItems = {
    items:[{
      description: "feed Jimmy Hendrix",
      completed: false,
      id: 2,
    },
    {
      description: "a cat",
      completed: false,
      id: 1,
    },
    {
      description: "get goldfish to be addicted to Opium",
      completed: true,
      id: 3,
    }]
}

// export const ADD_ITEM = "ADD_ITEM";