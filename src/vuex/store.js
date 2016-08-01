var Vuex = require('vuex-weex');
var state = {
  monthIndex: -1,
  dateIndex: -1,
  detailIndex: -1,
  detail: {months: []},
  displayedMonthIndex: 0,
  baseUrl: '',
  categorySelected: 'taobao',
  inputAmount: 0,
  selectedType: 'spending',
  submitType: 'add',
  categories: {
    spending: [],
    income: []
  }
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
  setDetail: function(state, detail) {
    // console.log('setItems been called')
    state.detail = detail;
    // state.detail.months.pop()
    // console.log('after commit')
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
  changeHeaderMonth: function(state, index) {
    state.displayedMonthIndex = index;
  },
  setBaseUrl: function(state, url) {
    state.baseUrl = url;
  },
  selectCategory: function(state, name) {
    state.categorySelected = name;
  },
  setCategories: function(state, arr) {
    state.categories = arr;
  },
  setAmount: function(state, amount) {
    state.inputAmount = amount;
  },
  addDetail: function(state, payload) {
    var detail = payload.detail;
    var year = payload.year;
    var month = payload.month;
    var date = payload.date;
    var topMonth = state.detail.months[0];
    if (topMonth.year === year && topMonth.month === month) {
      if (topMonth.dates[0].date === date) {
        topMonth.dates[0].details.unshift(detail);
        return;
      } else {
        topMonth.date.unshift({
          date: date,
          details: [detail]
        });
        return;
      }
    } else {
      state.detail.months.unshift({
        _id: Math.random(),
        year: year,
        month: month,
        dates: [{
          date: date,
          details: [detail]
        }]
      });
    }
  },
  setSelectedType: function(state, type) {
    state.selectedType = type;
  },
  setSubmitType: function(state, type) {
    state.submitType = type;
  },
  editDetail: function(state, payload) {
    var monthIndex = state.monthIndex;
    var dateIndex = state.dateIndex;
    var detailIndex = state.detailIndex;
    var detail = state.detail.months[monthIndex].dates[dateIndex].details[detailIndex];
    detail.income = payload.detail.income;
    detail.amount = payload.detail.amount;
    detail.desc = payload.detail.desc;
    detail.category = payload.detail.category;
  }
}

var actions = {
  // setDetailAsync: function(store, detail) {
  //   return new Promise(function(resolve, reject) {
  //     resolve();
  //   }).then(function() {
  //     var commit = store.commit;
  //     // ajax
  //     commit('setDetail', detail);
  //   });
  // },
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
    // console.log('get months', store)
    return store.state.detail.months;
  }
};


module.exports = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
})
