// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');
var AddNoteForm = require ('./AddNoteForm.js');
var NoteList = require ('./NoteList.js');

function getAppState(){
    return {
        notes: AppStore.getNotes()
    }
}

// initialisation de la vue 
var App = React.createClass({
    getInitialState: function(){
      return getAppState();  
    },
    
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    
    render: function(){
        console.log(this.state.notes)
        return(
            <div>
                <div className="off-canvas-wrapper">
                    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                        <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                            <div className="row column">
                            <br />
                                <AddNoteForm />
                            </div>
                        </div>
                        <div className="off-canvas-content" data-off-canvas-content>
                            <NoteList notes = {this.state.notes} />
                        </div>
                    </div>
                </div>
            </div>   
        );
    },
    
    _onChange: function(){
        this.setState(getAppState());
    }
});


// Renvoie à div#app dans index.html
module.exports = App;