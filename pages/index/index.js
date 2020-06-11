var app = getApp();
Page({
  data:{
    verifyCode:""
  },
  onLoad: function (options) {
    // var code = wx.getStorageSync('code');
    // app.getUserInfo(function(res){
      // wx.request({
      //   method: 'post',
      //   header: {'content-type': 'application/json'},
      //   url: 'https://user-center.secoo.com/service/appapi/joint/small/query/sessionkey', //仅为示例，并非真实的接口地址
      //   data: {
      //     'businessId':4,
      //     'clientId':14,
      //     'sourceId':2,
      //     'code':code
      //   },
      //   success: function(res) {
      //     console.log(res.data)
      //   }
      // })
    // });
    
    // wx.request({//获取验证码
    //   method: 'get',
    //   header: {'content-type': 'application/json'},
    //   url: 'https://user-center.secoo.com/service/appapi/captcha/v1', //仅为示例，并非真实的接口地址
    //   data: {
    //       'bizType':'jointLogin'
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })

    // wx.request({//获取验证码
    //   method: 'post',
    //   header: {'content-type': 'application/json'},
    //   url: 'https://user-center.secoo.com/service/appapi/user/msg/send', //仅为示例，并非真实的接口地址
    //   data: {
    //       'clientId':14,
    //       'bid':13,
    //       'mobile':'18638321650',
    //       'cck':"1f42b0b7602d43b0b62dedb91ea12a57",// 图形验证码cck
    //       'verifyCode':'vhth',// ⽤户输⼊图形验证码值
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })
    
    
  },
  onPageScroll: function(e) {
    
  },
  toNextPage:function(e){
    wx.navigateTo({
    url: '../lookSex/lookSex'
  })
  }
})