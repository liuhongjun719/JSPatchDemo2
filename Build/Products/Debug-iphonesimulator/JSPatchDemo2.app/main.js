autoConvertOCType(1)

include('DBTimelineController.js')

defineClass('AppDelegate', {
  initRootViewController: function() {
            
            var firstController = FirstViewController.alloc().init()
            var firstNav = require('UINavigationController').alloc().initWithRootViewController(firstController);
            var item1 = require('UITabBarItem').alloc().init()
            item1.setTitle("First")
            firstNav.setTabBarItem(item1)
            
            var secondController = SecondViewController.alloc().init()
            var secondNav = require('UINavigationController').alloc().initWithRootViewController(secondController);
            var item2 = require('UITabBarItem').alloc().init()
            item2.setTitle("Second")
            secondNav.setTabBarItem(item2)
            
            var thirdController = ThirdViewController.alloc().init()
            var thirdNav = require('UINavigationController').alloc().initWithRootViewController(thirdController);
            var item3 = require('UITabBarItem').alloc().init()
            item3.setTitle("Third")
            thirdNav.setTabBarItem(item3)

            var fourthController = FourthViewController.alloc().init()
            var fourthNav = require('UINavigationController').alloc().initWithRootViewController(fourthController);
            var item4 = require('UITabBarItem').alloc().init()
            item4.setTitle("Fourth")
            fourthNav.setTabBarItem(item4)
            
            var tabController = require('UITabBarController').alloc().init()
            tabController.setViewControllers([firstNav, secondNav, thirdNav, fourthNav])
            self.window().setRootViewController(tabController);

            
  }
})
