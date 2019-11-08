// / Browser-Level React + Redux

//
// Action
//

function changeGreeting(text) {
  return {
    type: 'CHANGE_TODO',
    text
  };
}


//
// Reducer
//

const initialState = {
  greeting: 'Hello'
};

function greeterApp(state, action) {

  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'CHANGE_TODO':
      return Object.assign({}, state, {
        greeting: action.text === ''
          ? initialState.greeting
          : action.text
      });
  }

  return state
}


//
// Store
//

const store = Redux.createStore(greeterApp);


//
// React Components
//

class Input extends React.Component {
  
  handleInputChange = (ev) => {
    this.props.dispatch(
      changeGreeting(ev.target.value)
    );
  };
  
  render() {
    return (
      <input 
        defaultValue={this.props.greeting}
        placeholder="Change me" 
        type = "text"
        onFocus={ev => ev.target.select()}
        onChange={this.handleInputChange} 
      />
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting-component">
        <p>value from Redux store</p>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

//
// Store Connection
//

const ConnInput = 
      ReactRedux.connect(state => state)
      (Input);

const ConnGreeting = 
      ReactRedux.connect(state => state)
      (Greeting);


//
// Rendering to DOM
//

ReactDOM.render(
  (
    <ReactRedux.Provider store={store}>
      <ConnInput />
    </ReactRedux.Provider>
  ),
  document.getElementById('compo0')
);

ReactDOM.render(
  (
    <ReactRedux.Provider store={store}>
      <ConnGreeting />
    </ReactRedux.Provider>
  ),
  document.getElementById('compo1')
);

ReactDOM.render(
  (
    <ReactRedux.Provider store={store}>
      <ConnGreeting />
    </ReactRedux.Provider>
  ),
  document.getElementById('compo2')
);
