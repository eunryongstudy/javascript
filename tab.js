var 버튼 = $('.tab-button')

// for(let i = 0; i < $('.tab-button').length; i++){
//     버튼.eq(i).on('click', function(){
//         탭열기(i);
//     })
// }

function 탭열기(num){
        버튼.removeClass('orange');
        버튼.eq(num).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(num).addClass('show');
}


$('.list').click(function(e){
        탭열기(e.target.dataset.id);
})


// $('.card-body h5')[0].html = products[0]['title'];


// for(let i = 0; i < products.length; i++)
// {
//     document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title;
//     document.querySelectorAll('.card-body p')[i].innerHTML = '가격 : '+ products[i].price;
// }
$('.form-select').eq(0).on('input',function(){
    var pants = [28, 30, 32];
    var shirts = [95, 100, 105];
    var value = $('.form-select').eq(0).val();
    if(value == '셔츠'){
    $('.form-select').eq(1).removeClass('hide');
    $('.form-select').eq(1).html('');
    shirts.forEach(function(a){
        $('.form-select').eq(1).append(`<option>${a}</option>`);
    })
}   else if(value == '바지'){
    $('.form-select').eq(1).removeClass('hide');
    $('.form-select').eq(1).html('');
    
    pants.forEach(function(a){
        $('.form-select').eq(1).append(`<option>${a}</option>`);
    })
}
else{
    $('.form-select').eq(1).addClass('hide');
}
})


// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// var 템플릿 = '<p>안녕</p>'
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);

