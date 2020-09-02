var typed = new Typed('.type', {
  strings: ['Freenlancer', 'web developer','designer'],
//   smartBackspace: true // Default value
  typeSpeed:60,
  backSpeed:60,
  loop:true
});

// scroll

$(window).scroll(function(){
  let position= $(this).scrollTop();
  console.log(position);
  
//   if(position >=58){
//     $(".navbar").addClass('navchange');
// }

  if(position >=535){
      $(".service").addClass('change');
  }
  if(position >=1600){
      $(".about").addClass('change');
  }


  if(position>=2600){
    $(".skill").addClass('animate-progress');
  }
  // else{
  //   $(".skill").removeClass('animate-progress');
  // }
})