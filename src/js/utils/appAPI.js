var AppActions = require('../actions/AppActions');

module.exports = {
    addNote: function(note){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=NxhLI_hS4zpoSNpBXzX1sbMDRKKyeQCA",
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },
    
    getNotes: function(){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=NxhLI_hS4zpoSNpBXzX1sbMDRKKyeQCA",
            dataType : 'json',
            cache: false,
            success: function(data){
                console.log(data);
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        });
    },
    
    removeNote: function(noteId){
                $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes/" + noteId + "?apiKey=NxhLI_hS4zpoSNpBXzX1sbMDRKKyeQCA",
            type: "DELETE",
            async: true,
            timout: 300000,
            success: function(data){
                console.log('Note Deleted...');
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        });
    }
}