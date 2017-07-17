import Ember from 'ember';

export default Ember.Component.extend({
  answerForm:false,
  actions:{
    toggleAnswer(){
      this.set('answerForm',true);
    },
    giveAnswer(){
      var params={
        name: this.get('name'),
        solution: this.get('solution'),
        question: this.get('question')
      };
      this.set('answerForm',false);
      this.sendAction('giveAnswer',params);
    }
  }
});
