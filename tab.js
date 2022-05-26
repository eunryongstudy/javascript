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