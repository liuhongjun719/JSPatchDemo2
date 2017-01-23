var _dataSourceShareInstance;
defineJSClass('DBDataSource', {
  init: function(){
    this.dribbbleHost = 'https://api.dribbble.com/v1';
    this.requestManager = require('AFHTTPRequestOperationManager').manager();
    this.requestManager.requestSerializer().setValue_forHTTPHeaderField('Bearer deeb37c0823d3866650db12df9e36730a0453a5a7b8e6493e0ac5ece15929613', 'Authorization');
    
    this.requestHost = 'http://i.play.163.com'
//    this.requestFirst = '/news/topicOrderSource/list'
//    this.requestFirstDetail = '/user/article/list//T1427969532333/0/20'
    return this;
  },

  _get: function(path, params, succ, fail){
//    var url = this.requestFirst
    var url = this.requestHost + path
    console.log("url===========:"+url)
    this.requestManager.GET_parameters_success_failure(url, params,
      block('AFHTTPRequestOperation *, id', function(operation, responseObject) {
//            console.log("responseObject=======:" + responseObject["info"])
          if (succ) succ(responseObject["info"]);
      }), 
      block('AFHTTPRequestOperation *, NSError *', function(operation, error) {
          if (fail) fail(error);
      })
    );
  },
              
              
              loadPublicShots: function(page, per_page, succ, fail) {
              this._get('/news/topicOrderSource/list', {}, succ, fail)
              },
              loadFirstDetail: function(page, per_page, succ, fail) {
              this._get('/user/article/list//T1427969532333/0/20', {}, succ, fail)
              },

}, {
  shareInstance: function(){
    if (!_dataSourceShareInstance) {
      _dataSourceShareInstance = DBDataSource.alloc().init();
    }
    return _dataSourceShareInstance;
  },
})


