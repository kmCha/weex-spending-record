var Vuex = require('vuex');
var detail = {
  months: [
    {
      "_id":"1",
      "year":"2016",
      "month":"07",
      "dates":[
        {
          "date":"02",
          "details": [
            {"_id":"15346467657", "income":false, "amount":30, "desc": "11111", "category": "taobao"},
            {"_id":"3464575678", "income":true, "amount":20, "desc": "222222222222", "category": "jiangjin"},
            {"_id":"14659", "income":false, "amount":50, "desc": "333", "category": "taobao"},
            {"_id":"34658709789574", "income":false, "amount":10, "desc": "444", "category": "taobao"}
          ]
        },
        {
          "date":"03",
          "details": [
            {"_id":"7679788563", "income":false, "amount":29.99, "desc": "", "category": "taobao"}
          ]
        },
        {
          "date":"04",
          "details": [
            {"_id":"132egrtgrtj", "income":false, "amount":15.55, "desc": "", "category": "taobao"},
            {"_id":"456y56h4rw", "income":true, "amount":15.55, "desc": "", "category": "taobao"}
          ]
        }
      ]
    },
    {
      "_id":"2",
      "year":"2016",
      "month":"06",
      "dates":[
        {
          "date":"06",
          "details": [
            {"_id":"34565juruyjrtfg", "income":false, "amount":60, "desc": "", "category": "taobao"}
          ]
        },
        {
          "date":"07",
          "details": [
            {"_id":"56eu67jger45ty", "income":false, "amount":77.77, "desc": "", "category": "taobao"}
          ]
        },
        {
          "date":"08",
          "details": [
            {"_id":"45y76iyjhnfg", "income":false, "amount":88.85, "desc": "", "category": "taobao"}
          ]
        }
      ]
    }
  ]
};
var state = {
  monthIndex: -1,
  dateIndex: -1,
  detailIndex: -1,
  detail: {}
};

var mutations = {
  select: function(state, index) {
    state.monthIndex = index.monthIndex;
    state.dateIndex = index.dateIndex;
    state.detailIndex = index.detailIndex;
  },
  unselect: function(state) {
    state.monthIndex = -1;
    state.dateIndex = -1;
    state.detailIndex = -1;
  },
  setItems: function(state, items) {
    state.detail = items;
    // state.items = detail;
  },
  delete: function(state, index) {
    var mIndex = index.monthIndex;
    var dIndex = index.dateIndex;
    var dtIndex = index.detailIndex;
    var monthArr = state.detail.months;
    var dateArr = state.detail.months[mIndex].dates;
    var detailArr = state.detail.months[mIndex].dates[dIndex].details;
    detailArr.splice(dtIndex, 1);
    if (detailArr.length === 0) {
      dateArr.splice(dIndex, 1);
    }
    if (dateArr.length === 0) {
      monthArr.splice(mIndex, 1);
    }
  }
}

var actions = {
  getInitialData: function(store) {
    var commit = store.commit;
    // ajax
    commit('setItems', detail);
  },
  delete: function(store, index) {
    var commit = store.commit;
    commit('unselect');
    commit('delete', index);
  }
}

module.exports = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
})
