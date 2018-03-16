//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello li',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    date: '2016-09-01',
    test: '开始',
    userOne: [
      { id: 1, name: '洗碗', grade: 5 },
      { id: 2, name: '刷地', grade: 2 },
      { id: 3, name: '做饭', grade: 3 },
      { id: 4, name: '洗碗', grade: 5 },
      { id: 5, name: '刷地', grade: 2 },
      { id: 6, name: '做饭', grade: 3 },
      { id: 7, name: '洗碗', grade: 5 },
      { id: 8, name: '刷地', grade: 2 },
      { id: 9, name: '做饭', grade: 3 },
      { id: 10, name: '洗碗', grade: 5 },
      { id: 11, name: '刷地', grade: 2 },
      { id: 12, name: '做饭', grade: 3 },
    ],
    userTwo: [
      { name: '洗衣服', grade: 5 },
      { name: '倒垃圾', grade: 2 },
      { name: '做饭xx', grade: 3 },
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
      })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //时间选择器
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //提示信息弹窗
  showToast: function(e) {
    wx.showModal({
      title: '提示',
      content: '编辑您的用户名',
      mask: true,
    })
  },
  //添加任务弹窗
  addTask: function(e) {
    wx.showModal({
      title: '提示',
      content: '弹窗内容',
    })
  }
})
