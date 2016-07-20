var Vuex = require('vuex');
var state = {
  selectedId: ''
}

var mutations = {
  select: function(state, id) {
    state.selectedId = id;
  },
  unSelect: function(state) {
    state.selectedId = '';
  }
}

var actions = {

}

module.exports = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
})
