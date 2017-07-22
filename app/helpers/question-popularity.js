import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question=params[0];
  if(question.get('answers').get('length')>=3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire">POPULAR AMONG THE COMMUNITY</span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
