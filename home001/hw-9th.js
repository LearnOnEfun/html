function inputBook()
{
  document.write('<h1>2016阅读清单</h1>');
  document.write('<h4>作者  书名  评分</h4>' + '<br>');

  var book_list = Array();
  var book_info = {}
  var sum_point = 0
  var time = parseInt(prompt("请问今年你阅读了多少本书（决定了你输入数据的次噢）"))

  for (i=0; i<time; i++)
  {
    book_info.name = prompt("请输入2016阅读过书的作者：","作者");
    book_info.bname = prompt("请输入2016阅读过书的名字：","《书名》");
    book_info.point = prompt("请输入2016阅读过书的评分：","评分");
    book_list[i] = book_info
    sum_point  += parseInt(book_info.point)
    document.write(book_list[i].name + book_list[i].bname + book_list[i].point + '<br>');

  }

   sum_point = sum_point / time
   document.write('<br>' + "<em>书籍平均分：</em>")
   document.write(sum_point)
}


function inputBook2()
{
    //creat table header
    var tableline1 = document.createElement("tr");

    var tableHeader1 = document.createElement("td");
    var tableHeader2 = document.createElement("td");
    var tableHeader3 = document.createElement("td");

    var txtHeader1 = document.createTextNode("作者");
    var txtHeader2 = document.createTextNode("书籍");
    var txtHeader3 = document.createTextNode("评分");

    tableHeader1.appendChild(txtHeader1);
    tableHeader2.appendChild(txtHeader2);
    tableHeader3.appendChild(txtHeader3);

    tableline1.appendChild(tableHeader1)
    tableline1.appendChild(tableHeader2)
    tableline1.appendChild(tableHeader3)

    var inputTableBook = document.getElementById("inputTableBook");
    inputTableBook.appendChild(tableline1);
    //inputTableBook.appendChild(tableHeader2);
    //inputTableBook.appendChild(tableHeader3);

    //input book info
    var book_list = Array();
    var book_info = {}
    var sum_point = 0
    var time = parseInt(prompt("请问今年你阅读了多少本书（决定了你输入数据的次噢）"))

    for (i=0; i<time; i++){
      book_info.name = prompt("请输入2016阅读过书的作者：","作者");
      book_info.bname = prompt("请输入2016阅读过书的名字：","《书名》");
      book_info.point = prompt("请输入2016阅读过书的评分：","评分");

      var table1 = document.createElement("td");
      var table2 = document.createElement("td");
      var table3 = document.createElement("td");
      var txtbook1 = document.createTextNode(book_info.name)
      var txtbook2 = document.createTextNode(book_info.bname)
      var txtbook3 = document.createTextNode(book_info.point)
      table1.appendChild(txtbook1);
      table2.appendChild(txtbook2);
      table3.appendChild(txtbook3);

      inputTableBook.appendChild(table1);
      inputTableBook.appendChild(table2);
      inputTableBook.appendChild(table3);

    }



}
