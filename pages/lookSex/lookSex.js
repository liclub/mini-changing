var app = getApp();
Page({
  data:{

  },
  onLoad: function (options) {
   
  },
  onPageScroll: function(e) {
    
  },
  toGirlLook:function(e){
    wx.navigateTo({
      url: '../setLook/setLook?sex=0'
    })
  },
  toBoyLook:function(e){
    wx.navigateTo({
      url: '../setLook/setLook?sex=1'
    })
  }
})