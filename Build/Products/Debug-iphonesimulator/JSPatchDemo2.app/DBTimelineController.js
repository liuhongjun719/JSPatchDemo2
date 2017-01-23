include('DBTimelineViews.js')
//include('DBDetailController.js')
include('DBDataSource.js')









//First
defineClass('FirstViewController: UITableViewController', [
  'loadingView', 
  'isLoading',
  'shots',
  'currPage'
], {
            viewDidLoad: function() {
            self.setTitle('First');
            self.view().setBackgroundColor(require('UIColor').whiteColor())

            },
            
            init: function() {
            self = self.super().init();
            self.tableView().setBackgroundColor(UIColor.colorWithWhite_alpha(1, 1));
//            self.tableView().setSeparatorStyle(0);
            
            self.setShots([]);
            self.setCurrPage(1);
            self._loadShots();
            return self;
            },
            
            _loadShots: function() {
            var perPage = 20;
            var slf = self;
            DBDataSource.shareInstance().loadPublicShots(self.currPage(),perPage, function(shots){
                slf.setShots(slf.shots().concat(shots));
                console.log("responseObject=======:" + shots)
                slf.tableView().reloadData();
            },function(){})
            },
            
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return 80
            },
            
            tableView_numberOfRowsInSection: function(tableView, section) {
            console.log("-----00000-------" + self.shots().length)
            return self.shots().length;
            },
            
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = DBTimelineViewCell.alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
//            console.log("responseObject=======:" + self.shots()[indexPath.row()]['iconUrl'])

            cell.renderWithItems(self.shots()[indexPath.row()]);
            return cell
            },
            
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            tableView.deselectRowAtIndexPath_animated(indexPath, YES)
            var firstDetailViewController = FirstDetailViewController.alloc().init()
            firstDetailViewController.setHidesBottomBarWhenPushed(YES)
            self.navigationController().pushViewController_animated(firstDetailViewController, YES)
            },
})

defineClass('FirstDetailViewController: UITableViewController', ['loadingView','isLoading','shots','currPage'], {
            viewDidLoad: function() {
            self.setTitle('Fourth detail');
            self.view().setBackgroundColor(require('UIColor').blueColor())
            },
            init: function() {
            self = self.super().init();
            self.tableView().setBackgroundColor(UIColor.colorWithWhite_alpha(1, 1));
            self.tableView().setSeparatorStyle(0);
            
            self.setShots([]);
            self.setCurrPage(1);
            self._loadShots();
            return self;
            },
            
            _loadShots: function() {
            var perPage = 20;
            var slf = self;
            DBDataSource.shareInstance().loadFirstDetail(self.currPage(),perPage, function(shots){
                                                         slf.setShots(slf.shots().concat(shots));
                                                         console.log("responseObject=======:" + shots)
                                                         slf.tableView().reloadData();
                                                         },function(){})
            },
            
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return 210
            },
            
            tableView_numberOfRowsInSection: function(tableView, section) {
            console.log("-----00000-------" + self.shots().length)
            return self.shots().length;
            },
            
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = FirstDetailViewCell.alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
            //            console.log("responseObject=======:" + self.shots()[indexPath.row()]['iconUrl'])
            
            cell.renderWithItems(self.shots()[indexPath.row()]);
            return cell
            },
            
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            tableView.deselectRowAtIndexPath_animated(indexPath, YES)
            var firstDetailWebViewController = FirstDetailWebViewController.alloc().init()
            self.navigationController().pushViewController_animated(firstDetailWebViewController, YES)
//            var viewController = ViewController.alloc().init()
//            self.navigationController().pushViewController_animated(viewController, YES)
            },
            
})


//Fourth
defineClass('FirstDetailWebViewController: UIViewController', {
            viewDidLoad: function() {
            self.super().viewDidLoad()
            self.setTitle('Fourth detail webView');
            self.view().setBackgroundColor(require('UIColor').redColor())
            
            var webView = require('UIWebView').alloc().initWithFrame({x:0, y: 0, width:self.view().frame().width, height:self.view().frame().height});
            self.view().addSubview(webView)
            webView.loadRequest(require('NSURLRequest').requestWithURL(require('NSURL').URLWithString("http://play.163.com/16/1225/12/C94PD5SS00314V88.html")))
            
            },
            
})

defineClass('ViewController',{
            viewDidLoad: function() {
            self.ORIGviewDidLoad();//调用SecondViewController中的viewDidLoad方法
            }

})



















//Second
defineClass('SecondViewController: UIViewController', [
                                                       'loadingView',
                                                       'isLoading',
                                                       'shots',
                                                       'currPage'
                                                       ], {
            viewDidLoad: function() {
            self.setTitle('Second');
            self.view().setBackgroundColor(require('UIColor').purpleColor())
            
            },
            
})


//Third
defineClass('ThirdViewController: UIViewController', [
                                                      'loadingView',
                                                      'isLoading',
                                                      'shots',
                                                      'currPage'
                                                      ], {
            viewDidLoad: function() {
            self.setTitle('Third');
            self.view().setBackgroundColor(require('UIColor').yellowColor())
            
            },
            
})


//Fourth
defineClass('FourthViewController: UIViewController', [
                                                       'loadingView',
                                                       'isLoading',
                                                       'shots',
                                                       'currPage'
                                                       ], {
            viewDidLoad: function() {
            self.setTitle('Fourth');
            self.view().setBackgroundColor(require('UIColor').redColor())
            
            },
            
})






































