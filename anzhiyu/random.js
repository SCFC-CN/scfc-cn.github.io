var posts=["2024/08/24/2/","2025/01/01/4/","2024/07/31/1/","2024/12/29/3/","2025/01/10/5/","2025/01/16/6/","2025/01/18/7/","2025/01/19/8/","2025/01/21/9/","2023/06/01/anzhiyu主题标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"朽丘秋雨","link":"https://koxiuqiu.cn","avatar":"https://cdn.koxiuqiu.cn/koxiuqiu/img/klcdm_big.webp","descr":"一定会和喜欢的人在夏日夜晚牵手慢步"},{"name":"云团子的博客","link":"https://www.yuncheng.fun/","avatar":"https://www.yuncheng.fun/static/webAvatar/11727945933180571.png","descr":"欸，是谁家的小可爱？"},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","siteshot":"https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png","descr":"分享技术与科技生活"},{"name":"可爱的苏苏吖","link":"https://blog.0om.top/","avatar":"https://thirdqq.qlogo.cn/g?b=qq&nk=3894502734&s=640","descr":"风很温柔 花很浪漫 你很特别 我很喜欢"},{"name":"洋洋Blog","link":"https://yangy.co/","avatar":"https://yangy.co/upload/logo.png","descr":"洋洋的小小Blog"},{"name":"幽默的小刘吖","link":"https://blog.lzchi.top/","avatar":"https://z6666.zhuxu.asia/LightPicture/2024/11/c553b4769eaa1a8e.png","descr":"每天分享不一样的知识内容"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"主题作者"},{"name":"云驰互联","link":"https://cloud.zyidc.net/aff/MWWVNOGU","avatar":"https://imgse.koxiuqiu.cc/xT9R9p.png","descr":"IDC,低价","link_list.tag":"推荐","recommend":true},{"name":"土云","link":"https://cloud.soilcloud.cn/","avatar":"https://cloud.soilcloud.cn/upload/889.png","descr":"提供企业一站式产品与服务","link_list.tag":"推荐","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };