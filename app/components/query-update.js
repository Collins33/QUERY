import Ember from 'ember';

export default Ember.Component.extend({
  queryUpdate:false,

  actions:{
    updateQuery(){
      this.set('queryUpdate',true);
    },
    changeQuery(question){
      var params= {
        author: this.get('author'),
        topic: this.get('topic'),
        query: this.get('query'),
        image: this.get('image'),
      };
      this.set('queryUpdate',false);
      this.sendAction('changeQuery',question,params);
    }
  }
});
