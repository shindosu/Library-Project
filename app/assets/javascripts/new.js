//Upload Thumbnail 
$('#file').change(function(){
 var preview = document.querySelector('#img')  
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
  document.querySelector('#innerContent').style.display = "none";
  document.querySelector('#thumbHeader').style.display = "none";
  
})

//Upload Banner
$('#banner').change(function(event) {
    var input = event.target;
  
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('imgBanner');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
     
    var fileInput = document.querySelector('#banner'); //select files 
    var files = fileInput.files[0].name; //catches the files (multiple or single) uploaded
    var fileName  = files.split('.')[0];// SPLIT: string -> array. EX: C:\fakepath\[春場ねぎ] 五等分の花嫁 第07巻.pdf, split strings before & after . and make it into an array of [[春場ねぎ] 五等分の花嫁 第07巻, pdf] -> [0] will get the first index
    console.log(fileName);
    document.querySelector('#bannerContent').style.display = "none";
    document.querySelector('#bannerName').style.display = "none";
  });

//Upload change color 
$('#uploadImage').click(function(){
  $(this).fadeOut(1000,function(){
    $(this).css("color","#FF7778")
  })
});

//PDF attach
$('#volumes').change(function(){
  var fileInput = document.querySelector('#volumes'); //select files 
  var fileLength = fileInput.files.length; //get the length or the numbers of the files uploaded
  for (var i=0; i<fileLength; i++){ 
    var fileName = this.files[i].name; //loops through the files uploaded, and gets the name attribute
    console.log(fileName);
    $(`<table class="uploadResults"> 
      <tbody>
        <tr>
          <td>
          <i class="far fa-file-pdf" style="color: #FF0000"></i> <input class="form-control" type="text" value=${fileName} name="books[mangaTitle]">
          </td>
        </tr>
      </tbody>
     </table>`).insertBefore($('#paraPDF') ) 
  }
});


/*
 <%= check_box_tag 'music[genre][]', "Action", checked('Action'), id: 'genre_action' %> Action <br>
        <%= check_box_tag 'music[genre][]', "Adventure", checked('Adventrue'), id: 'genre_adventrue' %> Adventure <br>
        <%= check_box_tag 'music[genre][]', "Comedy", checked('Comedy'), id: 'genre_comedy' %> Comedy <br>
        <%= check_box_tag 'music[genre][]', "Drama", checked('Drama'), id: 'genre_drama' %> Drama <br>
        <%= check_box_tag 'music[genre][]', "Ecchi", checked('Ecchi'), id: 'genre_ecchi' %> Ecchi <br>
        <%= check_box_tag 'music[genre][]', "Fantasy", checked('Fantasy'), id: 'genre_fantasy' %> Fantasy <br>
        <%= check_box_tag 'music[genre][]', "Horror", checked('Horror'), id: 'genre_horror' %> Horrot <br>
        <%= check_box_tag 'music[genre][]', "Magic", checked('Magic'), id: 'genre_magic' %> Magic <br>
        <%= check_box_tag 'music[genre][]', "Mystery", checked('Mystery'), id: 'genre_mystery' %> Mystery <br>
        <%= check_box_tag 'music[genre][]', "Psychological", checked('Psychological'), id: 'genre_psychological' %> Psychological <br>
        <%= check_box_tag 'music[genre][]', "Sci Fi", checked('Sci Fi'), id: 'genre_sci_fi' %> Sci Fi  <br>
        <%= check_box_tag 'music[genre][]', "Slice of Life", checked('Slice of Life'), id: 'genre_slice_of_life' %> Slice of Life <br>
        <%= check_box_tag 'music[genre][]', "Supernatural", checked('Supernatural'), id: 'genre_supernatural' %> Supernatural <br>
       
             <% @book_genre.each do |genre| %>
      <%= f.check_box :genre,
          {multiple: true,
          checked: @book.genre.present? ? @book.genre.split(",").include
          genre, nil}
        %> <%%=genre%>
      <%end%>

          GENRE_LIST = ["Action","Adventure","Comedy","Drama","Ecchi","Fantasy", "Horror","Magic","Mystery","Psychological","Romance","Sci Fi","Slice of Life","Supernatural"]
               <%= f.check_box :genres, {multiple: true}, "Action", nil%> Action <br>
        <%= f.check_box :genres, {multiple: true}, "Adventure", nil%> Adventure <br>
        <%= f.check_box :genres, {multiple: true}, "Comedy", nil%> Comedy <br>
        <%= f.check_box :genres, {multiple: true}, "Drama", nil%> Drama <br>
        <%= f.check_box :genres, {multiple: true}, "Ecchi", nil%> Ecchi <br>
        <%= f.check_box :genres, {multiple: true}, "Fantasy", nil%> Fantasy <br>
        <%= f.check_box :genres, {multiple: true}, "Horror", nil%> Horror <br>
        <%= f.check_box :genres, {multiple: true}, "Magic", nil%> Magic <br>
        <%= f.check_box :genres, {multiple: true}, "Mystery", nil%> Mystery <br>
        <%= f.check_box :genres, {multiple: true}, "Psychological", nil%> Psychological <br>
        <%= f.check_box :genres, {multiple: true}, "Sci Fi", nil%> Sci Fi <br> 
        <%= f.check_box :genres, {multiple: true}, "Slice of Life", nil%> Slice of Life <br>
        <%= f.check_box :genres, {multiple: true}, "Supernaural", nil%> Supernatural <br> */

