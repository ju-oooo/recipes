// pages/cuisineTypeList/cuisineTypeList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipesList: [],
    count: 20,
    pageNum: 1,
    typeId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    this.setData({typeId:params.typeId});
    this._getRecipesList();
  },
  // 加在首页数据
  _getRecipesList: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.URL +'/cuisine/type',
      data: {
        "count": this.data.count,
        "pageNum": this.data.pageNum,
        "typeId": this.data.typeId,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        let length = this.data.recipesList.length;
        let recipesList = this.data.recipesList;
        if (length > 0) {
          res.data.cuisineList.slice(0, this.data.count / 2).forEach((elem, index) => {
            recipesList.splice(length / 2 + index, 0, elem)
          });
          res.data.cuisineList.slice(this.data.count / 2).forEach((elem) => {
            recipesList.push(elem)
          });
        } else {
          recipesList = this.data.recipesList.concat(res.data.cuisineList)
        }

        this.setData({
          'recipesList': recipesList,
          'pageNum': ++this.data.pageNum
        })
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      'pageNum': 1
    });
    this.setData({ 'recipesList': [] })
    this._getRecipesList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getRecipesList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})