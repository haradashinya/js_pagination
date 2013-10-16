
var assert = chai.assert;

describe('Pagination Test', function(){
  var p ;
  beforeEach(function(){
    p = new Pagination();
    p.setup(100);
  });


  it('pagination.pages has 100 items', function(){
    assert.equal(p.items.length,100);
  })

  it('if item has 100 and perPage is 4 then page size is 25 page',function(){
    var data = p.showIterPages(1);
    console.log(data);
    assert.deepEqual(data,[1,2,3,4,'..',22,23,24,25]);
    for(var i = 1; i < 20;i++){
      var data = p.showIterPages(i);
      console.log("index is");
      console.log(i);
      console.log(data);
    }
  });

  it('if item has 100 and perPage is 5 and page size',function(){
    var p = new Pagination();
    p.setup(100);
    p.perPage = 5;
    var data = p.showIterPages(1);
    assert.deepEqual(data,[1,2,3,4,'..',17,18,19,20]);


  });

  it('item should leftItems when perPage > leftEdge',function(){
    var p = new Pagination();
    p.setup(100);
    p.perPage = 5;
    var  data2 = p.showIterPages(10);
    assert.deepEqual(data2,[7, 8, 9, 10, 11, 12, 13, "..", 17, 18, 19, 20]);
  });

  it('item should leftItems when perPage > leftEdge',function(){
    var p = new Pagination();
    p.setup(1000);
    p.perPage = 8;
    var  data2 = p.showIterPages(11);
    assert.deepEqual(data2,[8, 9, 10, 11, 12, 13, 14, "..", 122, 123, 124, 125]);
    console.log(data2);
  });


  it("もしもpaginationがleftEdge,centerEdge,rightEdgeより小さかったら、全部表示する",function(){
    var p1 = new Pagination();
    p1.setup(8);
    p1.perPage = 10;
    var data3 = p1.showIterPages();
    assert.deepEqual(data3,[1,2,3,4,5,6,7,8]);

    var p2 = new Pagination();
    p2.setup(4);
    p2.perPage = 10;
    var data4 = p2.showIterPages();
    assert.deepEqual(data4,[1,2,3,4]);

  });





});


