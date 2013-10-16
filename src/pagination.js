var Pagination = function(){
  var self = this;
  self.items = [];
  self.perPage = 4;
  self.pageIdx = 1;
  self.leftEdge = 3;
  self.centerEdge = 3;
  self.rightEdge = 3;
  self.pageSize = Math.ceil(self.items.length/self.perPage);
  self.getPageSize = function(){
    return Math.ceil(self.items.length/self.perPage);
  };

  self.setup = function(cnt){
    for(var i = 1;i <= cnt; i++){
      // it has 100 items tottaluy.
      self.items.push(i);
    }
  };
  self.showIterPages = function(idx){
    // TODO : create left
    self.pageIdx = idx;
    var pageSize =  self.getPageSize();
    var tmp = [];
    var leftItems = [];
    // 今選んでいる場所
    var centerItems = [];
    var rightItems = [];
    var centerMax;
    var centerMin;
    var rightMin;

    if(self.getPageSize() === 1){
      return  _.range(1,self.items.length+1);
    }


    // push center edge
    for(var i = idx+1; i < idx + self.centerEdge+1 ;i++){
      centerItems.push(i);
    };
    centerMax = _.max(centerItems);
    // 一番小さいページ数
    centerMin = _.min(centerItems);

    // push right edge;
    for(var l = pageSize - self.rightEdge; l <= pageSize;l++){
      rightItems.push(l);
      rightMin = _.min(centerItems);
    }
    rightMin = _.min(rightItems);
    var diff = rightMin - centerMax;
    var centerRange;

    //  push to left items.
    // if (centerMin -self.leftEdge> 1 ){
    //   centerRange = _.range(centerMin - self.leftEdge-1,centerMin-1);
    //   // console.log(centerRange);
    // }

    // 一番小さいページがleftEdgeのページより大きい時、結合する。

    console.log(diff);

    if (Math.abs(diff) <= 2){
      tmp = _.union(idx,centerItems,rightItems);
    }else{
      tmp = _.union(idx,centerItems,"..",rightItems);
    }

    if(centerRange){
      tmp = _.union(centerRange,tmp);
    }
    var last = _.last(tmp);
    if (last === ".."){
      tmp = _.without(tmp,"..");
    }


    return _.uniq(tmp);
  };


};



