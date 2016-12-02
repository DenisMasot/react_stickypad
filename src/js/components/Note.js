// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');

// initialisation de la vue 
var Note = React.createClass({
    render: function(){
        return(
            <div className="column">
                <div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} className="note">
                    <p>{this.props.note.text}</p>
                </div>
            </div>   
        );
    },
        removeNote: function(i, j){
            AppActions.removeNote(i.$oid);
        }

});


// Renvoie à div#app dans index.html
module.exports = Note;