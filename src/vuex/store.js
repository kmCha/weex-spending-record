var Vuex = require('vuex');
var detail = {
  months: [
    {
      "_id":"243t5rethtdyui",
      "year":"2016",
      "month":"07",
      "dates":[
        {
          "date":"12",
          "details": [
            {"_id":"15346467657", "income":false, "amount":30, "desc": "11111", "category": "taobao"},
            {"_id":"3464575678", "income":true, "amount":20, "desc": "222222222222", "category": "jiangjin"},
            {"_id":"14659", "income":false, "amount":50, "desc": "333", "category": "taobao"},
            {"_id":"34658709789574", "income":false, "amount":10, "desc": "444", "category": "taobao"}
          ]
        },
        {
          "date":"13",
          "details": [
            {"_id":"7679788563", "income":false, "amount":29.99, "desc": "", "category": "taobao"}
          ]
        },
        {
          "date":"14",
          "details": [
            {"_id":"132egrtgrtj", "income":false, "amount":15.55, "desc": "", "category": "taobao"},
            {"_id":"456y56h4rw", "income":true, "amount":15.55, "desc": "", "category": "taobao"}
          ]
        }
      ]
    },
    {
      "_id":"345645ute5yjhdrg",
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
    },
    {
      "_id":"ehr57y547y45y",
      "year":"2016",
      "month":"08",
      "dates":[
        {
          "date":"06",
          "details": [
            {"_id":"4547yu56u56", "income":false, "amount":60, "desc": "", "category": "taobao"}
          ]
        },
        {
          "date":"07",
          "details": [
            {"_id":"56eu67jg56u56yhrer45ty", "income":false, "amount":77.77, "desc": "", "category": "taobao"}
          ]
        },
        {
          "date":"08",
          "details": [
            {"_id":"45y76345345iyjhnfg", "income":false, "amount":88.85, "desc": "", "category": "taobao"}
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
  detail: {},
  displayedMonthIndex: 0,
  baseUrl: '',
  categorySelected: 'yiban',
  inputAmount: 0
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
    var months = state.detail.months;
    var dates = state.detail.months[mIndex].dates;
    var details = state.detail.months[mIndex].dates[dIndex].details;
    details.splice(dtIndex, 1);
    if (details.length === 0) {
      dates.splice(dIndex, 1);
    }
    if (dates.length === 0) {
      months.splice(mIndex, 1);
    }
  },
  changeDisplay: function(state, index) {
    state.displayedMonthIndex = index;
  },
  setBaseUrl: function(state, url) {
    state.baseUrl = url;
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

var getters = {
  year: function(store) {
    return store.state.detail.months[store.state.displayedMonthIndex].year;
  },
  months: function(store) {
    return store.state.detail.months;
  }
};


module.exports = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
})
