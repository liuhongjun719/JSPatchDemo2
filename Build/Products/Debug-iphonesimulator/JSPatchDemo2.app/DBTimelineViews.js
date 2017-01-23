var gap = 10;
var avatarSize = 40;
require('UILabel, UIColor, UIFont, UITextView, UIImage');
include('CommonDefine.js')

//FirstViewController
defineClass('DBTimelineItemView: UIView', [
    'avatarImageView', 
    'nameLabel',
    'contentImageBtn',
    'tapCallback'
], {
  init: function(){
    self = self.super().init();

    var imgGap = 10;
    var width = 50;
    self.setFrame({x: 0, y: 0, width:SCREEN_WIDTH, height:80});
    self.setBackgroundColor(UIColor.whiteColor());


    var avatarImageView = require('UIImageView')
                            .alloc()
                            .initWithFrame({x:imgGap, y:(80-width)/2, width:width, height:width});
    self.addSubview(avatarImageView);
    self.setAvatarImageView(avatarImageView);
            

    var nameLabel = UILabel
                      .alloc()
                      .initWithFrame({x: imgGap + avatarImageView.frame().width + imgGap, y:(80-20)/2, width:SCREEN_WIDTH - avatarImageView.frame().width - imgGap*2 , height:20});
    nameLabel.setFont(UIFont.systemFontOfSize(12));
    nameLabel.setTextColor(UIColor.grayColor());
    self.addSubview(nameLabel);
    self.setNameLabel(nameLabel);

    return self;
  },


  renderWithItem: function(item) {
    self.avatarImageView().sd__setImageWithURL(require('NSURL').URLWithString(item['iconUrl']));
    self.nameLabel().setText(item['topicName']);
  },

})

defineClass('DBTimelineViewCell: UITableViewCell', [
    'itemView1', 
    'itemView2',
    'tapCallback',
], {
  initWithStyle_reuseIdentifier: function(style, reuseIdentifier) {
      self = self.super().initWithStyle_reuseIdentifier(style, reuseIdentifier);
      if (self) {
        self.setSelectionStyle(0);
        self.contentView().setBackgroundColor(UIColor.colorWithWhite_alpha(1, 1));
        self._initItemView();
      }
      return self;
  },
  _initItemView: function(){
    var itemView1 = DBTimelineItemView.alloc().init();

    itemView1.setFrame({x:0, y: 0, width: itemView1.frame().width, height: itemView1.frame().height});
    self.setItemView1(itemView1);
    self.addSubview(itemView1);
  },
  renderWithItems: function(item1) {
    if (item1) {
      self.itemView1().renderWithItem(item1);
    }
  }
})



//First Detail ViewController
defineClass('FirstDetailItemView: UIView', [
                                           'avatarImageView',
                                           'nameLabel',
                                           'replyCountLabel',
                                           'dateLabel',
                                           'chatImageView',
                                           ], {
            init: function(){
            self = self.super().init();
            
            var imgGap = 5;
            var width = 50;
            self.setFrame({x: 0, y: 0, width:SCREEN_WIDTH, height:80});
            self.setBackgroundColor(UIColor.whiteColor());
            
            //image
            var avatarImageView = require('UIImageView')
            .alloc()
            .initWithFrame({x:0, y:0, width:SCREEN_WIDTH, height:150});
            self.addSubview(avatarImageView);
            self.setAvatarImageView(avatarImageView);
            
            //title
            var nameLabel = UILabel
            .alloc()
            .initWithFrame({x:0, y:avatarImageView.frame().y + avatarImageView.frame().height + imgGap, width:SCREEN_WIDTH, height:20});
            nameLabel.setFont(UIFont.systemFontOfSize(16));
            nameLabel.setTextColor(UIColor.blackColor());
            self.addSubview(nameLabel);
            self.setNameLabel(nameLabel);
            
            
            //date
            var dateLabel = UILabel.alloc().initWithFrame({x:0, y: nameLabel.frame().y +nameLabel.frame().height + imgGap, width:SCREEN_WIDTH-100, height:15});
            dateLabel.setFont(UIFont.systemFontOfSize(10));
            dateLabel.setTextColor(UIColor.grayColor());
            self.addSubview(dateLabel);
            self.setDateLabel(dateLabel);
            
            
            
            //comment image
            var chatImageView = require('UIImageView').alloc().initWithFrame({x:SCREEN_WIDTH-65, y: nameLabel.frame().y +nameLabel.frame().height, width:15, height:15});
            chatImageView.setImage(UIImage.imageNamed("common_chat_new"))
            self.addSubview(chatImageView);
            self.setChatImageView(chatImageView);
            
            
            //comment
            var replyCountLabel = UILabel.alloc().initWithFrame({x:SCREEN_WIDTH-45, y: nameLabel.frame().y +nameLabel.frame().height, width:50, height:15});
            replyCountLabel.setFont(UIFont.systemFontOfSize(10));
            replyCountLabel.setTextColor(UIColor.grayColor());
            self.addSubview(replyCountLabel);
            self.setReplyCountLabel(replyCountLabel);
            
            return self;
            },
            
            
            
            renderWithItem: function(item) {
            self.avatarImageView().sd__setImageWithURL(require('NSURL').URLWithString(item['imgsrc']['0']));
            self.nameLabel().setText(item['title']);
            self.dateLabel().setText(item['ptime']);
            self.replyCountLabel().setText(''+ item['replyCount']);

            },
            
})

defineClass('FirstDetailViewCell: UITableViewCell', [
                                                    'itemView1',
                                                    'itemView2',
                                                    'tapCallback',
                                                    ], {
            initWithStyle_reuseIdentifier: function(style, reuseIdentifier) {
            self = self.super().initWithStyle_reuseIdentifier(style, reuseIdentifier);
            if (self) {
            self.setSelectionStyle(0);
            self.contentView().setBackgroundColor(UIColor.colorWithWhite_alpha(1, 1));
            self._initItemView();
            }
            return self;
            },
            _initItemView: function(){
            var itemView1 = FirstDetailItemView.alloc().init();
            
            itemView1.setFrame({x:0, y: 0, width: itemView1.frame().width, height: itemView1.frame().height});
            self.setItemView1(itemView1);
            self.addSubview(itemView1);
            },
            renderWithItems: function(item1) {
            if (item1) {
            self.itemView1().renderWithItem(item1);
            }
            }
})








































