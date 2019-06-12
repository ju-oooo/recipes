// pages/register/register.js
const app = getApp();
Page({
  // 获取更新input值
  inputedit: function(e) {
    let _this = this;
    let dataset = e.currentTarget.dataset;
    let name = dataset.name;
    let value = e.detail.value;
    _this.data[name] = value
    this.setData({
      name: _this.data[name]
    })
  },
  // 执行注册方法
  _register: function(e) {
    let username = this.data.username
    let password = this.data.password
    if (!username || !password) {
      wx.showToast({
        title: '用户名或密码格式有误',
        icon: 'none'
      });
      return;
    }
    wx.showLoading({
      title: '注册中...',
      icon: 'loading'
    });
    wx.request({
      url: app.globalData.URL + '/user/register',
      data: {
        "phone": username,
        "password": password
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        wx.hideLoading();
        let data = res.data;
        if (data.code === 200) {
          wx.showToast({
            title: '注册成功',
            icon: 'none',
            duration: 2000
          });
          wx.redirectTo({
            url: '../login/login'
          });
        } else {
          wx.showToast({
            title: '注册失败',
            icon: 'none',
            duration: 2000
          });
        }
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})