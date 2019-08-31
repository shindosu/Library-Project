//Upload Thumbnail 
$('#file').change(function(){
 var preview = document.querySelector('img')  
 var file = document.querySelector('input[type=file]').files[0];
 var reader = new FileReader();

 reader.addEventListener('load', function(){
   preview.src = reader.result;
 },false);

 if(file){
  $('#img > #manga').innerHTML =reader.readAsDataURL(file);  
 }

  var fileInput = document.querySelector('#file'); //select files 
  var files = fileInput.files[0].name; //catches the files (multiple or single) uploaded
  var fileName  = files.split('.')[0];// SPLIT: string -> array. EX: C:\fakepath\[春場ねぎ] 五等分の花嫁 第07巻.pdf, split strings before & after . and make it into an array of [[春場ねぎ] 五等分の花嫁 第07巻, pdf] -> [0] will get the first index
  console.log(fileName);
  document.getElementById('title').value= fileName;
  document.querySelector('.innerContent').style.display = "none";
  document.querySelector('h4').style.display = "none";
  
})

//Upload change color 
$('#uploadImage').click(function(){
  $(this).fadeOut(1000,function(){
    $(this).css("color","#FF7778")
  })
});


//Star rating 
$(document).ready(function(){
  $('#s1').click(function(){
    $('#s1').css("color","#F4E409")
  });
  $('#s2').click(function(){
    $('#s1,#s2').css("color","#F4E409")
  });
  $('#s3').click(function(){
    $('#s1,#s2,#s3').css("color","#F4E409")
  });
  $('#s4').click(function(){
    $('#s1,#s2,#s3,#s4').css("color","#F4E409")
  });
  $('#s5').click(function(){
    $('#s1,#s2,#s3,#s4,#s5').css("color","#F4E409")
  });
});

$('.star').click(function(){
  var ratingIndex = $(this).index()+1; //get index number of a star
  console.log(ratingIndex);
})

//PDF attach
$('#volumes').change(function(){
  var fileInput = document.querySelector('#volumes'); //select files 
  var fileLength = fileInput.files.length;
  for (var i=0; i<fileLength; i++){
    var fileName = this.files[i].name; //loops through the files uploaded, and gets the name attrobute
    console.log(fileName);
    $(`<table class="uploadResults"> 
      <tbody>
        <tr>
          <td>
          <i class="far fa-file-pdf" style="color: #FF0000"></i>${fileName}
          </td>
        </tr>
      </tbody>
     </table>`).insertBefore($('#paraPDF') ) 
  }
});

